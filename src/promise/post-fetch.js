import fetch from "node-fetch";

const API = ' https://api.escuelajs.co/api/v1';

function postData (urlAPI, postear){
    const response = fetch(urlAPI,{
        method: 'POST',
        mode:'cors',
        credential:'same-origin',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(postear)
    });
    return response;
}

const postear = {
    "title": "Terreneitor 3000",
    "price": 3000,
    "description": "carro de control remoto",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, postear)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))