import fetch from 'node-fetch';

const link = 'https://api.escuelajs.co/api/v1';

function postDato (url, dato){
    const enviar = fetch(url, {
        method: 'POST',
        mode:'cors',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(dato)
    })
    return enviar
}

const dato = {
    "title": "Taza de One Piece",
    "price": 1000,
    "description": "la taza cambia de color con el calor",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postDato(`${link}/products`, dato)
  .then(response => response.json())
  .then(dato => console.log(dato))
  .catch(error => console.error(error))