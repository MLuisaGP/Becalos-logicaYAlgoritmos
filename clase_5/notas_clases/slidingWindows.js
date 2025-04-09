function maximoSubarray(arr, U){
    let inicio = 0, suma = 0, maxLength = 0, subarray = [];
    for (let fin = 0; fin < arr.length; fin++) {
        suma += arr[fin]
        while(suma > U){
            suma-=arr[inicio];
            inicio++;
        }
        if (maxLength < (fin - inicio + 1)){
            subarray = arr.slice(inicio, fin +1) //Hace una copia del punto inicio al funto final de un array
        }
        maxLength = Math.max(maxLength,fin-inicio+1);
    }
    return {maxLength,subarray};
}
console.log(maximoSubarray([2,4,5,1,2,4,5],7));
