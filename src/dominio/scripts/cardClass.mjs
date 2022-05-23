import { uuid } from 'uuidv4';


export default class Carta{
    constructor(imagePath, fecha, name){
        this.id = uuid();
        this.likes = 0;
        this.precio = Math.floor(Math.random() * 1000 ) + 1;
        this.path = imagePath;
        this.fecha = fecha;
        this.nombre = name;

    }
    getLikes(){
        return this.likes;
    }

    likeCard(){
        this.likes = this.getLikes+1;
    }
}
