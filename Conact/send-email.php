<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "ricards.jeremicevs@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="formstyle.css">
</head>
<body>
    <div class="container">
        <h1>Paldies, ka sazinājāties ar mums, centīsimies atbildēt pēc iespējas ātrāk</h1>
        <p class="back">Atgriezties atpakaļ uz <a href="index.html">mājaslapu</a>.</p>
    </div>
</body>
</html>



';


?>