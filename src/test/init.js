/* eslint-disable max-len */


import Sistema from './systemClass.js';
import Usuario from './userClass.js';
import Carta from './cardClass.js';
import generateRandomDate from './fecha.js';
import randomName from './names.js';
import usuarios from './users.js';
import gifFiles from './cartas.js';

/**
 *
 * @return {Sisetma} un nuevo Sistema Configurado
 */
export default function init() {
  const system = new Sistema();
  // inicializar users
  for (const i of usuarios) {
    const user = new Usuario(i.nombre, i.password, i.saldo, i.admin);
    system.agregarUsuario(user);
  }


  // inicializar cartas
  // de todas las cartas posible elige 20 al azar y las agrega al sistema, se comprueban que no se repitan ya que el round puede llegar a repetirlas
  const valoresUsados = [];
  for (let i=0; i<20; i++) {
    let index = Math.round(Math.random() * gifFiles.length );
    while (valoresUsados.includes(index)) {
      index = Math.round(Math.random() * gifFiles.length );
    }
    valoresUsados.push(index);
    const start = new Date("2012-09-24");
    const end = new Date();
    const fecha = generateRandomDate(start, end);
    const nombre = randomName();
    const carta = new Carta(gifFiles[index], fecha, nombre);
    system.agregarCarta(carta);
  }
  return system;

}