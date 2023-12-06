<?php

include './cors.php';
include './db.php';
include './functions.php';
include './class/users.php';

$usr = new Users($GLOBALS['sql']);


if(!$usr->logged_in()){
    error('Login is required!');
}

success($usr->get_public_userinfo());

?>