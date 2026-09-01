// EJERCICIO 1 - CALCULADORA DE DESCUENTO

let nombreProducto = "Camisa";
let precioProducto = 30;
let porcentajeDescuento = 20;

let descuento = precioProducto * (porcentajeDescuento / 100);
let precioFinal = precioProducto - descuento;

console.log("Producto: " + nombreProducto);
console.log("Precio original: $" + precioProducto);
console.log("Descuento: " + porcentajeDescuento + "%");
console.log("Precio final: $" + precioFinal);