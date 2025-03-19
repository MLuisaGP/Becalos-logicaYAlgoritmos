class Persona{
    constructor(nombre, puesto, empresa, email,tel){
        this.nombre = nombre;
        this.puesto = puesto;
        this.empresa = empresa;
        this.email = email;
        this.tel = tel;
    }
}
const contacto = [
    new Persona('Luisa','Desarrolladora Fullstack','Gaservicio','lgalaz@gaservicio.com','6621202025'),
    new Persona('Erick','Proyect Manager','Gaservicio','eretes@gaservicio.com','6624358542'),
    new Persona('Walther','Ingiero Sistemas','Gaservicio','wbuzami@gaservicio.com','6554221885'),
]

const tarjetaPresentacion = (persona)=>{
    let txt= `**************\n`
    for (const key in persona) {
        txt += `${key}: ${persona[key]}\n`;
        if (Object.prototype.hasOwnProperty.call(persona, key)) {
            
        }
    }
    txt+= `**************`
    return txt
}
contacto.forEach(persona => {
    console.log(tarjetaPresentacion(persona));
    
});