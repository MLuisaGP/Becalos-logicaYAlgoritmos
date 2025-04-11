function binarySearch(array,target){
    let left = 0;
    let right = array.length -1
    while(left <= right){
        const middle = Math.floor((left + right)/2);
        const mid = array[middle];
        if(mid === target){
            return middle;
        }else if(mid<target){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return -1;
}

const numeros = [20,40,60,77,100,90]
const target=90
const result = binarySearch(numeros,target)
console.log('Se encuentra en la posicion:',result);
