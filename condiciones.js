// datos de la condición
const cupoCata = 8;
const inscritos = 8;

// condicional de cata abierta o llena
// si el número de cupos es mayor que el inscritos devuelve "Hay cupos, abrir reserva",
// si no devuelve "Cata llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
    console. log("Hay cupos, abrir reserva");
    } else {
        console. log("Cata llena, ofrecer lista de espera");
}

// operadores de comparación
8 > 5   // true
3 < 10  // true
8 >= 8  // true
4 <= 9  // true
5 === 5 // true
5 !== 3 // true

// revisa el código para predecir el resultado

const tazasReservadasHoy = 47;
const maxTazaDia = 50;

if (tazasReservadasHoy >= maxTazaDia) {
    console.log("Cerrar reservas del día");
    } else {
       console.log("Aún hay disponibilidad");
    }
 
    // un pedazo de código que corre, pero está mal

    const cantidadTazas = 0;

    if (cantidadTazas > 2) {
        console.log("Solo puedes reservar máximo 2 tazas");
    } else {
        console.log("Reserva confirma");
    }
    
    //En ookini, una persona puede reservar máximo dos tazas por día en preparaciones especiales.
    //Si ya tiene una reservada y quiere una más, deberia poder, porque uno más uno es dos y dos es el límite.
    //Mi desafío: escribe la condición puede elegir entre > y >= porque ese pequeño cambio decide si el codigo
    //deja pasar la segunda taza o la rechaza por error.
    
    const reservaPorPersona = 1;
    const maxReservaPorPersona = 2;

    if (reservaPorPersona >= maxReservaPorPersona) {
        console.log("No hay disponibilidad");
    } else {
        console.log("Si hay disponibilidad")
    }
    