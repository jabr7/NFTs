//const uuidv4 = require("uuid/v4")
import * as path from 'path';

import * as fs from 'fs';


import Sistema from './systemClass.js';
import Usuario from 'userClass.js';
import Carta from 'cardClass.js';
import file from 'files.js';





export default function init(){

    usuarios = [
        {nombre:"admin",password:"admin.01",saldo:9999999,admin:true,cartas:[]},
        {nombre:"usuario1",password:"inicio.1",saldo:5000,admin:false,cartas:[]},
        {nombre:"usuario2",password:"inicio.2",saldo:100,admin:false,cartas:[]},
        {nombre:"usuario3",password:"inicio.3",saldo:0,admin:false, cartas:[]}
        ];

    system = new Sistema;
    //inicializar users
    for (i of usuarios) {
        user = new Usuario(i.nombre, i.password, i.saldo, i.admin, i.cartas);
        system.agregarUsuario(user);
    }

    gifFiles = files('../../interfaz/imagenes/Cards/');

    //inicializar cartas
    console.log(gifFiles); 

    
    
    return system;


}

