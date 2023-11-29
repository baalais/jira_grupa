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

}


?>