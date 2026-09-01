// Ejercicio 6. Clase Producto


class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarInfo() {
    console.log("Producto: " + this.nombre);
    console.log("Precio: $" + this.precio);
    console.log("Stock: " + this.stock + " unidades");
  }
}

// Al menos 2 objetos usando la clase
const producto1 = new Producto("Mouse", 25, 10);
const producto2 = new Producto("Teclado", 40, 5);

producto1.mostrarInfo();
console.log("---");
producto2.mostrarInfo();