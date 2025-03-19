// ####################### any #######################
var variableAny;
// variableAny = "hello";     // Cadena de texto
variableAny = 42; // Número
//variableAny = true;        // Booleano
console.log("Valor de variable any " + variableAny);
// ####################### unknown #######################
var variableDesconocida;
// variableDesconocida = "hello";
variableDesconocida = 42;
// variableDesconocida = true;
if (typeof variableDesconocida === "string") {
    console.log("Variable unknown es una cadena:", variableDesconocida);
}
// ####################### never #######################
/* function arrojarError(mensaje: string): never {
    throw new Error(mensaje);
}

arrojarError("Esto es un error"); */
// ####################### void #######################
function logMessage(message) {
    console.log(message);
    // No hay return
}
logMessage("Este es un mensaje de log");
