"use strict";
// 1. Create your own JSON file with the following properties and access them using fetch () in TypeScript.
function getproduct() {
    return fetch('/JSON.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
getproduct()
    .then(product => {
    console.log(product.map(p => p.productID + " " + p.productName + " " + p.price + " " + p.quantity).toString());
});
