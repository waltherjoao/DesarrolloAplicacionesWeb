<?php

$db = mysqli_connect('localhost', 'root', 'root', 'examen');

if(!$db){
    echo 'Error al conectar con la base de datos';
}