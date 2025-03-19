// ####################### string #######################


let nombres: string[] = ["Kathy", "Jesus", "Laura"];
console.log("Nombres: ", nombres);


// ####################### number #######################

let edades: number[] = [39, 25, 30];
console.log("Edades: ", edades);


// ####################### any #######################

let mixto: any[] = ["Hola", 42, true];
console.log("Mixto: ", mixto);


// ####################### interfaces #######################

interface Persona {
    nombre: string;
    edad: number;
    desarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: "Luis", edad: 31, desarrollador: true },
    { nombre: "Roy", edad: 30, desarrollador: false },
    { nombre: "Leonardo", edad: 27, desarrollador: true },
];

console.log(personas);

// Podemos añadir elementos que cumplan con la interfaz
personas.push({ nombre: "Miranda", edad: 28, desarrollador: true });

console.log(personas);


// ####################### tuplas #######################

let persona: [string, number, boolean];
persona = ["Amin", 39, true];

console.log("Persona:", persona);


let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);

personasTupla.forEach(persona => {
    console.log("Persona:", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];

    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});


// ####################### enumeradores #######################

enum DiaDeLaSemana {
    Lunes, 
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}
let dia: DiaDeLaSemana = DiaDeLaSemana.Sábado;
console.log("Dia: ", DiaDeLaSemana[dia]);
