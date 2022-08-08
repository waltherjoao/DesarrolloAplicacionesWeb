<?php include 'includes/header.php';

// While
$incremento = 10; // Inicializamos el contador a 0

while($incremento <10) {
    echo $incremento. "<br>";
    $incremento++;
}

echo "<br>";
echo "==========================================================";
echo "==========================================================";
echo "==========================================================";
echo "<br>";
// Do While

$inc = 10;
do {
    echo $inc. "<br>";
    $inc++;
} while($inc < 10);

echo "<br>";
echo "==========================================================";
echo "==========================================================";
echo "==========================================================";
echo "<br>";
// For
for($increm = 0; $increm < 10; $increm+=2) {
    if($increm == 0) {
        continue;
    }
    echo $increm. "<br>";
}

echo "<br>";
echo "==========================================================";
echo "==========================================================";
echo "==========================================================";
echo "<br>";

/**
 * Recorrer 1 al 100 y mostrar por pantalla cuando el numero sea multiplo de:
 *
 * ===========================================================
 * ===========================================================
 * 3 imprimir Fizz
 * 5 imprimir Buzz
 * 3 y 5 imprimir FizzBuzz
 */
// for($variable = 1; $variable <= 100; $variable++){
//     if($variable %15 == 0){
//     // if($variable % 3 == 0 && $variable % 5 == 0){
//         echo $variable. " FizzBuzz <br>";
//     } else if($variable % 3 == 0) {
//         echo $variable. " Fizz <br>";
//     } else if($variable % 5 == 0) {
//         echo $variable. " Buzz <br>";
//     }
// }

echo "<br>";
echo "==========================================================";
echo "==========================================================";
echo "==========================================================";
echo "<br>";

// For Each arreglo indexado
$arrayNombre = array('Juan', 'Pedro', 'Maria', 'Jose');
var_dump($arrayNombre);
echo "<br>";
foreach($arrayNombre as $nombre) {
    echo $nombre. "<br>";
}

echo "<br>";
echo "==========================================================";
echo "==========================================================";
echo "==========================================================";
echo "<br>";
// For each arreglo asociativo
$cliente = array(
                'nombre'        => 'Juan',
                'saldo'         => 1000,
                'tipo'          => 'Premium',
            );
var_dump($cliente);
echo "<br>";
foreach($cliente as $clave => $valor) {
    echo $clave." ====>   ".$valor. "<br>";
}

include 'includes/footer.php';