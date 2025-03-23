


interface Humano {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}


let humano: Humano = {
    nombre: "ALejandro",
    edad: 29,
    esDesarrollador: true
  };
  
console.log("Humano:", humano);


let humanos: Humano[] = [
    {
      nombre: "Juan",
      edad: 30,
      esDesarrollador: true
    },
    {
      nombre: "María",
      edad: 25,
      esDesarrollador: false
    },
    {
      nombre: "Jesus",
      edad: 25,
      esDesarrollador: false
    }
];
  
console.log("Humanos: ", humanos);


interface Sumar {
    (a: number, b: number): number;
}

let sumar: Sumar = (a: number, b: number): number => {
    return a + b;
};

console.log("Resultado de sumar: ", sumar(4, 6)); // Resultado: 10