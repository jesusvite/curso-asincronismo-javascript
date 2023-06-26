import fetch from 'node-fetch';
const linkFake = 'https://api.escuelajs.co/api/v1';

function obtainProducts (url){
    return fetch(url)
}

obtainProducts(`${linkFake}/products`)
    .then(response => response.json())
    .then(allProducts => {
        // console.log(allProducts)
        return obtainProducts(`${linkFake}/products/${allProducts[2].id}`)
    })
    .then(response => response.json())
    .then(product => console.log(product))