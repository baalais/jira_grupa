<?php
include './db.php';
include './functions.php';
include './class/users.php';
$user = new Users($GLOBALS['sql']);

if($user->check_username($_POST['username']) >= 1){
    error('Profile already exists!');
}

if($user->register($_POST['username'], $_POST['email'], $_POST['password'])){
    success('Account was created successfully!');
}

?>