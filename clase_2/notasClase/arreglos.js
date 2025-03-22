const frutas = ['manzana',"fresas","platanos"]
let mixto = ["ivan",true,23,{ciudad:'mexico'}]

frutas[5] = ["pera","uva","coco"];
console.log(frutas[0])
frutas.pop();
frutas.forEach(fruta=>console.log(fruta));

let numeros = [5,12,2.3,10,1]

let mayores = numeros.filter(num => num >= 2.5)
console.log(mayores);


let cuadrado = numeros.map(num => num*num);
console.log(cuadrado)

let suma = (a,b)=>a+b;

let persona = {
    nombre:"Ivan",
    saludar: function(){
        console.log(`Hola soy ${this.nombre}` );
        
    }
}

console.log(suma(5,2));//funcion
persona.saludar();//metodo

//Metodos Basicos
let fila = ["Ivan","Saul","Magalli","Alex","Maria"];
fila.unshift("Nepomutsemo");//agrega al inicio de la fila
fila.push("Oscar");//al final de la fila
fila.shift();
console.log(fila);
console.log(fila.length);

let decimales = [10, 20, 30, 40, 50]
let encontrado = decimales.find(num=>num>20);//Encontrara el primer elemento que cumpla con la condicion
let encontradoNo = decimales.find(num=>num>60);//Encontrara el primer elemento que cumpla con la condicion
console.log(encontrado);//30
console.log(encontradoNo);//Undefined
let usuarios = [
    {id:24231513,user:'luGa'},
    {id:25221200,user:'laA'},
    {id:15521522,user:'nia'}
]

let userFind = usuarios.find(usuario =>usuario.user === "nia")
console.log(userFind);

let nombres = usuarios.map(usuario => usuario.user)
console.log(nombres);

let productos=[
    {producto:'leche',precio:5},
    {producto:'mantequilla',precio:15},
    {producto:'cilantro',precio:3},
]

let productoIva 
    = productos.map(producto=>({
    ...producto,
    precioInva: producto.precio * 1.6
}))
console.log(productoIva);

let palabras =["oye","mamon","devuelveme","a","mi"];
let conletrae = palabras.filter(palabra=>palabra.includes('e'));
console.log(conletrae);


//sort
let ordenamiento = [20,28,145,95,1,24];
ordenamiento.sort((a,b)=>a-b)
console.log(ordenamiento);

let words = ["Amigos","Operacion","Ambicion","aSCII","Botella"]
words.sort();
console.log(words);//[ 'Ambicion', 'Amigos', 'Botella', 'Operacion', 'aSCII' ]

let pacientes = [
    {nombre: "Ivan", edad:18},
    {nombre:  "Saul", edad:24},
    {nombre:  "Magalli", edad:12},
    {nombre:  "Alex", edad:30},
    {nombre:  "Maria", edad:28}];

    pacientes.sort((a,b) => a.edad - b.edad)
    console.log(pacientes);
    
numeros = [5, 12, 2.3, 10, 1]
    let ordenadoSorte = numeros.toSorted((a,b)=>a-b);//Crea un nuevo array que no afecta  a la lista original
    console.log(ordenadoSorte);
    