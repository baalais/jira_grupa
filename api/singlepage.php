<?php
include_once('db.php');

// public function getTaskById($id)
//     {
//         $stmt = $this->db->prepare('SELECT * FROM tasks WHERE id = ?');
//         $stmt->execute([$id]);
//         $task = $stmt->fetch(PDO::FETCH_ASSOC);
//         return $task;
//     }

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $task = $api->getTaskById($id);
        if ($task) {
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Task not found']);
        }
    }
    
}
// 'SELECT * FROM tasks WHERE id = ?'
?>