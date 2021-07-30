const fs = require ('fs');
const { argv } = require('process');
const colors = require('colors');

const crearTabla = (base,listar,hasta) => {

    return new Promise ((resolve,reject) => {

        let salida = '';
        let consola = '';
        for (i=1;i<=hasta;i++){
            salida += (`\t\n${base} ${'*'.brightCyan} ${i} ${'='.brightCyan} ${base * i}\n`);
            consola += (`\t\n${base} * ${i} = ${base * i}\n`);

        }
        if ( listar == true ) {
       
            console.log('#####################################\n'.brightCyan)
            console.log(`\t=====  Tabla de ${base}  =====\n`.brightRed)
            console.log('#####################################'.brightCyan)

            console.log(salida)
        }
        

        fs.writeFile(`salida/tabla-${base}.txt`,consola, (err)=> {
            
            if(err){

                reject(err => console.log(err))
            }else{

                resolve(`tabla-${base}.txt`)
            }

        })

    })
}

module.exports = {
    crearTabla
}

