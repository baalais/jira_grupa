<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "jira_grupa"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];

        $stmt = $conn->prepare('SELECT tasks.*, users.username FROM tasks 
                                     INNER JOIN users ON tasks.user_id = users.id 
                                     WHERE tasks.id = ?');
        $stmt->bind_param('s', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $task = $result->fetch_assoc();
        $stmt->close();

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

$conn->close();
?>
