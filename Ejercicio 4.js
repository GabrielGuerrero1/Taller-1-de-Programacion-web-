// Ejercicio 4. Menú de Operaciones Matemáticas (versión dinámica)

function calculadora(numero1, numero2, operacion) {
  let resultado;

  switch (operacion.toLowerCase()) {
    case "suma":
      resultado = numero1 + numero2;
      break;
    case "resta":
      resultado = numero1 - numero2;
      break;
    case "multiplicacion":
      resultado = numero1 * numero2;
      break;
    case "division":
      if (numero2 === 0) {
        return "Error: no se puede dividir entre cero.";
      }
      resultado = numero1 / numero2;
      break;
    default:
      return "Operación no válida.";
  }

  return numero1 + " " + operacion + " " + numero2 + " = " + resultado;
}

// Entrada del usuario
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacion = prompt(
  "Elija la operación:\nsuma\nresta\nmultiplicacion\ndivision"
);

// Validación
if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Error: ambos valores deben ser números.");
  alert("Error: ambos valores deben ser números.");
} else {
  const resultado = calculadora(numero1, numero2, operacion);
  console.log(resultado);
  alert(resultado);
}