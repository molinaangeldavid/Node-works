const argsv = require('yargs')
                    .options({
                        'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            default: 5,
                            describe: 'The base of table multiply'
                        },
                        'l' : {
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: false,
                            default: false,
                            describe: 'Boolean where show or not the table'
                        }
                    }).check((argv, options) => {
                        if(isNaN(argv.b)){
                            throw 'El numero debe ser un Numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argsv