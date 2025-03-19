//ES6 arrow function
var sum = (a,b)=>{
    return a+b;
}
sum(4,12);//returns 16;

//Lo que esta abajo si descomentamos la linea 8 marcaria error porque se encuentra en temporal muerta, y se accedera a la variable hasta que se declare la variable, esto no aplica con var.
// console.log(nombre);
// let nombre ="Joel";
// console.log(nombre);


//Template literal
// const saludo = `Hola, ${nombre}`
// console.log(saludo);

//Symbol, nuevo tipo de dato primitivo para crear identificadores unicos
console.log(Symbol(2)=== Symbol(2))//false
console.log(Symbol.for(2)=== Symbol.for(2))//true
console.log(Symbol('20'))

//Desestructuracion
const numeros = [2,4,6,8,9];
const [a,b,c,d,e] = numeros;
console.log(e);//9

const colores =['rojo','verde','azul'];
const [,segundoColor]=colores;
console.log(segundoColor);//'verde'
const [,,tercerColor]=colores;
console.log(tercerColor);//'azul'


const persona = {
    nombre:'Ian',
    edad:24,
    ciudad:'CDMX'
}
const {nombre,ciudad}=persona
console.log(ciudad);//CDMX
const {nombre:name,ciudad:city}=persona
console.log(city);//CDMX


