/* eslint-disable max-len */
/**
 * Clase sistema, usada para todo lo relacionado a objetos
 */
export default class Sistema {
/**
 * Constructor
 */
  constructor() {
    this.cartas = [];
    this.usuarios = [];
    this.currentUser = undefined;
  }
  /**
   * Devuelve una carta al azar
   * @return {Carta} carta
   */
  getRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.getCartas().length);
    const carta = this.getCartas()[randomIndex];
    return carta;
  }
  /**
   * Agrega la carta al systema
   * @param {Carta} carta
   */
  agregarCarta(carta) {
    this.cartas.push(carta);
  }
  /**
   * Agrega la carta al systema
   * @param {Usuario} usuario
   */
  agregarUsuario(usuario) {
    if (!this.findUser(usuario)) {
      this.usuarios.push(usuario);
    }
  }
  /**
   * devuelve el array de usuarios
   * @return {[Usuario]} usuario
   */
  getUsers() {
    return this.usuarios;
  }
  /**
   * Setea el usuario como usuario actual
   * @param {Usuario} usuario
   */
  setCurrentUser(usuario) {
    this.currentUser = usuario;
  }
  /**
   *
   *
   * @return {Usuario} usuario
   */
  getCurrentUser() {
    return this.currentUser;
  }
  /**
   * Dado un nombre de usuario, devuelve el objeto usuario si lo encuentra, sino devuelve null
   * @param {Usuari} username
   * @return {boolean}
   */
  findUser(username) {
    for (const user of this.getUsers()) {
      if (user.nombre == username) {
        return user;
      }
    }
    return null;
  }
  /**
   * Realiza el proceso de login
   * @param {String} username
   * @param {String} password
   * @return {boolean}
   */
  logIn(username, password) {
    let exitoso = false;
    const user = this.findUser(username);
    if (user!=null) {
      if (user.password == password) {
        exitoso = true;
      }
    }
    if (exitoso) {
      this.setCurrentUser(user);
    }
    return exitoso;
  }
  /**
   * Realiza LogOut
   */
  logOut() {
    this.currentUser = undefined;
  }
  /**
   * Devuelv el arary de las cartas
   * @return {[carta]} cartas
   */
  getCartas() {
    return this.cartas;
  }
  /**
   * Dado un id devuelve la carta, en caso de no existir devuelve null
   * @param {String} id
   * @return {boolean}
   */
  getCarta(id) {
    let ret;
    for (const carta of this.getCartas()) {
      if (carta.id == id) {
        ret= carta;
      }
    }
    return ret;
  }
  /**
   * Dado un id de carta, devuelve el index en el array
   * @param {String} id
   * @return {number}
   */
  getIndexCarta(id) {
    if (this.getCarta(id)!=null) {
      for (let i=0; i<this.getCartas().length; i++) {
        if (this.getCartas()[i].getId() == id) {
          return i;
        }
      }
    } else {
      return -1;
    };
  }

  /**
   * ordena el array de cartas por precio menor a mayor
   * @param {[carta]} array
   */
  orderByPrecioMenor(array) {
    array.sort(function(a, b) {
      return a.precio - b.precio;
    });
  }
  /**
   * ordena el array de cartas por mayor a menor
   * @param {[carta]} array
   */
  orderByPrecioMayor(array) {
    array.sort(function(a, b) {
      return b.precio - a.precio;
    });
  }
  /**
   * ordena el array de cartas por fecha, segun el bool que le demos es en orden (mas vieja a mas nueva o viceversa)
   * @param {[carta]} array
   */
  orderByFecha(array) {
    array.sort(function(a, b) {
      return a.fecha - b.fecha;
    });
  }
  /**
   * Ordena el array de cartas por cantidad de likes en las mismas (mayor a menor)
   * @param {[carta]} array
   */
  orderByLike(array) {
    array.sort(function(a, b) {
      return b.likes - a.likes;
    });
  }
  /**
   * Se efectua la compra de una carta, la carta se remueve del sistema y se agrega al array de cartas del usuario
   * devuelve true o false dependiendo de si fue exitosa o no
   * @param {String} id
   * @param {String} user
   * @return {boolean}
   */
  compraCarta(id, user) {
    const index = this.getIndexCarta(id);
    if (index>=0) {
      const carta = this.getCarta(id);
      if (user.restarSaldo(carta.getPrecio())) {
        user.addCard(carta);
        this.getCartas().splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Vende la carta del usuario
   * @param {String} id
   * @param {String} user
   */
  venderCarta(id, user) {
    const carta = user.getCarta(id);
    this.agregarCarta(carta);
    user.removeCard(carta.id);
    user.agregarSaldo(carta.precio);
  }
  /**
   * Busca por nombre, si el nombre incluye el substring devuelve el array de las cartas que lo cumplan
   * @param {String} texto
   * @param {[carta]} array
   * @return {[carta]}
   */
  buscarPorNombre(texto, array) {
    const ret = [];
    for (const carta of array) {
      if (carta.getNombre().toLowerCase().includes(texto)) {
        ret.push(carta);
      }
    }
    return ret;
  }
}