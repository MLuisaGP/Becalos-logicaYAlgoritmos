//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { id:12930, nombre: "Camiseta", precio: 15, categoria: "Ropa", img:'img/camiseta.avif', free_delivery:false, stock:10},
    { id:43241, nombre: "Laptop", precio: 800, categoria: "Electronica", img:'img/laptop.png', free_delivery:true, stock:0},
    { id:12321, nombre: "Libro", precio: 12, categoria: "Educacion", img:'img/libro.jpg', free_delivery:false, stock:10},
    { id:54261, nombre: "Zapatos", precio: 50, categoria: "Ropa", img:'img/telefono.png', free_delivery:false, stock:5},
    { id:66533, nombre: "Celular", precio: 600, categoria: "Electronica", img:'img/zapatos.webp', free_delivery:true, stock:0},
];

const productosMenoresPrecio = (precio)=>productos.filter((producto)=>producto.precio<precio);
console.log('Los productos menores a 100 pesos son:',productosMenoresPrecio(100));

const ordenarProducAsc = ()=>productos.sort((a,b)=>a.nombre.toLocaleLowerCase().localeCompare(b.nombre.toLocaleLowerCase()));
const ordenarProducDesc = ()=>productos.sort((a,b)=>b.nombre.toLocaleLowerCase().localeCompare(a.nombre.toLocaleLowerCase()));
ordenarProducAsc();
console.log('Productos ordenados de manera asc:',productos);

const nombreProductos = productos.map((producto)=>producto.nombre);//lista de productos
console.log('Productos:',nombreProductos);
 
const totalPrecio = productos.reduce((acu,producto)=>producto.precio+acu,0)
console.log('Precio total',totalPrecio);

//sI HAY UN PRODUCTO DE ELECTRONICA TIENE DESCUENTO
const hasDesc = productos.some((producto)=> producto.categoria.includes('Electronica'))
console.log('Hay descuento? ',hasDesc);

//sI HAY UN PRODUCTO DE ELECTRONICA TIENE DESCUENTO
const todosTienenEnvioGratis = productos.every((producto)=>producto.free_delivery)
console.log('Tienen todos envio gratis? ',todosTienenEnvioGratis);

const hayProductosSinStock = productos.some((producto)=>producto.stock==0);
console.log('Hay productos sin stock?', hayProductosSinStock);

const categorias = productos.reduce((acu, producto) => {
    (acu[producto.categoria] = (acu[producto.categoria] || [])).push(producto);
    return acu;
}, {});


let carrito = [];

function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return; // Si el producto no existe, salir.

    // Copia del carrito actual con el nuevo producto agregado
    carrito = [...carrito, { ...producto, cantidad: 1 }].reduce((acc, item) => {
        let existe = acc.find(p => p.id === item.id);
        
        if (existe) {
            existe.cantidad += 1;
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
}

// 🚀 **Ejemplo de uso**:
agregarAlCarrito(12930); // Camiseta
agregarAlCarrito(12930); // Camiseta otra vez
agregarAlCarrito(43241); // Laptop

console.log('carrito:',carrito);


// // // export const categoria = categorias.map((grupo) => grupo); //lista de categorias

// // // console.log(categoria);









