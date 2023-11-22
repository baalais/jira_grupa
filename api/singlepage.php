<?php
include './headers.php';
include './db.php';

class Single {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getTaskById($id) {
        $stmt = $this->conn->prepare('SELECT tasks.*, users.username FROM tasks 
                                     INNER JOIN users ON tasks.user_id = users.id 
                                     WHERE tasks.id = ?');
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $task = $result->fetch_assoc();
        $stmt->close();
        return $task;
    }
}

// Instantiate the DB class
$sql = new DB();

// Instantiate the Single class and pass the database connection
$api = new Single($sql->getConnection());

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];

        $task = $api->getTaskById($id);

        if ($task) {
            // Set proper headers for a JSON response
            header('Content-Type: application/json');
            echo json_encode($task);
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Task not found']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'No task ID provided']);
    }
}
?>
