function findLongestWordM1(text) {
    //*  Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    //* Recorrer el arreglo de palabras con un ciclo
    for (i = 0; i<words.length; i++) {
        //* Comparar la longitud de la palabra actual con la más larga
        if (longestWord.length < words[i].length) {
            longestWord = words[i];
        }
    }
    //* Retornar la palabra más larga encontrada
    return longestWord;
}

function findLongestWordM2(text) {
    //*  Dividir el texto en palabras y almacenarlas en una variable
    let longestWord = '', inicio = 0, subText = ''; // Inicializar la palabra más larga
    
    //* Recorrer el arreglo de palabras con un ciclo
    for (fin = 0; fin<text.length; fin++) {
        if(text[fin]===' '){
            inicio = fin;
            subText='';
        }else{
            subText += text[fin];
            longestWord = longestWord.length > subText.length ? longestWord : subText;
        }
    }
    //* Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "El cielo azul resplandece mientras las aves vuelan alto, el viento susurra secretos y el sol brilla con intensidad sobre la ciudad.";
//* Llama a la función y muestra el resultado
console.log(findLongestWordM1(text)); // Utilizando split
console.log(findLongestWordM2(text)); // Utilizando un substring