<?php 
declare(strict_types=1);
include 'includes/header.php';

function usuarioAutenticado(bool $isAutenticado) : string{
    if($isAutenticado){
        return "Usuario autenticado";
    }else{
        return "Usuario no autenticado";
    }
}
    
$strMensaje = usuarioAutenticado(false);
echo $strMensaje;



include 'includes/footer.php';