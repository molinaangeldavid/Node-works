const fs = require('fs')

const crearTabla = (base = 5,listar = false) => {
    

    return new Promise( (resolve, reject) => {
        console.log("Tabla de " + base, '\n');
        let salida = '';
        
        for(let i = 1 ; i <= 10 ;i++){
            salida += `5 * ${i} = ${5*i}\n`;
        }
        if(listar){

            console.log(salida)
        }
        
        
        try{
            fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida)
            resolve(`El archivo fue creado exitosamente`)
        }catch(err){
            reject("El archivo no pudo ser creado");
        }
    })
    
}


module.exports = {
    crearTabla
}



