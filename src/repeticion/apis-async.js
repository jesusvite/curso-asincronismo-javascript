import fetch from 'node-fetch';
const api = 'https://api.escuelajs.co/api/v1';

async function getDatos (link){
 const response = await fetch(link)
    const productos = await response.json()
    return productos;
}
async function getProducts(link){
    try{
        const products = await getDatos(`${link}/products`)
       const product = await getDatos(`${link}/products/${products[0].id}`)
       console.log(product);
    }catch (error){
        console.error(error)
    }
} 
getProducts(api)