<?php
if($_POST){
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $message = $_POST['message'];
  
    $subject = "Request from " . $name." (".$contact.")";
    mail("office@seregfilm.ro", $subject, $message);
}
?>