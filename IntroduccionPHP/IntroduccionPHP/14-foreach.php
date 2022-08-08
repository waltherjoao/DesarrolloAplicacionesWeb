<?php include 'includes/header.php';

$arrayProducto = [
    [
        'nombre' => 'Producto 1',
        'precio' => 10,
        'disponible' => true
    ],
    [
        'nombre' => 'Producto 2',
        'precio' => 20,
        'disponible' => false
    ],
    [
        'nombre' => 'Producto 3',
        'precio' => 30,
        'disponible' => false
    ],
    [
        'nombre' => 'Producto 4',
        'precio' => 40,
        'disponible' => true
    ],
    [
        'nombre' => 'Producto 5',
        'precio' => 50,
        'disponible' => true
    ],
    [
        'nombre' => 'Producto 6',
        'precio' => 60,
        'disponible' => true
    ],
    [
        'nombre' => 'Producto 7',
        'precio' => 70,
        'disponible' => false
    ],
    [
        'nombre' => 'Producto 8',
        'precio' => 80,
        'disponible' => false
    ],
    [
        'nombre' => 'Producto 9',
        'precio' => 90,
        'disponible' => true
    ],
    [
        'nombre' => 'Producto 10',
        'precio' => 100,
        'disponible' => true
    ]
    ];

foreach($arrayProducto as $objProducto) {?>
    <li>
        <p>Items:  <?php echo $objProducto['nombre']; ?></p>
        <p>Precio:  <?php echo $objProducto['precio']; ?></p>
        <p>Disponible:  <?php echo $objProducto['disponible'] ? "Existe" : "No Existe" ?></p>
    </li>
<?php
}

include 'includes/footer.php';
?>
<p> esta es una clase de desarrollo web </p>
<a href="https://www.google.com"> google </a>