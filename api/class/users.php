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
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        
        if(!isset($_SESSION)) {
            return false;
        }
        
        return true;
    }
    function get_public_userinfo() {
        if (!$this->logged_in() || !isset($_SESSION['userID'])) {
            // Log an error message or return an informative response
            error_log("Error: User not logged in or userID not set");
            return false;
        }
    
        $this->sql->where('id', $_SESSION['userID']);
        $userInfo = $this->sql->get('users', 1, ['username', 'email']);
        
        if (empty($userInfo)) {
            // Log an error message or return an informative response
            error_log("Error: No user information found for userID {$_SESSION['userID']}");
            return false;
        }
    
        return $userInfo[0];
    }
    

}


?>