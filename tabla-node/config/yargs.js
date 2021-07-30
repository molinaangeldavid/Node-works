const argv = require('yargs')
    .options({
        'b':{
            alias: 'base',
            demandOption: true,
            describe: 'base de la multiplicacion',
            type: 'number'
        },
        'l': {
            alias:'listar',
            describe:'Listar en terminal la tabla',
            default: false,
            type:'boolean'
        },
        'h': {
            alias: 'hasta',
            describe:'limite de multiplicacion',
            default: 10,
            type:'number'
        }
    })
    .check((argv,options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }else{
            return true;
        }
    
    })
    .argv

module.exports = argv