<?php include 'includes/header.php';

$intNumero1 = 10;
$intNumero2 = 20;
$intNumero3 = 20;
$intNumero4 = "20";

var_dump($intNumero1 < $intNumero2);
echo "<br>";

var_dump($intNumero1 > $intNumero2);
echo "<br>";
var_dump($intNumero2 == $intNumero3);
echo "<br>";
var_dump($intNumero2 == $intNumero4);
echo "<br>";
var_dump($intNumero2 === $intNumero4);
echo "<br>";

var_dump($intNumero1 != $intNumero2);
echo "<br>";

var_dump($intNumero1 <=> $intNumero2);
echo "<br>";

var_dump($intNumero2 <=> $intNumero3);
echo "<br>";

var_dump($intNumero2 <=> $intNumero1);
echo "<br>";

include 'includes/footer.php';