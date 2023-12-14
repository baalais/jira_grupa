<?php
session_start();
include './cors.php';

print_r($_SESSION);

if (!isset($_SESSION['user_logged_in']) || $_SESSION['user_logged_in'] !== true) {
    echo json_encode(['isLoggedIn' => false]);
} else {
    echo json_encode(['isLoggedIn' => true, 'username' => $_SESSION['username']]);
}

?>