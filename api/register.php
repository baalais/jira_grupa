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
    // echo 'tests';

    if ($user->check_username($data['username']) >= 1) {
        $response = [
            'status' => 'error',
            'message' => 'Profile already exists!'
        ];
    }
    else {
        if ($user->register($data['username'], $data['email'], $data['password'])) {
            $response = [
                'status' => 'success',
                'message' => 'Account was created successfully!'
            ];
        } else {
            $response = [
                'status' => 'error',
                'message' => 'Error creating account. Please try again later.'
            ];
        }
    }

    echo json_encode(['registrationData' => $data, 'response' => $response]);


}

