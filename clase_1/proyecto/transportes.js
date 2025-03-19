export class Transporte {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }

    mostrar() {
        console.log(`${this.nombre}: \$${this.costo}`)
    }
}

export const transportes = [
    new Transporte("Avión", 200),
    new Transporte("Barco", 150),
    new Transporte("Camión", 50),
    new Transporte("Tren", 100),
]
export const agregarTransportes=(transporte)=>transportes.push(transporte);