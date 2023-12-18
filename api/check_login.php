<?php
include './db.php';
include './cors.php';

// Check if the "token" cookie is set
if (isset($_COOKIE['token'])) {
    $token = $_COOKIE['token'];

    // Example: Assuming you have a "users" table with a "token" column
    $database = new Database();
    $query = "SELECT * FROM `users` WHERE `token` = '$token'";
    $result = $database->select($query);

    if ($result && count($result) > 0) {
        // User is logged in
        $user = $result[0]; // Access the first row
        echo json_encode(['isLoggedIn' => true, 'message' => 'User is logged in', 'username' => $user['username'], 'token' => $token]);
    } else {
        // User is not logged in or token is invalid
        echo json_encode(['isLoggedIn' => false, 'message' => 'User is not logged in']);
    }
} else {
    // "token" cookie is not set, user is not logged in
    echo json_encode(['isLoggedIn' => false, 'message' => 'User is not logged in']);
}
?>
