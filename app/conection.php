<?php

$serverName = "localhost";

$userName = "root";

$password = "";

$dbName = "sistema_escolar";



$conn = new mysqli($serverName, $userName, $password, $dbName);



if ($conn->connect_error) {

    die("Error de conexión:" . $conn->connect_error);
}
