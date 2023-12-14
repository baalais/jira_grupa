<?php

session_start(); 

include './db.php';
include './functions.php';
include './cors.php';

$database = new Database();
$errors = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userData = json_decode(file_get_contents('php://input'), true);

    $username = isset($userData['username']) ? $userData['username'] : null;
    $password = isset($userData['password']) ? $userData['password'] : null;

    if (empty($username)) {
        $errors['username'] = "Username is required.";
    }
    if (empty($password)) {
        $errors['password'] = "Password is required.";
    }

    if (empty($errors)) {
        // No validation errors, proceed with authentication
        $query = "SELECT * FROM `users` WHERE `username` = '$username'";
        $result = $database->select($query);

        if ($result && count($result) > 0) {
            $user = $result[0];
            $hashedPassword = $user['password'];

            if (password_verify($password, $hashedPassword)) {
                // Authentication succeeded
                $_SESSION['username'] = $username;
                $_SESSION['email'] = $user['email'];
                $_SESSION['id'] = $user['id'];
                $_SESSION['user_logged_in'] = true;

                echo json_encode(['status' => 'success', 'message' => 'Login successful', 'status_session' => $_SESSION['user_logged_in']]);
            } else {
                $errors['password'] = "Invalid password.";
            }
        } else {
            $errors['username'] = "User not found.";
        }
    }

    if (!empty($errors)) {
        // Output validation errors in JSON format
        echo json_encode(['status' => 'error', 'errors' => $errors]);
    }
} else {
    echo "Invalid request.";
}
