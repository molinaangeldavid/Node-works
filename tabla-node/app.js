const {crearTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors')

    console.clear()

crearTabla(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado exitosamente'.brightCyan))
    .catch(err => console.log(err))

