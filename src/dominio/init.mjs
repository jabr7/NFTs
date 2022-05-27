


import Sistema from './systemClass.mjs';
import Usuario from './userClass.mjs';
import Carta from './cardClass.mjs';
//import files from './files.mjs';
import generateRandomDate from './fecha.mjs';
import randomName from './names.mjs';
import usuarios from "./users.mjs";
import gifFiles from "./cartas.mjs";

export default function init(){
    let system = new Sistema;
    //inicializar users
    for (let i of usuarios) {
        let user = new Usuario(i.nombre, i.password, i.saldo, i.admin);
        system.agregarUsuario(user);
    }

    //inicializar cartas
    //de todas las cartas posible elige 20 al azar y las agrega al sistema
    for (let i=0; i<20; i++){
        let index = Math.round(Math.random() * gifFiles.length );

        let start = new Date(2020, 0, 1);
        let end = new Date();
        let fecha = generateRandomDate(start, end);
        let nombre = randomName();
        let carta = new Carta(gifFiles[index],fecha, nombre);
        system.agregarCarta(carta);
    }
    return system;


}