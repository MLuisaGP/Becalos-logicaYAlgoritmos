const fs = require('fs');
//Esto lo hace segundo porque esta async
fs.unlink('./example.txt',(err)=>{
  if(err){
    console.error('Error al eliminar el archivo:\n',err);
  }
  console.log('Archivo eliminado con éxito.');
  
})