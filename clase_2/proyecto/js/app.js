const btnAdd = document.getElementById('btn-add');
const inputText = document.getElementById('input-txt');
const lista = document.getElementById('lista');
const lblElemento = document.getElementById('lbl-elementos');

let listaDeCompras = new Set();

const agregarProducto = (producto)=>listaDeCompras.add(producto);
const eliminarProducto = (producto)=> listaDeCompras.delete(producto)
const mostrarLista = ()=>{
    lblElemento.textContent = listaDeCompras.size;
    lista.innerHTML='';
    listaDeCompras.forEach((elemento)=> {
        mostrarElemento(elemento)
    })
};

const mostrarElemento = (elemento) =>{
    let elementoLi = document.createElement("LI");
    let btn = document.createElement("BUTTON");
    elementoLi.className = "li-productos";
    btn.className = "btn-list";
    // <li class="li-productos"><button class="btn-list"></button> Pan</li>
    elementoLi.textContent = elemento;
    elementoLi.insertBefore(btn,elementoLi.firstChild);
    lista.appendChild(elementoLi);

    elementoLi.addEventListener('click',(e)=>{
        eliminarProducto(elementoLi.textContent)
        mostrarLista();
    })
}



btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputText.value.trim() == "")return;
    agregarProducto(inputText.value);
    mostrarLista(inputText.value);
    inputText.value='';
})