const { crearTabla } = require('./helpers/multiplicar')
const  argsv = require('./yargs/yargs')

console.clear();

crearTabla(argsv.b,argsv.l,argsv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))




