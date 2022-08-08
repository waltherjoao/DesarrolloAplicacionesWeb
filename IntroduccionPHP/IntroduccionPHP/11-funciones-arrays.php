<?php include 'includes/header.php';

// in_array - buscar elementos en un arreglo
$carrito = ['Tablet', 'Smartphone', 'Laptop', 'Teclado'];
var_dump( in_array('Tablet', $carrito) );
echo "<br>";
var_dump( in_array('Cocina', $carrito) );

// Ordenar elementos de un arreglo
$numero = [7, 2, 1, 8, 5];
echo "<br>";
echo "<pre>";
sort($numero);
var_dump($numero);
echo "</pre>";

echo "<br>";
echo "<pre>";
rsort($numero);
var_dump($numero);
echo "</pre>";

// Ordenar arreglo asociativo
$cliente = array(
                'nombre'        => 'Juan',
                'saldo'         => 1000,
                'tipo'          => 'Premium',
            );

echo "<br>";
echo "<pre>";
var_dump($cliente);
echo "</pre>";
echo "<br>";

//asort($cliente);  //Ordena por valores (orden alfabético)
//arsort($cliente); //Ordena por valores (orden alfabético inverso)
//ksort($cliente);  //Ordena por claves (orden alfabético)
krsort($cliente); //Ordena por claves (orden alfabético inverso)


echo "<pre>";
var_dump($cliente);
echo "</pre>";

include 'includes/footer.php';