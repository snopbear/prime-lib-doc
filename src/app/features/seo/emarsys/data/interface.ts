import { createTableProperty } from "@factories/index";

export const emarsysInterface ={
    cartItem:[
    createTableProperty('item', 'string', 'N/A'),
    createTableProperty('quantity', 'number', "N/A"),
    createTableProperty('price', 'number', "N/A"),
    ],
    descriptor:[
        createTableProperty('orderId','string',"N/A"),
        createTableProperty('items','Array<CartItem>',"N/A"),
    ]
}