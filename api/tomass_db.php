<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $inputJSON = file_get_contents('php://input');

  // Decode the JSON data
  $data = json_decode($inputJSON, true);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "jira_grupa";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    // if ($conn->connect_error) {
    //   die("Connection failed: " . $conn->connect_error);
    // }

    $sql = "INSERT INTO `tasks` ( `user_id`, `title`, `description`, `due_date`, `status`) VALUES ('2', '{$data['title']}', '{$data['description']}', '{$data['date']}', '{$data['status']}');";

    if ($conn->query($sql) === TRUE) {
      echo json_encode(array('success' => true, 'message' => 'New record created successfully'));
  } else {
      echo json_encode(array('success' => false, 'error' => 'Error creating record'));
  }
  
  // echo json_encode($data);

}
?>