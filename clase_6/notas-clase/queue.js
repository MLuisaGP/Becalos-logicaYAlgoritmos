//Queue
class Queue{
    constructor(){
        this.items = []
    }
    //Agregar los elementos
    enqueue(elemento){
        this.items.push(elemento);
    }
    dequeue(){
        if(this.isEmpty()){
            return "La queue esa vacia"
        }
        return this.items.shift();
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    print(){
        return this.items.join(" <- ");
    }
}

const myPrinter = new Queue();
myPrinter.enqueue("Pagina 1");
myPrinter.enqueue("Pagina 2");
myPrinter.enqueue("Pagina 3");
console.log("Cola de la impresion:", myPrinter.print());

console.log("Imprimiendo...", myPrinter.dequeue());
console.log("Cola de la impresion: ", myPrinter.print());

