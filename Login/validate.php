<?php

$user = $_POST['user'];
$password = $_POST['password'];

session_start();

$_SESSION['user']=$user;

include('../db.php');

$query = "SELECT * FROM registered_users WHERE user='$user' and password='$password'";

$answer = mysqli_query($connection, $query);

$rows = mysqli_num_rows($answer);

if ($rows) {
    header("location:home.html");
} else {
    ?>
    <?php
    include("./index.html");
    ?>
    <span class="error" style="
        width: 100%;
        position: absolute;
        bottom: 3rem;
        padding: 1rem;
        background: white;
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        color: var(--background-dark-blue);">Your username is not registered</span>
    <?php
}

mysqli_free_result($answer);
mysqli_close($connection);