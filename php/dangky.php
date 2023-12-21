<?php
include "connect.php";

// Lấy dữ liệu từ biểu mẫu HTML
$fullname = $_POST['fullname'];
$password = $_POST['password'];
$email = $_POST['email'];

// Chuẩn bị truy vấn SQL để chèn dữ liệu
$sql = "INSERT INTO taikhoan (id, hoten, email, matkhau, quyen, token) VALUES (1311111999,'5', '5', '5',1,'321')";

// Đóng kết nối
$conn->close();
?>

                
