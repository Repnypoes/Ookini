    // "hazme una funcion para mi sitio web de cafe, que reciba la cantidad de tazas que un cliente 
    // quiere reservar y me diga si puede reservar o no. La regla es que no se puede reservar mas de 
    // 2 tazas por personas"

    /**
 * Valida si un cliente puede reservar una cantidad determinada de tazas.
 * @param {number} tazasSolicitadas - Cantidad de tazas que el cliente quiere reservar.
 * @param {number} personas - Cantidad de personas que realizan la reserva.
 * @returns {object} Objeto con el resultado de la validación y un mensaje.
 */
function verificarReservaCafe(tazasSolicitadas, personas) {
    // Calculamos el límite máximo permitido (2 tazas por persona)
    const maximoPermitido = personas * 2;

    if (tazasSolicitadas <= maximoPermitgedo) {
        return {
            permitido: true,
            mensaje: `¡Reserva exitosa! Puedes reservar ${tazasSolicitadas} tazas para ${personas} persona(s).`
        };
    } else {
        return {
            permitido: false,
            mensaje: `Lo sentimos, el límite es de máximo 2 tazas por persona. Para ${personas} persona(s), puedes reservar hasta ${maximoPermitido} tazas.`
        };
    }
}

// Ejemplo de uso:
// console.log(verificarReservaCafe(3, 1)); // Retorna que no se puede (pide 3 para 1 persona, máx 2)
// console.log(verificarReservaCafe(4, 2)); // Retorna que sí se puede (pide 4 para 2 personas, máx 4)