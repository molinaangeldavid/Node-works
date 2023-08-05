const fs = require('fs')

const crearTabla = (base = 5,listar = false, limite = 10) => {
    

    return new Promise( (resolve, reject) => {
        console.log("Tabla de " + base, '\n');
        let salida = '';
        
        for(let i = 1 ; i <= limite ;i++){
            salida += `${base} x ${i} = ${base*i}\n`;
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



