// xmlhtmlrecuest
const xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;
const FakeApi = 'https://api.escuelajs.co/api/v1';

function consumirFetch (linkAPI, callback){
    let xmlhhttp = new xmlhttprequest();

    xmlhhttp.open('GET', linkAPI, true)

    xmlhhttp.onreadystatechange = function (event){
        if(xmlhhttp.readyState === 4){
            if(xmlhhttp.status === 200){
                callback(null, JSON.parse(xmlhhttp.responseText))
            } else {
                const error = new Error('Error' + linkAPI)
                return callback(error, null) 
            }
        } 
    }
    xmlhhttp.send();
}

consumirFetch(`${FakeApi}/products`, function(error1, data1){
 if (error1) return console.error(error1);
    consumirFetch(`${FakeApi}/products/${data1[0].id}`, function(error2,data2){
        if(error2) return console.error(error2);
        consumirFetch(`${FakeApi}/categories/${data2?.category?.id}`, function(error3,data3){
            if(error3) return console.error(error3);
            
            console.log(data1[0]);
           console.log(data2.title);
           console.log(data3.name);
        });
    });
});