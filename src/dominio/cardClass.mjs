/* eslint-disable max-len */
import {uuid} from 'uuidv4';

/** Clase carta*/
export default class Carta {
  /** Constructor de objeto carta
  * @param {string} imagePath
  * @param {Date} fecha
  * @param {String} name
  */
  constructor(imagePath, fecha, name) {
    this.id = uuid();
    this.likes = 0;
    this.precio = Math.floor(Math.random() * 1000 ) + 1;
    this.path = imagePath;
    this.fecha = fecha;
    this.nombre = name;
  }
  /**
   * Devuleve likes de la carta
   * @return {number}
   */
  getLikes() {
    return this.likes;
  }
  /**
   * Suma 1 al likes de carta
   */
  likeCard() {
    this.likes = this.getLikes()+1;
  }
  /**
   * Resta 1 al likes de carta
   */
  unlikeCard() {
    this.likes = this.getLikes()-1;
  }
  /**
   * Devuelve el id de la carta
   * @return {String}
   */
  getId() {
    return this.id;
  }
  /**
   * Devuelve el precio de la carta
   * @return {number}
   */
  getPrecio() {
    return this.precio;
  }
  /**
   * Devuelve el path de la carta
   * @return {String}
   */
  getPath() {
    return this.path;
  }
  /**
   * Devuelve la fecha de la carta
   * @return {Date}
   */
  getFecha() {
    return this.fecha;
  }
  /**
   * Devuelve el nombre de la carta
   * @return {String}
   */
  getNombre() {
    return this.nombre;
  }
  /**
   *
   * @return {string}
   */
  toString() {
    return 'Id: ' + this.getId() + ', Likes: ' + this.getLikes() + ', Precio' + this.getPrecio() + ', Fecha: ' + this.getFecha() + ', Nombre: ' + this.getNombre();
  }
}
