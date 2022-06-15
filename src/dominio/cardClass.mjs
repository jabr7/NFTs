import {uuid} from 'uuidv4';

/** Clase carta*/
export default class Carta {
  /** Constructor de objeto carta
  * @param {string} imagePath
  */
  constructor(imagePath, fecha, name) {
    this.id = uuid();
    this.likes = 0;
    this.precio = Math.floor(Math.random() * 1000 ) + 1;
    this.path = imagePath;
    this.fecha = fecha;
    this.nombre = name;
  }
  /** Devuleve likes de la carta */
  getLikes() {
    return this.likes;
  }

  likeCard() {
    this.likes = this.getLikes()+1;
  }
  unlikeCard() {
    this.likes = this.getLikes()-1;
  }

  getId() {
    return this.id;
  }

  getPrecio() {
    return this.precio;
  }

  getPath() {
    return this.path;
  }

  getFecha() {
    return this.fecha;
  }

  getNombre() {
    return this.nombre;
  }

  toString() {
    return 'Id: ' + this.getId() + ', Likes: ' + this.getLikes() + ', Precio' + this.getPrecio() + ', Fecha: ' + this.getFecha() + ', Nombre: ' + this.getNombre();
  }
}
