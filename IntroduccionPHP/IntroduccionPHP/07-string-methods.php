<?php include 'includes/header.php';

$strNombreCliente = '  Juan Alberto  ';
echo strlen($strNombreCliente);
echo "<br>";
var_dump($strNombreCliente);

//Eliminar espacios en blanco al inicio y al final de una cadena
echo "<br>";
$strNuevaVariable = trim($strNombreCliente);
echo $strNuevaVariable;
echo "<br>";
echo strlen($strNuevaVariable);

// Convertir a mayusculas
echo "<br>";
echo strtoupper($strNuevaVariable);

// Convertir a minusculas
echo "<br>";
echo strtolower($strNuevaVariable);

$mail = 'correo@correo.com';
$mail2 = "Correo@correo.com";
echo "<br>";
var_dump(strtolower($mail) == strtolower($mail2));
echo "<br>";
echo str_replace('Juan', 'Pedro', $strNombreCliente);

//Revisar si un string existe o no
echo "<br>";
echo strpos($strNombreCliente, 'Alberto');

$strTipoCliente = 'Premium';

echo "<br>";
echo "El cliente es un ".$strTipoCliente;

echo "<br>";
echo "El cliente es un {$strTipoCliente}";

include 'includes/footer.php';