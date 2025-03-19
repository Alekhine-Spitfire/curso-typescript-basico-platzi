var nombres = ["Kathy", "Jesus", "Laura"];
console.log("Nombres: ", nombres);
var edades = [39, 25, 30];
console.log("Edades: ", edades);
var mixto = ["Hola", 42, true];
console.log("Mixto: ", mixto);
var personas = [
    { nombre: "Luis", edad: 31, desarrollador: true },
    { nombre: "Roy", edad: 30, desarrollador: false },
    { nombre: "Leonardo", edad: 27, desarrollador: true },
];
console.log(personas);
// Podemos añadir elementos que cumplan con la interfaz
personas.push({ nombre: "Miranda", edad: 28, desarrollador: true });
console.log(personas);
// ####################### tuplas #######################
var persona;
persona = ["Amin", 39, true];
console.log("Persona:", persona);
var personasTupla = [];
personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);
personasTupla.forEach(function (persona) {
    console.log("Persona:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});
// ####################### enumeradores #######################
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Sábado;
console.log("Dia: ", DiaDeLaSemana[dia]);
