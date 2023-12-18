<?php

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
                $token = generateToken();
                // Authentication succeeded
                //setcookie('token', $token, time() + (86400), "/"); // 86400 seconds = 1 day

                $userId = $user['id'];
                $updateTokenQuery = "UPDATE `users` SET `token` = '$token' WHERE `id` = '$userId'";
                $database->update($updateTokenQuery);
                
                echo json_encode(['status' => 'success', 'message' => 'Login successful', 'token' => $token, 'cookie' => $_COOKIE]);
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
?>
