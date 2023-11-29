<?php

class Users{
    private $sql;

    function __construct($sql){
        $this->sql = $sql;
    }

    function check_username($username){
        $this->sql->where('username', $username);
        return $this->sql->getValue('users', 'COUNT(*)');
    }

    function hash_pass($password){
        return hash('sha256', $password);
    }

    function register($username, $email, $password){
        $data = array(
            'username' => $username,
            'email' => $email,
            'password' => $this->hash_pass($password)
        );
        if(!$this->sql->insert('users', $data)){
            return $this->sql->getLastError();
        }

        return 1;
    }

    function login($username, $password){
        $this->sql->where('username', $username);
        $this->sql->where('password', $this->hash_pass($password));
        

        $usrID = $this->sql->getValue('users', 'id');
        if($usrID == '') return false;
        return $usrID;
    }

    function logged_in(){
        @session_start();
        if(!isset($_SESSION['jira']) || !isset($_SESSION['jira']['login'])) return false;
        return true;
    }

}


?>