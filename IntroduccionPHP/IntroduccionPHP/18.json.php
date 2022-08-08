<?php include 'includes/header.php';

$arrayProductos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Televisión',
        'precio' => 300,
        'disponible' => false
    ],
    [
        'nombre' => 'Laptop',
        'precio' => 400,
        'disponible' => true
    ]
];

echo "<pre>";
var_dump($arrayProductos);
echo "</pre>";

//CONVERTIR ARRAY A JSON
$objJson = json_encode($arrayProductos, JSON_UNESCAPED_UNICODE);
echo $objJson;
echo "<br>";
//CONVERTIR JSON A ARRAY
$arrayElemento = json_decode($objJson);
echo "<pre>";
var_dump($arrayElemento);
echo "</pre>";
include 'includes/footer.php';