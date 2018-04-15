<?php
include ('dbcon.php'); 
$sql = "SELECT id, title, post, user,tag, data FROM blog order by data desc";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
        $data[]=$row;
    }
 }
    else{
      echo "no records found";
    }
 
  print json_encode($data);


      
?>