interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string;    // Optional property
} 

let direccion: Direccion = {
    calle: "Avenida La Mar 665",
    numero: 665,
    ciudad: "Miraflores"
}

console.log(direccion);


//Read only - Quiere decir que todas estas propieadades se vuelven únicamente de lectura

interface Persona{
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean;
}

let personaRead: Persona = {
    nombre: "Alekhine",
    edad: 29,
    esDesarrollador: true,
};

console.log("Persona: ", personaRead);

//Esto te va a causar un error
//personaRead.nombre = "Pedro Navaja";


//Interfaz extendida
interface Empleado extends Persona {
    readonly puesto: string;
}

let empleadoRead: Empleado = {
    nombre: "Alekhine",
    edad: 29,
    esDesarrollador: true,
    puesto: "Desarrollador Senior",
};  

console.log("Empleado: ", empleadoRead);