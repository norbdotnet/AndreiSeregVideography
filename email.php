<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['text'];
  
    $subject = "Request from " . $name."(".$email.")";
  
    mail("office@seregfilm.ro", $subject, $message);
}
?>