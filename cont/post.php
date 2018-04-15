<?php
include ('dbcon.php'); 
$data = json_decode(file_get_contents("php://input"));
$title= $conn->real_escape_string($data->title);
$post = $conn->real_escape_string($data->post);
$user = $conn->real_escape_string($data->user);
$tag = $conn->real_escape_string($data->tag);
$time = date(" Y-m-d G:i:s")."<br>";
$sql= "INSERT INTO blog (id,title,post,user,tag ,data) VALUES (id,'$title','$post','$user','$tag','$time')";
if ($conn->query($sql) === TRUE) {
    echo "data successfully imported";   
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>