const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarBD();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else
        return false;
}

const crear = (descripcion) => {

    cargarBD();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const borrar = (descripcion) => {
    cargarBD();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    }
    else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}