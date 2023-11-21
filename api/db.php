<?php
include './headers.php';

$sql = new DB($GLOBALS['host'], $GLOBALS['user'], $GLOBALS['pass'], $GLOBALS['db']);

class DB {
  private $servername = "localhost";
  private $username = "root";
  private $password = "";
  private $dbname = "jira_grupa";
  private $conn;


  public function __construct() {
      $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);


      if ($this->conn->connect_error) {
          die("Connection failed: " . $this->conn->connect_error);
      }
      echo "Connected successfully";
  }
}

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $title = $_POST['title'];
//     $description = $_POST['description'];
//     $due_date = $_POST['date'];

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "jira_grupa";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);

// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";

// $sql = "INSERT INTO `tasks`(`user_id`, `title`, `description`, `due_date`) VALUES ('user_id','title','description','dueDate')";


   
// }else{
//     echo "nav";
// }

?>