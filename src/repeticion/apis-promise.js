import fetch from 'node-fetch';
const api = 'https://api.escuelajs.co/api/v1';

function datos (url){
return fetch(url)
}

datos(`${api}/products`)
.then(response => response.json())
.then(productos => {
    return datos(`${api}/products/${productos[0].id}`)
})
.then(response => response.json())
.then(product =>{
    console.log(product.description)
})