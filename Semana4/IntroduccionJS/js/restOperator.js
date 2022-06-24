const producto = {
    nombre: 'Laptop',
    precio: 1000,
    disponible: true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

// Rest Operator
const nuevoProducto = { ...producto, ...medidas };
console.log(nuevoProducto);

console.log('El peso es:  '+medidas.peso);
console.log(`El peso es: ${medidas.peso}`);