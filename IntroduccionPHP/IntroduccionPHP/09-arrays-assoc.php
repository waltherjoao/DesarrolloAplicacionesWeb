<?php include 'includes/header.php';

$arrayCliente = array(
                        'nombre'        => 'Juan',
                        'saldo'         => 1000,
                        "informacion"   => [
                                            'direccion' => 'Calle falsa 123',
                                            'telefono'  => '123456789'
                                            ]
                    );

echo "<pre>";
print_r($arrayCliente);
echo "</pre>";

echo "<br>";
echo $arrayCliente['saldo'];

echo "<br>";
$arrayCliente['saldo'] = 2000;
echo $arrayCliente['saldo'];

echo "<br>";
echo "<pre>";
print_r($arrayCliente);
echo "</pre>";

echo "<br>";
echo $arrayCliente["informacion"]["direccion"];

include 'includes/footer.php';