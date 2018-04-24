//const argv = require('yargs');
const colors = require('colors');

const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.description)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porhacer.getListado();
        for (let tarea of listado) {
            console.log('=====Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('=====Por Hacer====='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('Comando no valido');
        break;
}