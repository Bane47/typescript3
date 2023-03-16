"use strict";
function getfakeapi() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => console.log(json));
}
getfakeapi();
