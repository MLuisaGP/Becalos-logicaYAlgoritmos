function findMax(arr) {
    // Agregar la condición del caso base
    if (arr.length<=1) {
        return arr
    }

    // Dividir el arreglo en dos mitades
    const mid =Math.floor((arr.length)/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid,arr.length);
    // Llamar recursivamente a la función para ambas mitades
    const leftMax =findMax(left);
    const rightMax = findMax(right);
    
    // Combinar las soluciones comparando los máximos
    return Math.max(leftMax,rightMax);
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log('Maximo ejemplo 1:',findMax(numbers)); // Salida esperada: 10
// Ejemplo de entrada
const arreglo1 = [23, 87, 12, 45, 66];
const arreglo2 = [-35, 8, 0, 27, -12, 14, 49];
const arreglo3 = [3, 7, 0, 10];
const arreglo4 = [123, 876, 345, 290, 765, 432];
console.log('Maximo arreglo 1:',findMax(arreglo1)); // Salida esperada: 10
console.log('Maximo arreglo 2:',findMax(arreglo2)); // Salida esperada: 10
console.log('Maximo arreglo 3:',findMax(arreglo3)); // Salida esperada: 10
console.log('Maximo arreglo 4:',findMax(arreglo4)); // Salida esperada: 10