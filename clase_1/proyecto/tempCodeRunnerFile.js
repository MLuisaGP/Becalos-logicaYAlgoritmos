import { Viaje } from "./viajes.js"
import { Transporte, agregarTransportes }  from "./transportes.js"
import { Destino, agregarDestinos }  from "./destinos.js"

const iniciarApp = ()=>{
    agregarTransportes(new Transporte('Jet',300));
    agregarDestinos(new Destino('Brazil',300));
    let viajes =[
        new Viaje("Paris", "2024-06-15", "Avión",1),    
        new Viaje("Londres", "2024-07-01", "Tren",4),
        new Viaje("Brazil", "2024-07-01", "Jet",3),
    ];
    viajes.forEach(element => {
        element.mostrarItinerario();
    });
}

// Ejecutar la aplicación
iniciarApp();
