<?php
$servername = "localhost";
$username = "id5414029_foxas";
$password = "aviete";
$dbname ="id5414029_bloger";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";
?>