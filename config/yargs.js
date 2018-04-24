const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description
    })
    .command('borrar', 'Elimina el estado', {
        description
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}