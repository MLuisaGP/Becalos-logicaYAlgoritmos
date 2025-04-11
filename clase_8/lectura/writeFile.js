const fs = require('fs');
//Esto lo hace segundo porque esta async
fs.writeFile('./example.txt', 'Hola, Node.js!',{encoding:'utf8'}, (err) => {
  if (err) { // manejo de errores
    console.error('Error al escribir en el archivo:', err);
    return;
  }

  console.log('Archivo escrito con éxito.');
});