<?php
include './db.php';
include './functions.php';
include './class/users.php';
$user = new Users($GLOBALS['sql']);

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    // print_r($data);
    echo json_encode($data);

    if($user->check_username($_POST['username']) == 0){
        error('Account does not exist');
    }
    
    
    $usrID = $user->login($_POST['username'], $_POST['password']);
    if(!$usrID){
        error('Username or password was not correct');
    }
    
    @session_start();
    $_SESSION['jira']['login'] = $usrID;
    
    success("Logged in successfully ");
}