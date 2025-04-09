//Recursividad-- tiene estructura bastante gerarquica
function factorial(n){
    if(n<0)return null
    if(n===0||n===1){
        return 1;
    }else{
        console.log(n);
        
        return n * factorial(n-1)
    }

}
console.log(factorial(0));

//Fibonacci
//sucesión infinita de números naturales que comienza con 1 y 1, y donde cada término siguiente es la suma de los dos anteriores

// 1,1,2,3,5,8,13,21,34,55,89
function fibonacci(x){
    //F(N-1)+F(N-2)
    if(x<0)return null
    if(x === 0 || x=== 1){
        return x;
    }else{
        
        return fibonacci(x-1) + fibonacci(x-2)
    }
}
console.log(fibonacci(-3));