<?php


  $NAME = $_POST['NAME'];
        $SURNAME = $_POST['SURNAME'];
        $GENDER = $_POST['GENDER'];
        $TELEPHONE = $_POST['TELEPHONE'];
        $AGE = $_POST['AGE'];


        $host = "%localhost";
        $dbUsername = "Sleepy";
        $dbPassword = "";
        $dbName = "first";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

?>

