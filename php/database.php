<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "capheviet";

// Tạo kết nối với MySQLi
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>