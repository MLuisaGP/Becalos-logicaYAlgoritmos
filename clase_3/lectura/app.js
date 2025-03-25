const numeros = [10,20,30,40];

//find() Si no se cumple la condicion regresaria undefined
const resultado = numeros.find(num => num>25); //30 regresa el primero que cumpla la condicion
console.log(resultado);

//map()
const cuadrados = numeros.map(num=> num ** 2);//crea un nuevo arreglo aplicando una funcion a cada elemento del original
console.log(cuadrados);//[ 100, 400, 900, 1600 ]

//filter()
const mayores = numeros.filter(num=>num>25);// regresa un array con todos los elementos que cumplan con la condicion. Si nunguno cumple entonces regresa un array vacio
console.log(mayores);

//foreach() 
const frutas = ["manzana","platano","naranja"]; 
frutas.forEach(fruta=>console.log(fruta));//Se le aplica la acción a cada elemento pero en si foreach regresa void

//every() valida que todos cumplan con la condicion
const allHasA = frutas.every(fruta => fruta.includes('j'));
console.log(allHasA);//False; regresara false si no todas las frutas tienen la j y en el caso de que todas las frutas tengan la letra j entonces regresaria true

//some() valida que almenos una cumpla con la condicion
const someHasA = frutas.some(fruta => fruta.includes('j'));
console.log(someHasA);//true; Si al menos una fruta contiene la letra j entonces regresara true en caso de que ninguna contenga la letra j entonces es false;


//reduce()  es utilizado para acumular un valor único a partir de los elementos de un array
const valorIniciando0 = numeros.reduce((acumulador,currentValue)=>acumulador+currentValue);
const valorIniciando10 = numeros.reduce((acumulador,currentValue)=>acumulador+currentValue,10);
const numerosTest=[]
const valorSinAcumular = numerosTest.reduce((acumulador,currentValue)=>acumulador+currentValue,0);
console.log(valorIniciando0);//100
console.log(valorIniciando10);//101
console.log(valorSinAcumular);//101

//sort()
const numerosx = [30, 5, 20, 10];
numerosx.sort((a, b) => a - b); // Orden ascendente este metodo solo funciona con numeros
console.log(numerosx); // [5, 10, 20, 30]

frutas.sort();//ordenar de forma ascendente  ó  frutas.sort((a,z)=>a.toLocaleLowerCase().localeCompare(z.toLocaleLowerCase()))
console.log(frutas);//[ 'manzana', 'naranja', 'platano']
frutas.sort((a,z)=>z.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase()))//forma decendente
console.log(frutas);//[ 'platano', 'naranja', 'manzana' ]
