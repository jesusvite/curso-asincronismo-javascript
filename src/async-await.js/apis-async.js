import fetch from "node-fetch";
const link = 'https://api.escuelajs.co/api/v1';

const obtenerDatosApi = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


const obtenerProductos = async(url)=>{
try{
const products = await obtenerDatosApi(`${url}/products`);
const product = await obtenerDatosApi(`${url}/products/${products[0].id}`);

const category = await obtenerDatosApi(`${url}/categories/${product.category.id}`)


// console.log(products)
// console.log(product.description)
// console.log(product.category)
// console.log(category)
}catch (error){
    console.error(error);
}
}

obtenerProductos(link)