<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


class Database {
    private $host = "localhost"; 
    private $username = "root";
    private $password = ""; 
    private $database = "jira_grupa"; 
    private $conn;

    public function __construct() 
    {
        $this->conn = $this->connect();
    }

    private function connect() 
    {
        $conn = new mysqli($this->host, $this->username, $this->password, $this->database);

        // Check if the connection was successful
        if ($conn->connect_error) {
            die("Connection error: " . $conn->connect_error);
        }

        return $conn;
    }

    function insert($sql)
    {
        if ($this->conn->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }

    function delete($sql)
    {
        if ($this->conn->query($sql)) {
            return true; // Delete operation successful
        } else {
            return false; // Delete operation failed
        }
    }

    function select($sql)
    {
        $result = $this->conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    function selectOne($sql)
    {
        $result = $this->conn->query($sql);
        return $result->fetch_assoc();
    }

    public function update($sql)
    {
        return $this->conn->query($sql);
    }

    public function getConnection()
    {
        return $this->conn;
    }

}


?>