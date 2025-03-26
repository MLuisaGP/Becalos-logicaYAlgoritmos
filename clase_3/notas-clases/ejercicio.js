const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa", free_delivery: false, stock: 10, descuento:true, vendidos: 10 },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica", free_delivery: true, stock: 1, descuento:false, vendidos: 5 },
    { nombre: "Libro", precio: 12, categoria: "Educación", free_delivery: false, stock: 0, descuento:true, vendidos: 3 },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa",  free_delivery: false, stock: 5, descuento:false, vendidos: 152 },
    { nombre: "Celular", precio: 600, categoria: "Electrónica", free_delivery: true, stock: 0, descuento:false, vendidos: 240 },
];

//id, nombre, categoria, precio, envio, oferta, stock, vendidos
//Verificar si hay productos en oferta-
//Encontrar el primer producto sin stock -
//Verficar cuales productos tienen envio gratis -
//Calcular el valor total de tu inventario -
//Calcular el numero total de productos vendidos-
//Obtener todos los producto de una categoria -

const ofertas = productos.some((producto)=>producto.descuento);
console.log('Hay productos en oferta? ',ofertas);

const sinStock = productos.find((producto)=>producto.stock===0);
console.log('Primer producto sin stock ', sinStock);

const envioGratis = productos.filter((producto) => producto.free_delivery);
console.log('Con envio gratis',envioGratis);

const inventarioTotal = productos.reduce((acc,producto) => acc + producto.stock,0 );
console.log('Inventario total', inventarioTotal);

const vendidos = productos.reduce((acc,producto) => acc + producto.vendidos,0 );
console.log('Inventarios vendidos', vendidos);


const agrupados = productos.reduce((acc,producto)=>{
    (acc[producto.categoria] = acc[producto.categoria] || []).push(producto.nombre)
    return acc
},{})
console.log(agrupados);
