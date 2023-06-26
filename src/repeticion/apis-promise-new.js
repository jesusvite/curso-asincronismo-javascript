import fetch from 'node-fetch';
const link = 'https://api.escuelajs.co/api/v1'

function getDatos(url){
return fetch(url)
}
getDatos(`${link}/products`)
    .then(response => response.json())
    .then(products => {
        return getDatos(`${link}/products/${products[10].id}`)
    })
    .then(response => response.json())
    .then(product => {
    console.log(product.category.id)
    })