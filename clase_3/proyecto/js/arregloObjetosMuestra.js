//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

export const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa", img:'img/camiseta.avif', free_delivery:false, stock:10},
    { nombre: "Laptop", precio: 800, categoria: "Electrónica", img:'img/laptop.png', free_delivery:true, stock:1},
    { nombre: "Libro", precio: 12, categoria: "Educación", img:'img/libro.jpg', free_delivery:false, stock:10},
    { nombre: "Zapatos", precio: 50, categoria: "Ropa", img:'img/telefono.png', free_delivery:false, stock:5},
    { nombre: "Celular", precio: 600, categoria: "Electrónica", img:'img/zapatos.webp', free_delivery:true, stock:3},
];

const nombreProductos = productos.map((producto)=>producto.nombre);
console.log(nombreProductos);
const agrupacion = productos.reduce((acu, producto) => {
    (acu[producto.categoria] = acu[producto.categoria] || []).push(producto.nombre);
    return acu;
}, {});

const categoria = agrupacion.map((grupo) => grupo);

// Usar include para decir que si agregase un electronico entonces hay descuento del 20% en el total del pedido
// hacer un map para filtrar por  nombre de producto o categoria
//Usar some para decir que si hay un producto con free delivery decir que algunos de sus productos cuenta con fre delivery
//Every decir que si todos tienen free delivery tiene free delivery en sus productos
//Validar que todos los productos que comprara cuenta con stock, si no entonces el boton no permitira comprar hazta sacar los productos sin stock
//Ordenar por nombre o por costo
//obtener el total.







