
const palidromo = (palabra)=>{
    let inicio = 0;
    let fin = palabra.length-1;
    for (inicio; inicio < fin; inicio++) {
        if(palabra[inicio]!==palabra[fin]){
            return 'No es polidromo';
        }else{
            fin--;
        }
    }
    return 'Es polidromo';
}

console.log(palidromo('anas'));
