import obtain from 'node-fetch';

const link = 'https://api.escuelajs.co/api/v1';

async function getDatos (url){
 const response = await obtain(url);
 const datos = response.json()
 return datos;
}

const getProducts = async(url)=>{
try{
    const products = await getDatos(`${url}/products`)
    const product = await getDatos(`${url}/products/${products[10].id}`)
    console.log(product)
}catch(error){
console.error(error);
}
} 
getProducts(link)