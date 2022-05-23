


import Sistema from './systemClass.mjs';
import Usuario from './userClass.mjs';
import Carta from './cardClass.mjs';
import files from './files.mjs';
import generateRandomDate from './fecha.mjs';



export default function init(){

    let usuarios = [
        {nombre:"admin",password:"admin.01",saldo:9999999,admin:true},
        {nombre:"usuario1",password:"inicio.1",saldo:5000,admin:false},
        {nombre:"usuario2",password:"inicio.2",saldo:100,admin:false},
        {nombre:"usuario3",password:"inicio.3",saldo:0,admin:false}
        ];

    let system = new Sistema;
    //inicializar users
    for (let i of usuarios) {
        let user = new Usuario(i.nombre, i.password, i.saldo, i.admin);
        system.agregarUsuario(user);
    }

    let gifFiles = files('../../interfaz/imagenes/Cards/');

    //inicializar cartas
    //de todas las cartas posible elige 20 al azar y las agrega al sistema
    for (let i=0; i<20; i++){
        let index = Math.round(Math.random() * gifFiles.length );
        let start = new Date(2020, 0, 1);
        let end = new Date();
        let fecha = generateRandomDate(start, end);
        let carta = new Carta(gifFiles[index],fecha);
        system.agregarCarta(carta);
    }
    return system;


}
init();

