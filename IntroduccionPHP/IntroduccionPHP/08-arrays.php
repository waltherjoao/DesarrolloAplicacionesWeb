<?php include 'includes/header.php';

//Arreglos indexados
$arrayNombre = array('Juan', 'Pedro', 'Maria', 'Jose');
echo "<pre>";
print_r($arrayNombre);
echo "</pre>";

echo "<br>";
echo $arrayNombre[2];

$arrayProducto = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
// $arrayProducto[12] = 'Producto 5';
// Añadir un elemento al final del arreglo
array_push($arrayProducto, 'Producto 5');
// Añadir un elemento al inicio del arreglo
array_unshift($arrayProducto, 'Producto 0');
echo "<br>";
echo "<pre>";
var_dump($arrayProducto);
echo "</pre>";

include 'includes/footer.php';