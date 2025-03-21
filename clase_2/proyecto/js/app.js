let listaDeCompras = new Set();

const agregarProducto = (producto)=>listaDeCompras.add(producto);
const eliminarProducto = (producto)=> listaDeCompras.delete(producto)
const mostrarLista = ()=>{
    let txt = "LISTA DE COMPRA\n";
    txt += "-------------------\n";
     txt += `No.Elementos: ${listaDeCompras.size} \n`;
    listaDeCompras.forEach((elemento)=> txt+= `${elemento}\n`)
    txt += "-------------------\n";
    console.log(txt);
    
};

const btnAdd = document.getElementById('btn-add');
const inputText = document.getElementById('input-txt');
const lblElemento = document.getElementById('lbl-elementos');

btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputText.value.trim() == "")return;
    agregarProducto(inputText.value);
    alert(listaDeCompras);
})