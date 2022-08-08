<?php include 'includes/header.php';


$autenticado = false;
$admin = true;

if($autenticado && $admin){
    echo "Bienvenido";
}else{
    echo "No estas autenticado";
}
echo "<br>";
// If anidados
$cliente = array(
    'nombre' => 'Juan',
    'saldo'  => 1000,
    'admin'  => true
);
if(empty($cliente)){
    echo "No se puede recuperar la información";
} else if($cliente['saldo'] > 100) {
    echo "Bienvenido";
} else {
    echo "No tienes saldo suficiente, no eres bienvenido";
}

echo "<br>";
$numero = -46;

if($numero > 0 && $numero < 10){
    echo "El número es positivo";
} else if($numero < 0){
    echo "El número es negativo";
} else if($numero > 10){
    echo "No lo tenia contemplado";
}
else {
    echo "El número es cero";
}

// Switch

echo "<br>";

$dia = 'jueves';

switch($dia){
    case 'lunes':
        echo "Hoy es lunes";
        break;
    case 'martes':
        echo "Hoy es martes";
        break;
    case 'miercoles':
        echo "Hoy es miercoles";
        break;
    case 'jueves':
        echo "Hoy es jueves";
        break;
    case 'viernes':
        echo "Hoy es viernes";
        break;
    case 'sabado':
        echo "Hoy es sabado";
        break;
    case 'domingo':
        echo "Hoy es domingo";
        break;
    default:
        echo "No es un dia de la semana";
        break;
}
echo "<br>";
echo "------------------------------";
echo "<br>";
echo "<h1>Se ha terminado la clase</h1>";

include 'includes/footer.php';
