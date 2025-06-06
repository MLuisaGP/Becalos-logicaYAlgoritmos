function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Caso base
    // Dividir
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    console.log('left',left);
    console.log('right',right);
    
    // Combinar
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
        console.log(result);
        
    }

    // Añadimos elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Ejemplo de uso

const array = [5, 2, 9, 1, 5, 6];

console.log(mergeSort(array)); // Salida: [1, 2, 5, 5, 6, 9]