<?php

function guardarUsuario($arrayParametro){
    try{
        $arrayResponse = array();
        require 'database.php';
        $strSql = "INSERT INTO tbl_usuario(nombre, edad, direccion, telefono, correo)
                    VALUES (?, ?, ?, ?, ?)";
        $stmt   = $db->prepare($strSql);
        $stmt->bind_param('sssss', $nombre,
                                    $edad,
                                    $direccion,
                                    $telefono,
                                    $correo);
        $nombre     = $arrayParametro['nombre'];
        $edad       = $arrayParametro['edad'];
        $direccion  = $arrayParametro['direccion'];
        $telefono   = $arrayParametro['telefono'];
        $correo     = $arrayParametro['correo'];
        $boolGuardar= $stmt->execute();
        if($boolGuardar){
            $arrayResponse = array("mensaje"    => "Se guardo correctamente",
                                   "status"     => "OK",
                                   "code"       => 200);
        } else {
            $arrayResponse = array("mensaje"    => "No se pudo guardo",
                                   "status"     => "ERROR",
                                   "code"       => 500);
        }
        return $arrayResponse;
    } catch(\Throwable $th) {
        echo 'guardarUsuario '.$th->getMessage();
    }
}

function listarUsuario(){
    try{
        $arrayResponse = array();
        require 'database.php';
        $strSql = "SELECT * FROM tbl_usuario";
        $stmt   = $db->prepare($strSql);
        $stmt->execute();
        $result = $stmt->get_result();
        $arrayResponse['data'] = $result->fetch_all(MYSQLI_ASSOC);
        return $arrayResponse;
    } catch(\Throwable $th) {
        echo 'listarUsuario '.$th->getMessage();
    }   
}

function actualizarUsuario($arrayParametro){
    try{
        $arrayResponse = array();
        require 'database.php';
        $strSql = "UPDATE tbl_usuario
                   SET nombre = ?,
                   edad = ?,
                   direccion = ?,
                   telefono = ?,
                   correo = ?
                   WHERE id = ?";
        $stmt  = $db->prepare($strSql);
        $stmt->bind_param('sssssi', $nombre,
                                    $edad,
                                    $direccion,
                                    $telefono,
                                    $correo,
                                    $id);
        $nombre     = $arrayParametro['nombre'];
        $edad       = $arrayParametro['edad'];
        $direccion  = $arrayParametro['direccion'];
        $telefono   = $arrayParametro['telefono'];
        $correo     = $arrayParametro['correo'];
        $id         = $arrayParametro['id'];
        $boolActualizar= $stmt->execute();
        if($boolActualizar){
            $arrayResponse = array("mensaje"    => "Se actualizo correctamente",
                                   "status"     => "OK",
                                   "code"       => 200);
        } else {
            $arrayResponse = array("mensaje"    => "No se pudo actualizar",
                                   "status"     => "ERROR",
                                   "code"       => 500);
        }
        return $arrayResponse;
    } catch(\Throwable $th) {
        echo 'actualizarUsuario '.$th->getMessage();
    }
}

function eliminarUsuario($arrayParametro){
    try{
        $arrayResponse = array();
        require 'database.php';
        $strSql = "DELETE FROM tbl_usuario WHERE id = ?";
        $stmt   = $db->prepare($strSql);
        $stmt->bind_param('i', $id);
        $id = $arrayParametro['id'];
        $boolEliminar= $stmt->execute();
        if($boolEliminar){
            $arrayResponse = array("mensaje"    => "Se elimino correctamente",
                                   "status"     => "OK",
                                   "code"       => 200);
        } else {
            $arrayResponse = array("mensaje"    => "No se pudo eliminar",
                                   "status"     => "ERROR",
                                   "code"       => 500);
        }
        return $arrayResponse;
    } catch(\Throwable $th) {
        echo 'eliminarUsuario '.$th->getMessage();
    }
}