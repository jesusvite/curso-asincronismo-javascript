import fetch from "node-fetch";
const link ='https://api.escuelajs.co/api/v1';

function postCode(url, postNow){
    const code = fetch(url,{
        method:'POST',
        mode:'cors',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(postNow)
    })
    return code;
}

const postNow = {
    "title": "Motosierra",
    "price": 8000,
    "description": "Te servira para corta madera",
    "categoryId": 1,
    "images": ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mpower.com.mx%2F98_motosierra-62-cc-24-oregon%2Fp&psig=AOvVaw1oEVfT3UTO5BaTfl9v1bHm&ust=1687567711778000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjNmeGV2P8CFQAAAAAdAAAAABAO"]
  }

postCode(`${link}/products`, postNow)
  .then(response => response.json())
  .then(productAdd => console.log(productAdd))