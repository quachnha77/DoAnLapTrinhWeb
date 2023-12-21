<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "capheviet";

// Create connection
$conn =  mysqli_connect($servername, $username, $password, $dbname);

// Check for connection errors
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>