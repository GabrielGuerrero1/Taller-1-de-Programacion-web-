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

// EJERCICIO 2 - CLASIFICACION DE NOTAS

let nota = 85;

if (nota >= 90 && nota <= 100) {
    console.log("Excelente");

} else if (nota >= 80 && nota <= 89) {
    console.log("Muy Bueno");

} else if (nota >= 70 && nota <= 79) {
    console.log("Bueno");

} else if (nota >= 60 && nota <= 69) {
    console.log("Regular");

} else if (nota >= 0 && nota < 60) {
    console.log("Reprobado");

} else {
    console.log("Nota invalida");
}