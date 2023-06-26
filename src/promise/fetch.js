import fetch from 'node-fetch';
const FakeApi ='https://api.escuelajs.co/api/v1';

function generar (urlApi){
    return fetch(urlApi);
};
// generar(`${FakeApi}/products`)
//     .then(information => information.json())
//     .then(products => console.log(products))
//     .finally(()=>{console.log('informacion extraida')})

// traer informacion especifica.
generar(`${FakeApi}/products`)
    .then(response => response.json())
    .then(products => {
        // console.log(products)
        return generar(`${FakeApi}/products/${products[2].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.category.name)
    })
    .catch(error => console.log(error))



