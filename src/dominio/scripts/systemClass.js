export default class Sistema{
    constructor(){
        this.cartas = [];
        this.usuarios = [];
        this.currentUser = undefined;
    }

    agregarCarta(carta){
        this.cartas.push(carta);
    }

    agregarUsuario(usuario){
        this.usuarios.push(usuario);
    }
    setUser(usuario){
        this.currentUser = usuario;
    }
    logIn(username, passowrd){
        exitoso = false;
        if (exitoso){


        }
        return exitoso;
    }

    logOut(){
        this.currentUser = undefined;
    }

    getCartas(){
        return this.cartas;
    }
    getCarta(id){
        return carta
    }
    
    orderByPrecioMenor(){

    }
    orderByPrecioMayor(){

    }
    orderByFecha(){

    }
    orderByLike(){

    }   
}