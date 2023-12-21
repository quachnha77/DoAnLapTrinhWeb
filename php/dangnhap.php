<?php
include 'db_connect.php';

// Lấy dữ liệu từ form
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$password = $_POST['password'];

// Tạo truy vấn SQL
$sql = "INSERT INTO users (fullname, email, password) VALUES ('$fullname', '$email', '$password')";

// Thực hiện truy vấn
if ($conn->query($sql) === TRUE) {
  echo "User registered successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Đóng kết nối
$conn->close();
?>