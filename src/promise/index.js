const cats = 6;

function promise (pet){
    return new Promise((resolve, reject)=>{
       if(pet < 3){
        resolve('se quedan')
       } else{ reject('Se van')}     
    })
}
promise(cats)
        .then((solucion)=> console.log(solucion))
        .catch((error) => console.log(error))
        .finally(()=>setTimeout(() => console.log('Proceso terminado'), 4000))