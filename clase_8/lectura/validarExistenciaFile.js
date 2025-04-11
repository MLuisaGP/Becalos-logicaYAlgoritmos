const fs = require("fs");
const filePath = './exaple.txt';
if(fs.existsSync(filePath)){
    console.log('El archivo existe');
}else{
    console.log('El archivo no existe.');
}