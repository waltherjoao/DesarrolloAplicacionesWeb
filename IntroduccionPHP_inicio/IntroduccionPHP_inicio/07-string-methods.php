<?php include 'includes/header.php';

$nombreCliente = "Juan Alberto";
echo strlen($nombreCliente);
var_dump($nombreCliente);

//Eliminar espacios en blanco al inicio y al final de una cadena
$texto = trim($nombreCliente);
echo strlen($texto);

//Covertir a mayusculas
echo strtoupper($texto);

//Covertir a minusculas
echo strtolower($texto);

$mail1 = "correo@correo.com";
$mail2 = "Correo@correo.com";

var_dump(strtolower($mail1) == strtolower($mail2));
echo str_replace('Juan', 'J', $nombreCliente);

// Revisar si un string existe o no.
echo strpos($nombreCliente, 'Juan');

$tipoCliente = "Premium";
echo "El cliente es un {$tipoCliente}";
echo "<br>";

echo "El cliente es un " . $tipoCliente;

include 'includes/footer.php';