const numero = [1, 5, 5, 6, 3, 6];
const suma = numero.reduce((acu, num) => Math.min(acu, num), numero[0])//obtener el  valor minimo
console.log(suma);

const letras = ['b', 'c', 'x', 'x', 'f', 'f', 'x', 'y', '3', '1', '1', '3'];
const contarLetras = letras.reduce((acu, letra) => {
    acu[letra] = (acu[letra] || 0) + 1
    return acu;
}, {})
console.log(contarLetras =  acu[producto.categoria] || []); //{ '1': 2, '3': 2, b: 1, c: 1, x: 3, f: 2, y: 1 }



