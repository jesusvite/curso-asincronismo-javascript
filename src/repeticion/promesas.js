// valores secretos

const a = 40;
const b = 80;
const c = 40;
const d = 20;


function valorA (a){
    return new Promise((resolve, reject)=>{
        if(a >= 20){
            setTimeout(()=>resolve(10),3000)
        }else{
            reject(5)
        }
    })
}

function valorB (b){
    return new Promise((resolve, reject) => {
        if(b >= 20){
            setTimeout(()=>resolve(10),3000)
        }else{
            reject(5)
        }
    })
}
function valorC (c){
    return new Promise((resolve, reject) => {
        if(c => 20){
            setTimeout(()=>resolve(10),3000)
        }else{
            reject(5)
        }
    })
}
function valorD (d){
    return new Promise((resolve, reject) => {
        if(d >= 20){
            setTimeout(()=>resolve(10),3000)
        }else{
            reject(5)
        }
    })
}

const aa = valorA(a)
    .then(result => console.log(result))
    .catch((err) => {
       console.log(err) 
});

const bb = valorB(b)
    .then(result => console.log(result))
    .catch((err) => {
       console.log(err) 
})

const cc = valorC(c)
    .then(result => console.log(result))
    .catch((err) => {
       console.log(err) 
});

const dd = valorD(d)
    .then(result => console.log(result))
    .catch((err) => {
       console.log(err) 
});

async function contraseña(aa, bb,cc, dd){
const vA = await aa;
const vB = await bb;
const vC = await cc;
const vD = await dd;
const value = vA + vB + vC + vD;

if (value >= 40){
 console.log('la constraseña es correcta')
}else{
    console.log('la contraseña es incorrecta');
}
}
contraseña(aa, bb, cc, dd)