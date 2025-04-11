const fileSystem = require('fs');//File system
fileSystem.readFile('devf.txt', 'utf-8',(error,data)=>{
    if(error){
        console.error('Lamentablemente no pudimos leer tu archivo.\n',error);
        return;
    }
    console.log(`El contenido de tu archivo es:\n`,data);
    
    
});
