/* eslint-disable linebreak-style */
/* eslint-disable max-len */

/** Constructor de usuario
 * @constructor
 */
export default class Usuario {
  /**
     * @param {string} nombre
     * @param {string} password
     * @param {number} saldo
     * @param {bool} admin
     */
  constructor(nombre, password, saldo, admin) {
    this.nombre = nombre;
    this.password = password;
    this.saldo = saldo,
    this.admin = admin;
    this.cartas = [];
    this.favoritas = [];
  }

  /** Retorna el nombre del usuario
   * @return {string}
   */
  getNombre() {
    return this.nombre;
  }

  /** Retorna la contraseña del usuario
   * @return {string}
   */
  getPassword() {
    return this.password;
  }

  /** Setea el nombre del usuario
   * @param {string} nombre
   */
  setNombre(nombre) {
    this.nombre = nombre;
  }

  /** Setea la contraseña del usuario
   * @param {string} password
   */
  setPassword(password) {
    this.password = password;
  }

  /** Retorna el saldo del usuario
   * @return {number}
   */
  getSaldo() {
    return this.saldo;
  }

  /** resta saldo del usuario (devuelve true), si no alcanza el saldo, devuelve false.
   * @param {number} monto
   * @return {bool}
   * */
  restarSaldo(monto) {
    const saldo = this.getSaldo();
    if (saldo<monto) {
      return false;
    } else {
      this.saldo = this.getSaldo()-monto;
      return true;
    }
  }

  /** agrega el saldo ingresado al usuario
   * @param {number} monto
   * */
  agregarSaldo(monto) {
    this.saldo = this.getSaldo()+monto;
  }

  /** Devuelve el array de las cartas que son del usuario
   * @return {[carta]}
   */
  getCartas() {
    return this.cartas;
  }

  /** Dado un id devuelve la carta, en caso de no existir devuelve null
 * @param {number} id
 * @return {carta}
 */
  getCarta(id) {
    ;
    for (const carta of this.getCartas()) {
      if (carta.id == id) {
        return carta;
      }
    }
    return null;
  }

  /** Dado un id de carta, devuelve el index en el array, devuelve -1 si no la encuentra
   * @param {number} id
   * @return {number}
   */
  getIndexCarta(id) {
    if (this.getCarta(id)!=null) {
      for (let i=0; i<this.getCartas().length; i++) {
        if (this.getCartas()[i].id == id) {
          return i;
        }
      }
    } else {
      return -1;
    };
  }

  /** Borra la carta del usuario, devuelve true si es exitoso, false si no esta la carta
 * @param {number} id
 * @return {bool}
 */
  removeCard(id) {
    if (this.getCarta(id)!=null) {
      const index = this.getIndexCarta(id);
      this.getCartas().splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /** agrega carta al usuario
   * @param {carta} card
   */
  addCard(card) {
    this.getCartas().push(card);
  }

  /** Consulta si el usuario es admin
   * @return {bool}
   */
  isAdmin() {
    return this.admin;
  }

  /** Habilita o deshabiltia el usuario como admin
   */
  toogleAdmin() {
    this.admin = !this.admin;
  }

  /** Retorna el la informacion de el usuario
 * @return {string}
 */
  toString() {
    return 'Nombre: ' + this.getNombre() + ', Password: ' + this.getPassword() + ', Saldo: ' + this.getSaldo() + ' is Admin: ' + this.isAdmin() + ', Cant Cartas: ' + this.getCartas().length;
  }

  /** Devuelve el array con id de las cartas favoritas
   * @return {[string]}
   */
  getIdFavoritas() {
    return this.favoritas;
  }

  /** Agrega el id de carta a favoritas
   * @param {number} id
   */
  addFavorita(id) {
    this.favoritas.push(id);
  }

  /** Recibe el id de la carta y la quita de la lista de favoritas del usuario
   * @param {*} id
   */
  removeFavorita(id) {
    let index;
    const favoritas = this.getIdFavoritas();
    for (let i=0; i<favoritas.length; i++) {
      if (favoritas[i] == id) {
        index = i;
      }
    }
    favoritas.splice(index, 1);
  }

  /** Devuelve un array con las cartas favoritas
 * @param {[carta]} cartasSystem
 * @return {[carta]}
 */
  getCartasFavoritas(cartasSystem) {
    const idFavoritas = this.getIdFavoritas();
    const ret = [];
    for (const carta of this.getCartas()) {
      if (idFavoritas.includes(carta.getId())) {
        ret.push(carta);
      }
    }
    for (const carta of cartasSystem) {
      if (idFavoritas.includes(carta.getId())) {
        ret.push(carta);
      }
    }
    return ret;
  }
}


