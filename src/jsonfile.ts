// 1. Create your own JSON file with the following properties and access them using fetch () in TypeScript.

// ProductId
// ProductName
// Price
// Quantity
interface product{
    productID: string,
    productName: string,
    price: number ,
    quantity: number
}

function getproduct(): Promise<product[]>{
   return fetch('/JSON.json')
    .then(res=>res.json())
    .then(res => {
        return res as product[]
    })
}
getproduct()
    .then(product =>{
        console.log(product.map(p=> p.productID+" "+p.productName+" "+p.price+" "+p.quantity).toString())
    })