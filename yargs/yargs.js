const argsv = require('yargs')
                    .options({
                        'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            default: 5,
                            describe: 'The base of table multiply'
                        },
                        'l': {
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: false,
                            default: false,
                            describe: 'Boolean where show or not the table'
                        },
                        'h': {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'Number of limit of the table'
                        }
                    }).check((argv, options) => {
                        if(isNaN(argv.b) || isNaN(argv.h)){
                            throw 'El numero debe ser un Numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argsv