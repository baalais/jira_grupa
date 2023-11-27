<?php
include './db.php';
include './functions.php';
include './class/users.php';
$user = new Users($GLOBALS['sql']);

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    // print_r($data);
    echo json_encode($data);
    // echo 'tests';
    // if($user->check_username($data['username']) >= 1){
    //     error('Profile already exists!');
    // }

    // if($user->register($data['username'], $data['email'], $data['password'])){
    //     success('Account was created successfully!');
    // }
}

