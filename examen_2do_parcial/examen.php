<?php
    require 'src/funciones.php';
    $objRequest = file_get_contents('php://input');
    $arrayRequest = json_decode($objRequest, true);
    $arrayResponse = array();
    switch($arrayRequest['op']){
        case 'Guardar':
            $arrayResponse = guardarUsuario($arrayRequest['data']);
            break;
        case 'Listar':
            $arrayResponse = listarUsuario();
            break;
        case 'Actualizar':
            $arrayResponse = actualizarUsuario($arrayRequest['data']);
            break;
        case 'Eliminar':
            $arrayResponse = eliminarUsuario($arrayRequest['data']);
            break;
    }
    echo json_encode($arrayResponse, JSON_UNESCAPED_UNICODE);
