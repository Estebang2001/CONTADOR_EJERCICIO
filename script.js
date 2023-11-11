/*contarDeA_n
En este ejercicio deberás escribir una Función llamada contarDeA_n que tenga los Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los números desde el 1 hasta contar_hasta en intervalos de contar_de_a. */

function contarDeA_n (contar_de_a,contar_hasta, fnCallback) {
    let i = 1
    while (i <= contar_hasta) {
        console.log(i)
        i += contar_de_a
    }
    return fnCallback(contar_de_a,contar_hasta)
}

let operacion = (contar_de_a,contar_hasta) => (contar_de_a,contar_hasta)