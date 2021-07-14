<?php
// define variables and set to empty values
$yourEmail = $myName = $myEmail = $mySubject = $myMessage = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $yourEmail = $_POST["yourEmail"];
  $myName = $_POST["myName"];
  $myEmail = $_POST["myEmail"];
  $mySubject = $_POST["mySubject"];
  $myMessage = $_POST["myMessage"];
}


// $to = $yourEmail;
// $subject = $mySubject;
// $headers = "From: <br>Name: $myName<br>E-mail: $myEmail";
// $message = $myMessage;

// mail($to,$subject,$message,$headers);

$sender_email  = 'From: nivedi22singhal@gmail.com'  . "\r\n" .


            'MIME-Version: 1.0' . "\r\n" .

            'Content-type: text/html; charset=utf-8';

mail($to, $subject, $myMessage, $sender_email);
if(!mail){
    echo "succ";
?>
