<?php
// include database connection
include ('dbcon.php'); 

// Takes a JSON encoded string and converts it into a PHP variable. php://input allows you to read raw POST data. php://input is not available with enctype="multipart/form-data".

$data = json_decode(file_get_contents("php://input")); 

//real_escape_string Escape special characters in a string.
$id = $conn->real_escape_string($data->id); 

//query to mysql table
$sql = "DELETE FROM blog WHERE id='$id'";

// if query are correct or bad throw message
if ($conn->query($sql) === TRUE) {
    echo "data successfully deleted";
} else {
    echo "Error deleting record: " . $conn->error;
}

?>