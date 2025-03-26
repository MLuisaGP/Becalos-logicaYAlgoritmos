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