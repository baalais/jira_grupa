<?php
include './db.php';
include './functions.php';
include './class/users.php';
include './cors.php';

$user = new Users($GLOBALS['sql']);


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if($user->check_username($data['username']) == 0){
        respond(false, 'Account does not exist');
    }
    
    $usrID = $user->login($data['username'], $data['password']);
    if(!$usrID){
        respond(false, 'Username or password was not correct');
    }
    
    session_start();
    $_SESSION['userID'] = $usrID;
    $_SESSION['username'] = $data['username'];

    respond(true, 'Logged in successfully');
}

function respond($status, $message) {
    header('Content-Type: application/json');
    echo json_encode(['status' => $status, 'message' => $message]);
    exit();
}

