export default class Usuario{
    constructor(nombre,password,saldo,admin) {
        this.nombre = nombre;
        this.password = password;
        this.saldo = saldo,
        this.admin = admin;
        this.cartas = [];
    }

    getSaldo(){
        return this.saldo;
    }
    restarSaldo(monto){
        this.saldo = this.getSaldo-monto;
    }
    agregarSaldo(monto){
        this.saldo = this.getSaldo+monto;
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
    //borra la carta del usuario
    removeCard(id){
        if (this.getCarta(id)!=null){
            let index = getIndexCarta(id);
            this.getCartas.splice(index, 1);
        }
    }
    //agrega carta al usuario
    addCard(card){
        this.getCartas().push(card);
    }
    
}

