export default class Sistema{
    constructor(){
        this.cartas = [];
        this.usuarios = [];
        this.currentUser = undefined;
    }
    // devuelve un objeto carta al azar del array
    getRandomCard(){
        let randomIndex = Math.floor(Math.random() * arr.length);
        let carta = system.getCartas[randomIndex];
        return carta;
        }
    // agrega carta al sistema
    agregarCarta(carta){
        this.cartas.push(carta);
    }
    // agrega user al sistema
    agregarUsuario(usuario){
        if (!this.findUser(usuario)){
            this.usuarios.push(usuario);

        }
    }
    //devuelve el array de usuarios
    getUsers(){
        return this.usuarios;
    }
    // setea el usuario activo
    setCurrentUser(usuario){
        this.currentUser = usuario;
    }
    getCurrentUser(usuario){
        return this.currentUser;
    }
    // dado un nombre de usuario, devuelve el objeto ussuario si lo encuentra, sino devuelve null
    findUser(username){
        for (let user of this.getUsers()){
            if (user.nombre == username){
                return user;
            }
        }
        return null;

    }
    //proceso interno de login
    logIn(username, password){
        let exitoso = false;
        let user = this.findUser(username);
        if (user!=null){
            if (user.password == password){
                exitoso = true;
            }
        }
        if (exitoso){
            this.setCurrentUser(user);
        }
        return exitoso;
    }
    //logout proceso
    logOut(){
        this.currentUser = undefined;
    }
    //devuelve el array de cartas
    getCartas(){
        return this.cartas;
    }
    //dado un id devuelve la carta, en caso de no existir devuelve null
    getCarta(id){;
        for (let carta of this.getCartas()){
            if (carta.id == id){
                return carta;
            }
        }
        return null;
    }
    //dado un id de carta, devuelve el index en el array
    getIndexCarta(id){
        if (this.getCarta(id)!=null){
            for (let i=0; i<this.getCartas.length; i++){
                if (this.getCartas[i].id == id){
                    return i;
                }
            }

        }
        else {return -1};
    }

    //ordena el array de cartas por precio menor a mayor
    orderByPrecioMenor(){
        this.cartas.sort(function(a,b){

            return a.precio - b.precio;
        })
   
    }
     //ordena el array de cartas por mayor a menor  
    orderByPrecioMayor(){
        this.cartas.sort(function(a,b){

            return b.precio - a.precio;
        })
    }
    //ordena el array de cartas por fecha, segun el bool que le demos es en orden (mas vieja a mas nueva o viceversa)
    orderByFecha(orden){
        this.cartas.sort(function(a,b){
            return a.fecha - b.fecha;
        })
    }
    //Ordena el array de cartas por cantidad de likes en las mismas (mayor a menor)
    orderByLike(){
        this.cartas.sort(function(a,b){

            return b.precio - a.precio;
        })
    }
    // se efectua la compra de una carta, la carta se remueve del sistema y se agrega al array de cartas del usuario
    compraCarta(id, user){
        let index = getIndexCarta(id);
        if (index>=0){
            let carta = this.getCarta(id);
            this.getCartas.splice(index, 1);
            user.addCard(carta);
        }   
    }
    //vende la carta del usuario
    vednerCarta(id,user){
        let carta = user.getCarta(id);
        this.agregarCarta(carta);
        user.removeCard(carta.id);
    }
}