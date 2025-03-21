function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
      return `${saludo}, ${nombre}!`;
    } else {
      return `Hola, ${nombre}`;
    }
  }
  
  console.log(saludar("Ale"));
  console.log(saludar("Ale", "Buenos días"));


// ####################### Parámetros Múltiples #######################

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
  }
  
  console.log(`El resultado de sumar todos es ${sumarTodos(1, 2, 3, 4, 5, 6)}`);


// ####################### Valores por defecto #######################


function despedir(nombre: string, despedida: string = "Adiós"): string {
    return `${despedida}, ${nombre}!`;
}
  
console.log(despedir("Alekhine"));
 console.log(despedir("Alekhine", "Hasta luego"));
