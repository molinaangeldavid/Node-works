const { crearTabla } = require('./helpers/multiplicar')
const  argsv = require('./yargs/yargs')

console.clear();

console.log(argsv)

crearTabla(argsv.b,argsv.l)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))




