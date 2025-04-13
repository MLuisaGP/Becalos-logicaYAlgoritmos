const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

function agregarNota(titulo, contenido) {
  let notas = [];
  let nota = null;

  const nuevaNota = { titulo, contenido };

  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error('Hubo un error:\n', err);
        return;
      }
      notas = JSON.parse(data);
      nota = notas.find((nota) => nota.titulo === titulo);
      if (nota) {
        nota.contenido = Array.isArray(nota.contenido) ? [...nota.contenido, contenido] : [nota.contenido, contenido];
      }else{
        notas.push(nuevaNota);
      }
      escribir(notas);
    })
  }else{
    notas.push(nuevaNota);
    escribir(notas);
  }
  console.log('Se escribio con éxito.');
}

function escribir(notas){
  fs.writeFile(filePath, JSON.stringify(notas,null,2), { encoding: 'utf8' }, (err) => {
    if (err) {
      console.error('Hubo un error:\n', err);
    }
  })
}

// /**
//  * Lista todas las notas guardadas.
//  */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error('Hubo un error:\n', err);
        return;
      }
      notas = JSON.parse(data);
      console.log(notas);
    })
  } else {
    console.log('No hay notas guardadas.');
  }
}

// /**
//  * Elimina una nota por su título.
//  * @param {string} titulo - El título de la nota a eliminar.
//  */
function eliminarNota(titulo) {

  //convertir lo que esta dentro a objeto buscar que titulo coincide eliminar ese elemento y volver hacerlo json y sobre escribir la informacion
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error('Hubo un error:\n', err);
        return;
      }
      notas = JSON.parse(data);
      notas = notas.filter((nota) => nota.titulo !== titulo);
      escribir(notas);
    })
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
// agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal.');
//listarNotas();
//eliminarNota('Compras');