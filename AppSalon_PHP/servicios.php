<?php
require 'includes/funciones.php';
$objRequest = file_get_contents('php://input');
$arrayRequest = json_decode($objRequest, true);
$arrayResponse = array();
switch($arrayRequest['op']){
    case 'obtenerServicios':
        $arrayResponse = obtenerServicios();
        break;
    case 'guardarServicios':
        $arrayResponse = guardarServicios($arrayRequest['data']);
        break;
}

echo json_encode($arrayResponse, JSON_UNESCAPED_UNICODE);
