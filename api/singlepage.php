<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000'); // Adjust the origin as needed

$host = 'localhost';
$dbname = 'jira_grupa';
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    die();
}

// Hardcoded ID to always fetch task with ID 1
$id = 1;

$stmt = $conn->prepare('SELECT * FROM tasks WHERE id = ?');
$stmt->execute([$id]);
$task = $stmt->fetch(PDO::FETCH_ASSOC);

if ($task) {
    echo json_encode($task);
} else {
    http_response_code(404); // Not Found
    echo json_encode(['error' => 'Task not found']);
}
?>
