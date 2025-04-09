//List
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.head = null;
    }
    add(value){
        const newNodo = new Node(value);
        if(!this.head){
            this.head = newNodo;
        }else{
            let actual = this.head;
            while(actual.next){
                actual = actual.next;
            }
            actual.next = newNodo;
        }
    }
    print(){
        let actual = this.head;
        let resulado = "";
        while(actual){
            resulado += actual.value + ' -> ';
            actual = actual.next
        }
        return resulado;
    }
}

const fruits = new ListaEnlazada();
fruits.add("Manzana");
fruits.add("Platano");
fruits.add("Naranja");
console.log(fruits.print());
