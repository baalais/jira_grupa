<?php
// Establish database connection
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "jira_grupa"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Handling the GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
    } else {
        // If no ID is provided, fetch the first task
        $id = 1;
    }

    try {
        $stmt = $conn->prepare('SELECT tasks.*, users.username FROM tasks 
                                    INNER JOIN users ON tasks.user_id = users.id 
                                    WHERE tasks.id = ?');
        $stmt->bind_param('s', $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $task = $result->fetch_assoc();
        $stmt->close();

        if ($task) {
            header('Content-Type: application/json');
            echo json_encode($task);
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Task not found']);
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}

$conn->close();
?>
