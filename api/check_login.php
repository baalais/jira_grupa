<?php
include './cors.php';
include './db.php';
include './functions.php';
include './class/users.php';

$user = new Users($GLOBALS['sql']);


if(!$user->logged_in()){
    error('Login is required!');
}

success($user->get_public_userinfo());

?>