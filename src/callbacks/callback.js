function suma(num1, num2, num3){
    let result = num1 + num2 + num3;
    return result;
}


function num(num1,num2, num3, callback){
    return callback(num1, num2, num3)
    }

console.log(num(2,3,4, suma))


setTimeout((nombre) => console.log(`Hola ${nombre}`), 2000,['jesus','margarita'])