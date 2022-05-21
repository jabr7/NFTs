import Sistema from "./systemClass";
import Usuario from "./userClass";
import Carta from "./cardClass"
import usuarios from "./users"
const uuidv4 = require("uuid/v4")
const path = require('path');
const fs = require('fs');

export default function init(){
    
    system = new Sistema;
    for (i of usuarios) {
        user = new Usuario(i.nombre, i.password, i.saldo, i.admin, i.cartas);
        system.agregarUsuario(user);
      }
    
    return system;


}

