export default class Usuario{
    constructor(nombre,password,saldo,admin) {
        this.nombre = nombre;
        this.password = password;
        this.saldo = saldo,
        this.admin = admin;
        this.cartas = [];
        this.favoritas = [];

    }
    getNombre(){
        return this.nombre;
    }
    getPassword(){
        return this.password;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setPassword(password){
        this.password = password;
    }
    getSaldo(){
        return this.saldo;
    }
    //resta saldo del usuario (devuleve true), si no alcanza el saldo, devuelve false.
    restarSaldo(monto){
        let saldo = this.getSaldo();
        if (saldo<monto){
            return false;
        }
        else{
            this.saldo = this.getSaldo()-monto;
            return true;
        }
    }
    agregarSaldo(monto){
        this.saldo = this.getSaldo()+monto;
    }
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
    //dado un id de carta, devuelve el index en el array, devuelve -1 si no la encuentra
    getIndexCarta(id){
        if (this.getCarta(id)!=null){
            for (let i=0; i<this.getCartas().length; i++){
                if (this.getCartas()[i].id == id){
                    return i;
                }
            }

        }
        else {return -1};
    }
    //borra la carta del usuario, devuelve true si es exitoso, false si no esta la carta
    removeCard(id){
        if (this.getCarta(id)!=null){
            let index = this.getIndexCarta(id);
            this.getCartas().splice(index, 1);
            return true;
        }
        else{
            return false;
        }
    }
    //agrega carta al usuario
    addCard(card){
        this.getCartas().push(card);
    }

    //consulta si el usuario es admin
    isAdmin(){
        return this.admin;
    }
    //habilita o deshabiltia el usuario como admin
    toogleAdmin(){
        this.admin = !this.admin;
    }


    toString(){

        return "Nombre: " + this.getNombre() + ", Password: " + this.getPassword() + ", Saldo: " + this.getSaldo() + " is Admin: " + this.isAdmin() + ", Cant Cartas: " + this.getCartas().length;
    }
    //devuelve el array con id de las cartas favoritas
    getIdFavoritas(){
        return this.favoritas;
    }
    //agrega el id de carta a favoritas
    addFavorita(id){
        this.favoritas.push(id);
    }
    //devuelve un array con las cartas favoritas
    getCartasFavoritas(cartasSystem){
        let idFavoritas = this.getIdFavoritas();
        let ret = [];
        for (let carta of this.getCartas()){
            if (idFavoritas.includes(carta.getId())){
                ret.push(carta);
            }            
        }
        for (let carta of cartasSystem){
            if (idFavoritas.includes(carta.getId())){
                ret.push(carta);
            }             
        }
        return ret;
    }


}


