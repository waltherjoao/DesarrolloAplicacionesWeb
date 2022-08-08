<?php
$db = mysqli_connect('localhost', 'root', 'root', 'appsalon');

if(!$db){
    echo "No se pudo conectar a la base de datos";
    echo "error de depuración: " . mysqli_connect_error();
    exit;
}
