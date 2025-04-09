//Crear un stack;
let stack = [];
stack.push("Abeja");
stack.push("Bisonte");
stack.push("Cabra");
stack.push("Delfin");

console.log(stack);

//Quitar el ultimo elemento
let ultimo = stack.pop();
console.log('Ultimo elemento:',ultimo);
console.log(stack);
//Stack mediante clases
class Pila{
    constructor(){
        this.items = [];
    }
    push(elemento){
        this.items.push(elemento)
    }
    pop(){
        if (this.isEmpty()){
            return 'El stack esta vacio';
        }
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    print(){
        return this.items.join(" <- ");
    }
}

const breakfast = new Pila();

breakfast.push("Huevos con jamón");
breakfast.push("Hotcakes con tocino");
breakfast.push("chilaquiles con milanesa y bolillo");
console.log(breakfast.print());
eliminar.log("Entregado: ",breakfast.pop())
