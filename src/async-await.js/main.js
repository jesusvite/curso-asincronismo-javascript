const valores = 2;

function conocerValor (){
    return new Promise((resolve, reject) => {
        (valores === 2)
        ? setTimeout(() => resolve(console.log('resuelto')), 4000)
        : reject(new Error('uups algo anda mal'))
    })
}

async function solution (){
    const response = await conocerValor();
    return response;
}
solution()
