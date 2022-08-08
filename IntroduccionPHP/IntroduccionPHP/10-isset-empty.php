<?php include 'includes/header.php';

$clientes = [];
$cliente2 = array();
$cliente3 = array('Pedro', 'Juan', 'Maria');
$cliente = ['nombre' => 'Juan', 
            'saldo'  => 1000];

//Empty - Revisa si un arreglo esta vacio o no
var_dump(empty($clientes));
echo "<br>";
var_dump(empty($cliente2));
echo "<br>";
var_dump(empty($cliente3));
echo "<br>";
echo "------------------------------";
echo "<br>";
//Isset - Revisar si un arreglo esta creado o una propiedad esta definida.
var_dump(isset($instituto));
echo "<br>";
var_dump(isset($clientes));

// Isset - permite revisar si una propiedad de un arreglo asociativo, existe!
echo "<br>";
echo "------------------------------";
echo "<br>";
var_dump(isset($cliente['nombre']));
echo "<br>";
var_dump(isset($cliente['edad']));

include 'includes/footer.php';