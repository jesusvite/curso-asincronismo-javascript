const a = 2;
const b = 3;

function multiplicar(num1, num2){

    const mult = num1 * num2;
if(mult > 10){

    console.log('El valor rebasa el numero acordado')
}else{
    console.log('El valor el correcto')
}
console.log(mult);
}

function obtenerValores(num1, num2){
return multiplicar(num1, num2)
}

obtenerValores(a, b)