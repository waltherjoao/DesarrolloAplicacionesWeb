const suma = function(){
    console.log(2+2);
}

//ArrayFunction
const suma1 = () => {
    console.log(3+3);
}

const suma2 = (parame1, parame2) => {
    console.log(parame1+parame2);
}

const suma3 = (parame1, parame2) => console.log(parame1+parame2);

suma();
suma1();
suma2(8, 7);
suma3(9, 15);