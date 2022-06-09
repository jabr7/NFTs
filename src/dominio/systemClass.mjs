export default class Sistema{
    constructor(){
        this.cartas = [];
        this.usuarios = [];
        this.currentUser = undefined;
    }
    // devuelve un objeto carta al azar del array
    getRandomCard(){
        let randomIndex = Math.floor(Math.random() * this.getCartas().length);
        let carta = this.getCartas()[randomIndex];
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
    // dado un nombre de usuario, devuelve el objeto usuario si lo encuentra, sino devuelve null
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
        let ret;
        for (let carta of this.getCartas()){
            if (carta.id == id){
                ret= carta;
            }
        }
        return ret;
    }
    //dado un id de carta, devuelve el index en el array
    getIndexCarta(id){
        if (this.getCarta(id)!=null){
            for (let i=0; i<this.getCartas().length; i++){
                if (this.getCartas()[i].getId() == id){
                    return i;
                }
            }

        }
        else {return -1};
    }

    //ordena el array de cartas por precio menor a mayor
    orderByPrecioMenor(){
        array.sort(function(a,b){

            return a.precio - b.precio;
        })
   
    }
     //ordena el array de cartas por mayor a menor  
    orderByPrecioMayor(array){
        array.sort(function(a,b){

            return b.precio - a.precio;
        })
    }
    //ordena el array de cartas por fecha, segun el bool que le demos es en orden (mas vieja a mas nueva o viceversa)
    orderByFecha(array){
        array.sort(function(a,b){
            return a.fecha - b.fecha;
        })
    }
    //Ordena el array de cartas por cantidad de likes en las mismas (mayor a menor)
    orderByLike(array){
        array.sort(function(a,b){

            return b.precio - a.precio;
        })
    }
    // se efectua la compra de una carta, la carta se remueve del sistema y se agrega al array de cartas del usuario
    // devuelve true o false dependiendo de si fue exitosa o no 
    compraCarta(id, user){
        let index = this.getIndexCarta(id);
        if (index>=0){
            let carta = this.getCarta(id);
            if (user.restarSaldo(carta.getPrecio())){
                user.addCard(carta);
                this.getCartas().splice(index, 1);
                return true;
            }
            else{
                return false;

            }
        }   
    }
    //vende la carta del usuario
    venderCarta(id,user){
        let carta = user.getCarta(id);
        this.agregarCarta(carta);
        user.removeCard(carta.id);
        user.agregarSaldo(carta.precio);
    }
    //Busca por nombre, si el nombre incluye el substring devuelve el array de las cartas que lo cumplan
    buscarPorNombre(texto, array){
        let ret = [];
        for (let carta of array){
            if (carta.getNombre().toLowerCase().includes(texto)){
                ret.push(carta);
            }
        }
        return ret;
    }
}