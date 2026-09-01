// Ejercicio 5. Generador de Usuario
// Programación Web - Ciclo 02, 2026

function generarUsuario(nombreCompleto) {
  const usuario = nombreCompleto
    .toLowerCase()
    .split(" ")
    .join("") + "_dev";

  console.log(nombreCompleto + " -> " + usuario);
  return usuario;
}

// Pruebas
generarUsuario("Gabriel Antonio Perez");
generarUsuario("Maria Jose Lopez");
generarUsuario("Juan Carlos");