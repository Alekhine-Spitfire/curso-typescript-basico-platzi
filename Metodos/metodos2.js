function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "Hola, ".concat(nombre);
    }
}
console.log(saludar("Ale"));
console.log(saludar("Ale", "Buenos días"));
// ####################### Parámetros Múltiples #######################
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulador, valor) { return acumulador + valor; }, 0);
}
console.log("El resultado de sumar todos es ".concat(sumarTodos(1, 2, 3, 4, 5, 6)));
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adiós"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Alekhine"));
console.log(despedir("Alekhine", "Hasta luego"));
