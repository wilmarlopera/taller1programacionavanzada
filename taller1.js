let padawan = { nombre: 'mika', edad: 14, estatura: 1.50, planeta: "plutonio" }
let mensaje
function asignarpadawan(padawan, actividad) {
    if (padawan.edad < 15) {
        mensaje = 'actividad de la fuerza'
        actividad(mensaje)
    }

    else if (padawan.edad > 15) {
        mensaje = 'actividad sable de luz'
        actividad(mensaje)
    }
}

asignarpadawan(padawan, function (mensaje) { console.log("el padawan tiene la " + mensaje) })

let asignar = (padawan, actividad) => {
    if (padawan.edad < 15) {
        mensaje = 'actividad de la fuerza'
        actividad(mensaje)
    }

    else if (padawan.edad > 15) {
        mensaje = 'actividad sable de luz'
        actividad(mensaje)
    }
}

asignar(padawan, actividad = (mensaje) => { console.log("el padawan tiene la " + mensaje) })