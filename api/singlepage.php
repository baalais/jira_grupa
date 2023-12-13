<?php
class SinglePage
{
    private $DB;

    public function __construct()
    {
        $this->DB = new mysqli("localhost", "root", "", "jira_grupa");

        if ($this->DB->connect_error) {
            die("Connection failed: " . $this->DB->connect_error);
        }
    }

    public function GetConnectionError()
    {
        return $this->DB->connect_error;
    }

    public function GetTaskByID($id)
    {
        $stmt = $this->DB->prepare("SELECT id, title, description, due_date, status FROM tasks WHERE id=? LIMIT 1");
        $stmt->bind_param("i", $id);
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows <= 0) {
            return null;
        }

        return $result->fetch_array(MYSQLI_ASSOC);
    }
}

// Enable CORS headers
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$request_method = $_SERVER["REQUEST_METHOD"];
$DB = new SinglePage();

if ($request_method === "OPTIONS") {
    // Handle pre-flight CORS request
    header("HTTP/1.1 200 OK");
    exit();
}

if ($request_method === "GET") {
    try {
        $requestData = json_decode(file_get_contents("php://input"), true);

        if (isset($requestData["id"])) {
            $task = $DB->GetTaskByID($requestData["id"]);
            if ($task) {
                exit(json_encode(["status" => "Success", "message" => "Task Retrieved Successfully", "data" => $task]));
            } else {
                exit(json_encode(["status" => "Failure", "message" => "Task Not Found"]));
            }
        } else {
            exit(json_encode(["status" => "Failure", "message" => "Missing Task ID"]));
        }
    } catch (Exception $e) {
        // Send a JSON response for the error
        exit(json_encode(["status" => "Failure", "message" => "Something Went Wrong - Server Side Error", "error" => $e->getMessage()]));
    }
} else {
    exit(json_encode(["status" => "Failure", "message" => "Bad Request Method"]));
}
?>
