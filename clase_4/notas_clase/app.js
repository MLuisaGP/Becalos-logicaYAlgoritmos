const dospunterosSuma=(arr,objetivo)=>{
    let inicio =0;
    let fin = arr.length -1;
    while(inicio<fin){
        const suma = arr[inicio] + arr[fin];
        if(suma === objetivo){
            return [arr[inicio],arr[fin]];
        }else if(suma < objetivo){
            inicio ++;
        }else{
            fin --;
        }
    }
    return null;
}


console.log(dospunterosSuma([1,2,3,4,5,6],6));

//Encontrar un Palíndromo

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

