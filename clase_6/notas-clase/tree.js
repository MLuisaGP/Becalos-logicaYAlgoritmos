//Arbol binario
class Nodo{
    constructor(value){
        this.value = value;
        this.izquierda = null;
        this.derecha = null;
    }
}
class BinaryTree{
    constructor(){
        this.raiz = null;
    }
    adding(value){
        const newNodo = new Nodo(value);
        if(!this.raiz){ //Si no hay raiz el nuevo nodo es la nueva raiz
            this.raiz = newNodo;
            return;
        }
        let actual = this.raiz;
        while(true){
            if(value < actual.value){
                if(!actual.izquierda){
                    actual.izquierda = newNodo;
                    break;
                }
                actual = actual.izquierda
            }else{
                if (!actual.derecha) {
                    actual.derecha = newNodo;
                    break;
                }
                actual = actual.derecha;
            }
        }
    }
    inOrder(nodo = this.raiz){
        if(!nodo)return;
        this.inOrder(nodo.izquierda);
        console.log(nodo.value)
        this.inOrder(nodo.derecha);
    }
    print(nodo = this.raiz, space=0, level=5){
        if(!nodo)return;
        space += level;
        this.print(nodo.derecha,space);
        console.log(" ".repeat(space - level)+nodo.value);
        this.print(nodo.izquierda,space)
        
    }
}

const tree = new BinaryTree();
tree.adding(50);
tree.adding(40);
tree.adding(30);
tree.adding(60);
console.log("Recorrido en orden: ");
tree.inOrder();
tree.print();

