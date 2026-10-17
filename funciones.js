function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total; 
}
console.log(calcularPrecio(5, 2));
console.log(calcularPrecio(3, 4));
console.log(calcularPrecio(7, 1));

// una función que decide

function puedeReservar(cantidad) {
  if (cantidad <= 2) {
    return true;
  } else {
    return false;
  }
}
if (puedeReservar(2)) {
  console.log("Reserva confirmada");
} else {
  console.log("Lo siento, máximo 2 tazas por persona");
}

// una función parecida, generada por IA

function puedeReservar(cantidad) {
  return cantidad <= 2;
}

