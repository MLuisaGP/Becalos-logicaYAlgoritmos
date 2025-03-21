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

agregarProducto('mayonesa');
agregarProducto('uva');
agregarProducto('uva');
agregarProducto('fresas');
agregarProducto('shampoo');
agregarProducto('shampoo');
mostrarLista();
eliminarProducto('uva');
mostrarLista();