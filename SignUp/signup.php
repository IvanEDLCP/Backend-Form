<?php

include('../db.php');

$user=$_POST['user'];
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

$query = "INSERT INTO Registered_users (User, Name, Email, Password)
VALUES ('$user', '$name', '$email', '$password');";

$answer = mysqli_query($connection, $query) or die('Registration error');

header("location: message.html");

mysqli_close($connection);

?>