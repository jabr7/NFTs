class Carta{
    constructor(imagePath){
        this.id = uuidv4();
        this.likes = 0;
        this.precio = Math.floor(Math.random() * 1000 ) + 1;
        this.path = path.dirname(imagePath) + '/' + path.basename(notes);

    }

}

export default Carta;
