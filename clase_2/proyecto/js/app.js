const btnAdd = document.getElementById('btn-add');
const inputText = document.getElementById('input-txt');
const lista = document.getElementById('lista');
const lblElemento = document.getElementById('lbl-elementos');

let listaDeCompras = new Set();

const agregarProducto = (producto)=>listaDeCompras.add(producto);
const eliminarProducto = (producto)=> listaDeCompras.delete(producto)
const mostrarLista = ()=>{
    listaDeCompras.forEach((elemento)=> {
        let atributo = document.createElement("li");
        atributo.textContent="ho";
        lista.appendChild(atributo);
    })
    
};



btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputText.value.trim() == "")return;
    agregarProducto(inputText.value);
    mostrarLista();
})