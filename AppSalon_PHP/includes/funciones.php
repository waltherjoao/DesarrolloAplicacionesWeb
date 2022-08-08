<?php

function obtenerServicios() {
    try {
        require 'database.php';
        $strSql      = "SELECT * FROM servicios";
        $strEjecutar = mysqli_query($db, $strSql);

        $arrayServicios = array();
        while ($row = mysqli_fetch_assoc($strEjecutar)){
            $arrayServicios[] = array('id'      => $row['id'],
                                      'nombre'  => $row['nombre'],
                                      'precio'  => $row['precio'],
                                      'imagen'  => $row['imagen']);
        }
        return $arrayServicios;
    } catch (\Throwable $th) {
        echo $th->getMessage();
    }
}

function guardarServicios($arrayParametro){
    try {
        $arrayResponse = array();
        require 'database.php';
        $arrayServicio = $arrayParametro;
        $strSql = "INSERT INTO servicios (nombre, precio, imagen) VALUES ('$arrayServicio[nombre]', 
                                                                          '$arrayServicio[precio]',
                                                                          '$arrayServicio[imagen]')";
        $strEjecutar = mysqli_query($db, $strSql);
        if($strEjecutar){
            $arrayResponse = array("mensaje"    => "Se guardo correctamente",
                                    "status"    => "ok",
                                    "code"      => 200);
        }else{
            $arrayResponse = array("mensaje"    => "No se pudo guardar",
                                    "status"    => "error",
                                    "code"      => 500);
        }
        return $arrayResponse;
    } catch (\Throwable $th) {
        echo $th->getMessage();
    }
}