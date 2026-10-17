function calcularPrecio(precioUnitario, cantidad) {
  const total = precioUnitario * cantidad;
  return total;
}

// function puedeReservar(cantidad) {
//  if (cantidad <= 2) 
// } 

function puedeReservar(tazasDisponinles) {
  return tazasDisponinles > 0;
}

// const botonReservar = document.querySelector("boton-reservar");

// botonReservar.addEventListener("click", function () {
//  console.log("El usuario hizo clic");
// });

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

/* botonReservar.addEventListener("click", function () {
  const tazasActuales = Number(contadorTazas.textContent);

  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    console.log("Reservas registrada");
    alert("Reservas registrada");
  } else {
    botonReservar.textContent = "Sin Cupos";
    botonReservar.disabled = true;
    console.log("No hay cupo disponibles");
    alert("No hay cupos disponibles")
  }
})*/

// Función auxiliar para mostrar el mensaje temporal
function mostrarAlerta(mensaje) {
  const notificacion = document.getElementById("notificacion");
  notificacion.textContent = mensaje;
  notificacion.classList.remove("oculto");

  // Ocultar automáticamente después de 3 segundos (3000 milisegundos)
  setTimeout(() => {
    notificacion.classList.add("oculto");
  }, 3000);
}

botonReservar.addEventListener("click", function() {
  const tazasActuales = Number(contadorTazas.textContent);

  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    console.log("Reservas registrada");
    mostrarAlerta("Reserva registrada"); // Usamos nuestra nueva alerta
  } else {
    botonReservar.textContent = "Sin Cupos";
    botonReservar.disabled = true;
    console.log("No hay cupo disponibles");
    mostrarAlerta("No hay cupos disponibles"); // Usamos nuestra nueva alerta
  }
});