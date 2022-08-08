<?php include 'includes/header.php';

//Arreglos indexados
$carrito = ['producto1', 'producto2', 'producto3'];
//Util para ver los contenidos de un arreglo
echo "<pre>";
var_dump($carrito);
echo "</pre>";
//Acceder a un elemento de un arreglo
echo $carrito[0];
//Añadir un elemento al arreglo con indice 3
$carrito[3] = 'producto4';

//Añadir un elemento al final del arreglo
array_push($carrito, 'producto5');

//Añadir al inicio del arreglo
array_unshift($carrito, 'producto6');

$arreglo = array("Juan", "Pedro", "Maria");
echo "<pre>";
var_dump($arreglo);
echo "</pre>";

include 'includes/footer.php';