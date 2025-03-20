function imprimeMensaje(mensaje: string): void{
    console.log(mensaje);
}

imprimeMensaje("Holi boli soy un mensajitou");

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2
}

let resultado : number = sumar(5, 8);

console.log(`Tu resultado es: ${resultado}`)
console.log(`Tu resultado es: ${sumar(5, 8)}`)