const fs = require('fs');
//Esto lo hace segundo porque esta async
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
  
    console.log('Contenido del archivo:', data);
  });
  //Esto lo realiza primero
  console.log('hola');
  