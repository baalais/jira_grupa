<?php
// Establish database connection
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "jira_grupa"; // Replace with your database name

// Handling the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $due_date = $_POST['date'];
    $user_id = $_POST['user_id']; // Assuming you pass user_id from frontend

    $sql = "INSERT INTO tasks (user_id, title, description, due_date, status) 
            VALUES (:user_id, :title, :description, :due_date, 'Pending')"; // Assuming your table name is 'tasks'

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':due_date', $due_date);

    try {
        $stmt->execute();
        echo json_encode(array('success' => true, 'message' => 'Task added successfully'));
    } catch(PDOException $e) {
        echo json_encode(array('success' => false, 'error' => 'Failed to add task'));
    }
}
?>