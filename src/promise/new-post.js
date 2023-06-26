import fetch from "node-fetch";
const FakeApi ='https://api.escuelajs.co/api/v1';

function newPost (url, postearDatos){
const enviar = fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(postearDatos),
})
return enviar;
}
const product = {
    "title": "ingles",
    "price": 1012,
    "description": "me encantaria enseñar ingles a los niños",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

newPost(`${FakeApi}/products`, product)
.then(response => response.json())
.then(product => console.log(product))