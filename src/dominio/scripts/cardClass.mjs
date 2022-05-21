import { uuid } from 'uuidv4';


export default class Carta{
    constructor(imagePath, fecha){
        this.id = uuid();
        this.likes = 0;
        this.precio = Math.floor(Math.random() * 1000 ) + 1;
        this.path = imagePath;
        this.fecha = fecha;

    }

}
