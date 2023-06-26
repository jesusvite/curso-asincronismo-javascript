const numeros = [1,2,3,4,5,6,7,8,9,10]

function* saludar ([...numeros]){
    for(let num in numeros){
        yield num
    }
}

const saluda = saludar(numeros);

console.log(saluda.next().value)
console.log(saluda.next().value)
console.log(saluda.next().value)
console.log(saluda.next().value)
console.log(saluda.next().value)
console.log(saluda.next().value)
console.log(saluda.next().value)
console.log(saluda.next().value)