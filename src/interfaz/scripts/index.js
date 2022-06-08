import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';
import {MDCTabBar} from '@material/tab-bar';

import init from '../../dominio/init.mjs';
import Usuario from '../../dominio/userClass.mjs';

var sistema = init();

console.log(sistema.getCartas())
sistema.logIn("admin","admin")

//Marketplace
let cartas = sistema.getCartas();
document.getElementById('NFT1').src = sistema.getRandomCard().getPath();
document.getElementById('NFT2').src = sistema.getRandomCard().getPath();
document.getElementById('NFT3').src = sistema.getRandomCard().getPath();
document.getElementById('NFT4').src = sistema.getRandomCard().getPath();






//Creacion de la lista NFT y filtros
//Recibe como parametro la carta, el nombre de la lista y 0 si es para comprar, 1 si es para vender y 2 si es para favoritos
function mostrarCarta(carta,nombre_lista,modo){
    

    let listaInterna = document.getElementById(nombre_lista);

    var divCarta = document.createElement("div");
    divCarta.className="mdc-card";
    listaInterna.appendChild(divCarta);
    
    var divPrimaryAction = document.createElement("div");
    divPrimaryAction.className="mdc-card__primary-action";
    divCarta.appendChild(divPrimaryAction);
    
    var divMediaCard = document.createElement("div");
    divMediaCard.className="my-card__media mdc-card__media mdc-card__media--16-9 ";
    divPrimaryAction.appendChild(divMediaCard);
    
    var link = document.createElement("a");
    divMediaCard.appendChild(link);
    
    var img = document.createElement("img");
    img.className="mdc-image-list__image";
    img.src=carta.getPath();
    link.appendChild(img);
    
    var divRipple = document.createElement("div");
    divRipple.className="mdc-card__ripple";
    divMediaCard.appendChild(divRipple);
    
    var divCardActions = document.createElement("div");
    divCardActions.className="mdc-card__actions";
    divCarta.appendChild(divCardActions);
    //
    var divFullBleed = document.createElement("div");
    divFullBleed.className="mdc-card__actions mdc-card__actions--full-bleed";
    divFullBleed.data=carta.getId();
    divCardActions.appendChild(divFullBleed);
    
    divFullBleed.onclick=function()
    {
        if(modo==0){
            //CODIGO PARA DAR LIKE
            if(!sistema.getCurrentUser().getIdFavoritas().includes(carta.getId())){

              
                sistema.getCurrentUser().addFavorita(divFullBleed.data);
                alert("Agregado a favoritos correctamente")

                carta.likeCard();

                let listaInterna = document.getElementById("NFT_lista_interna");
                listaInterna.innerHTML='';
                cartas.forEach(element => {
                    mostrarCarta(element,"NFT_lista_interna",0);
                });
            }else{
                alert("Este NFT ya tiene tu like!")
            }
        
        }else if(modo==2){
             //CODIGO PARA QUITAR LIKE
             sistema.getCurrentUser().removeFavorita(divFullBleed.data);

            carta.unlikeCard()
            
             alert("Quitado de favoritos correctamente")
 
             let listaInterna = document.getElementById("NFT_Favoritos_interna");
             listaInterna.innerHTML='';
             sistema.getCurrentUser().getCartasFavoritas(sistema.getCartas()).forEach(element => {
                   mostrarCarta(element,"NFT_Favoritos_interna",1);
              });
              let listaInterna2 = document.getElementById("NFT_lista_interna");
                listaInterna2.innerHTML='';
                cartas.forEach(element => {
                    mostrarCarta(element,"NFT_lista_interna",0);
                });

        }        
    }



    var link_button = document.createElement("a");
    link_button.className="mdc-button mdc-card__action mdc-card__action--button";
    link_button.data=carta.getId();
    divFullBleed.appendChild(link_button);

    var divButtonRiple = document.createElement("div");
    divButtonRiple.className="mdc-button__ripple";
    link_button.appendChild(divButtonRiple);
    
    var button_label = document.createElement("span");
    button_label.className="mdc-button__label"
    button_label.innerHTML= carta.getNombre();
    link_button.appendChild(button_label);
    
    var arrowIcon = document.createElement("i");
    arrowIcon.className="material-icons mdc-button__icon link_carta";
    arrowIcon.ariaHidden=true;
    
    //Icono corazon
    if(sistema.getCurrentUser().getIdFavoritas().includes(carta.getId())){
        arrowIcon.innerHTML="favorite";
    }else{
        arrowIcon.innerHTML="favorite_border";
    }
    link_button.appendChild(arrowIcon);


    var numberOfLikes = document.createElement("span");
    numberOfLikes.innerHTML=carta.getLikes();
    link_button.appendChild(numberOfLikes);
    
    //
    var divFullBleed2 = document.createElement("div");
    divFullBleed2.className="mdc-card__actions mdc-card__actions--full-bleed";
    divCardActions.appendChild(divFullBleed2);
    

    var link_button2 = document.createElement("a");
    link_button2.className="mdc-button mdc-card__action mdc-card__action--button";
    divFullBleed2.appendChild(link_button2);
    
    var divButtonRiple2 = document.createElement("div");
    divButtonRiple2.className="mdc-button__ripple";
    link_button2.appendChild(divButtonRiple2);
    
    var button_label2 = document.createElement("span");
    button_label2.className="mdc-button__label"
    link_button2.appendChild(button_label2);
    
    if(modo!=2){
        var button_comprar2=document.createElement("button");
        button_comprar2.className="mdc-button mdc-button--raised comprar_NFT";
        button_comprar2.data=carta.getId();
        button_label2.appendChild(button_comprar2);
    
    button_comprar2.onclick=function(){
        if(modo==0){  
                //Codigo de la compra
                if (sistema.compraCarta(button_comprar2.data,sistema.getCurrentUser())){
                    let listaInterna = document.getElementById("NFT_lista_interna");
                    listaInterna.innerHTML='';
                    cartas.forEach(element => {
                        mostrarCarta(element,"NFT_lista_interna",0);
                    });
                    alert("Se ha realizado la compra exitosamente!")
                    textSaldo.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";
                    textSaldoPerfil.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";

                }else{
                    alert("Saldo insuficiente")
                }
            }else if(modo==1){
                //Codigo de la venta
                sistema.venderCarta(button_comprar2.data,sistema.getCurrentUser())
                let listaInterna = document.getElementById("NFT_Lib_interna");
                    listaInterna.innerHTML='';
                    sistema.getCurrentUser().getCartas().forEach(element => {
                        mostrarCarta(element,"NFT_Lib_interna",1);
                    });

                alert('Se ha realizado la venta correctamente')
                textSaldo.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";
                textSaldoPerfil.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";

            }        
        }
    }

    if(modo==0){
        var button_label3 = document.createElement("span");
        button_label3.className="mdc-button__label"
        button_label3.innerHTML="Buy: "+carta.getPrecio()+"$";
        button_comprar2.appendChild(button_label3);
    }else if(modo==1){
        var button_label3 = document.createElement("span");
        button_label3.className="mdc-button__label"
        button_label3.innerHTML="Sell: "+carta.getPrecio()+"$";
        button_comprar2.appendChild(button_label3);
    }
}

 



//Iniciaizacion de lista NFTs
cartas.forEach(element => {
    mostrarCarta(element,"NFT_lista_interna",0);
});


//Filtros, buscador y saldo de marketplace
const search = new MDCTextField(document.getElementById('search'));
const select = new MDCSelect(document.querySelector('.mdc-select'));
const botonBuscar = new MDCRipple(document.getElementById('aplicar_filtros'));
const textSaldo = document.getElementById("saldo_marketplace");

textSaldo.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";

botonBuscar.listen('click', () =>{
    if(!search.value==""){
            let array = sistema.buscarPorNombre(search.value.toLowerCase());
            let listaInterna = document.getElementById("NFT_lista_interna");
            listaInterna.innerHTML='';
            array.forEach(element => {
                mostrarCarta(element,"NFT_lista_interna",0);
            });
    }else{
        cartas.forEach(element => {
            mostrarCarta(element,"NFT_lista_interna",0);
        });
    }
});


select.listen('MDCSelect:change', () => {
    let listaInterna = document.getElementById("NFT_lista_interna");
    listaInterna.innerHTML='';
   if(select.selectedIndex==1){
        sistema.orderByLike();
   }
   
    if(select.selectedIndex==2){
        sistema.orderByPrecioMayor();
        }
    if(select.selectedIndex==3){
        sistema.orderByPrecioMenor();
    }   
    if(select.selectedIndex==4){
        sistema.orderByFecha();
    }

   sistema.getCartas().forEach(element => {
        mostrarCarta(element,"NFT_lista_interna",0);
    });

});



//Login Box
const user = new MDCTextField(document.getElementById('user'));
const password = new MDCTextField(document.getElementById('password'));
const login = new MDCRipple(document.getElementById('login_button'));

login.listen('click', () => {
    if(sistema.logIn(user.value, password.value)){
        let listaInterna = document.getElementById("NFT_lista_interna");
        listaInterna.innerHTML='';
        cartas.forEach(element => {
              mostrarCarta(element,"NFT_lista_interna",0);
         });
        document.querySelectorAll(".content").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
          });

          document.querySelectorAll(".marketplace").forEach((element, index) => {
            element.classList.remove("sample-content--hidden");
       });
       document.getElementById('caja-marketplace').prepend(document.getElementById('banner-principal'));


    }else{
        alert("Error");
    }

    user.value="";
    password.value="";
})

//Register Box
const volver = new MDCRipple(document.getElementById('arrow_registro_img'));
volver.listen('click', () => {
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".login").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
})
document.getElementById("registro").addEventListener("click", abrirRegistro);
function abrirRegistro(){
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

      document.querySelectorAll(".registro").forEach((element, index) => {
        element.classList.remove("sample-content--hidden");
   });
}



//POR QUE EMAIL NO ESTA SIENDO USADO?



const registro_user = new MDCTextField(document.getElementById('registro_user'));
const registro_password = new MDCTextField(document.getElementById('registro_password'));
const registro_verificar_password = new MDCTextField(document.getElementById('verificar_password'));


let boton_registro=new MDCRipple(document.getElementById("register_button"));

boton_registro.listen('click', () => {
    if(registro_password.value==registro_verificar_password.value){
        let usuario = sistema.findUser(registro_user.value);
        if(!usuario){ 
            let user = new Usuario(registro_user.value,registro_password.value,0,false);
            sistema.agregarUsuario(user);
            alert("Usuario agregado exitosamente");
            document.querySelectorAll(".content").forEach((element, index) => {
                element.classList.add("sample-content--hidden");
              });
        
            document.querySelectorAll(".login").forEach((element, index) => {
                 element.classList.remove("sample-content--hidden");
            });
        }else{
            alert("Un usuario con ese username ya existe")
        }
    }else{
        alert("La contraseña ingresada no coincide")
    }

});

//Forgotten Password
const volverForgotten = new MDCRipple(document.getElementById('arrow_registro_img'));
volver.listen('click', () => {
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".login").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
})

document.getElementById("olvide").addEventListener("click", abrirForgotten);
function abrirForgotten(){
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

      document.querySelectorAll(".forgotten").forEach((element, index) => {
        element.classList.remove("sample-content--hidden");
   });
}

const forgotten_user = new MDCTextField(document.getElementById('forgotten_user'));
const forgotten_password = new MDCTextField(document.getElementById('forgotten_password'));
const forgotten_verificar_password = new MDCTextField(document.getElementById('forgotten_verificar_password'));
const boton_forgotten=new MDCRipple(document.getElementById("boton_forgotten"));


boton_forgotten.listen('click', () => {
    if(forgotten_password.value==forgotten_verificar_password.value){
        let usuario = sistema.findUser(forgotten_user.value);
        if(usuario){ 
           
            usuario.setPassword(forgotten_password.value);

            alert("Contraseña actualizada exitosamente");
            
            forgotten_user.value="";
            forgotten_password.value="";
            forgotten_verificar_password.value="";
            document.querySelectorAll(".content").forEach((element, index) => {
                element.classList.add("sample-content--hidden");
              });
        
            document.querySelectorAll(".login").forEach((element, index) => {
                 element.classList.remove("sample-content--hidden");
            });
        }else{
            alert("Ese usuario no existe")
        }
    }else{
        alert("La contraseña ingresada no coincide")
    }

});


//Top Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const marketplace = new MDCRipple(document.getElementById('marketplace_button'));
const perfil = new MDCRipple(document.getElementById('profile_button'));

const tab0 = document.getElementById('lib_btn');
const tab1 = document.getElementById('fav_btn');
const tab2 = document.getElementById('wallet_btn');
const tab3 = document.getElementById('info_btn');

perfil.listen('click', () => {
    let listaInterna = document.getElementById("NFT_Lib_interna");
        listaInterna.innerHTML='';
          sistema.getCurrentUser().getCartas().forEach(element => {
            mostrarCarta(element,"NFT_Lib_interna",1);
        });
        document.querySelectorAll(".content").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
          });

          document.querySelectorAll(".perfilPrinc").forEach((element, index) => {
            element.classList.remove("sample-content--hidden");
       });
       document.getElementById('contenido_perfilPrinc').prepend(document.getElementById('tab_perfil'));
       document.getElementById('caja-perfilPrinc').prepend(document.getElementById('banner-principal'));
       tabBar.activateTab(0);

})

//Boton marketplace abre marketplace
marketplace.listen('click', () => {
    if(sistema.getCurrentUser()==undefined){
        alert("Debe logearse con usuario y contraseña")
    }else{

        document.querySelectorAll(".content").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
        });

        document.querySelectorAll(".marketplace").forEach((element, index) => {
            element.classList.remove("sample-content--hidden");
        });
        document.getElementById('caja-marketplace').prepend(document.getElementById('banner-principal'));
    }
})



//Pestaña Principal Perfil

const logout = new MDCRipple(document.getElementById('logout_button'))
const tabBar = new MDCTabBar(document.getElementById('tab_perfil'));


tabBar.listen('MDCTabBar:activated', ()=> {
    //Dependiendo de cual este activo, despliegara el contenido correspondiente
    
    if(tab0.ariaSelected == "true"){

        //Ventana mis NFTs
        document.querySelectorAll(".content").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
          });
    
        document.querySelectorAll(".perfilPrinc").forEach((element, index) => {
             element.classList.remove("sample-content--hidden");
        });
        document.getElementById('contenido_perfilPrinc').prepend(document.getElementById('tab_perfil'));
        document.getElementById('caja-perfilPrinc').prepend(document.getElementById('banner-principal'));
        let listaInterna = document.getElementById("NFT_Lib_interna");
        listaInterna.innerHTML='';
          sistema.getCurrentUser().getCartas().forEach(element => {
            mostrarCarta(element,"NFT_Lib_interna",1);
        });
    } else if(tab1.ariaSelected  == "true"){
        
    // Ventana Favoritos
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".favoritos").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
    document.getElementById('contenido_favoritos').prepend(document.getElementById('tab_perfil'));
    document.getElementById('caja_favoritos').prepend(document.getElementById('banner-principal'));

    //Re carga
    let listaInterna = document.getElementById("NFT_Favoritos_interna");
    listaInterna.innerHTML='';
    sistema.getCurrentUser().getCartasFavoritas(sistema.getCartas()).forEach(element => {
          mostrarCarta(element,"NFT_Favoritos_interna",2);
    });

    

    } else if(tab2.ariaSelected  == "true"){
        ventanaWallet();
    } else {
        //Ventana Informacion del usuario
        document.querySelectorAll(".content").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
          });
    
        document.querySelectorAll(".informacion").forEach((element, index) => {
             element.classList.remove("sample-content--hidden");
        });

        document.getElementById('contenido_informacion').prepend(document.getElementById('tab_perfil'));
        document.getElementById('caja_informacion').prepend(document.getElementById('banner-principal'));

        const nombre = new MDCTextField(document.getElementById('modificar_user'));
        const password = new MDCTextField(document.getElementById('modificar_password'));
        const boton_actualizar_info = new MDCRipple(document.getElementById('actualizar_button'))
        
        nombre.value=sistema.getCurrentUser().getNombre();

        boton_actualizar_info.listen('click', () => {
            if(nombre.value==sistema.getCurrentUser().getNombre()){
                alert("El nombre ingresado a actualizar ya es el original");
                nombre.value=sistema.getCurrentUser().getNombre()
            }else if(nombre.value!=""){

                let usuario = sistema.findUser(nombre.value);
                if(!usuario){ 
                    sistema.getCurrentUser().setNombre(nombre.value);
                    alert("Nombre cambiado correctamente")
                }else{
                    alert("Ya existe un usuario con ese nombre!")
                    nombre.value=sistema.getCurrentUser().getNombre()
                }
            }
            if(password.value==sistema.getCurrentUser().getPassword()){
                alert("La password ingresada a actualizar ya es la original");
                password.value="";
            }else if(password.value!=""){
                sistema.getCurrentUser().setPassword(password.value);
                alert("Contraseña cambiada correctamente")
            }
        })
    }
});


logout.listen('click', () => {
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

      sistema.logOut();

    document.querySelectorAll(".login").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
})

const textSaldoPerfil = document.getElementById("saldo_perfil");

textSaldoPerfil.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";






function ventanaWallet(){

    const textSaldo = document.getElementById("saldo_wallet");

    textSaldo.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";

    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".wallet").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
    document.getElementById('contenido_wallet').prepend(document.getElementById('tab_perfil'));
    document.getElementById('caja-wallet').prepend(document.getElementById('banner-principal'));

}

const cant = new MDCTextField(document.getElementById('agg_monto'));
const monto = new MDCRipple(document.getElementById('monto_button'))

monto.listen('click', () => {
    if(!(isNaN(cant.value)) && cant.value != ""){
        sistema.getCurrentUser().agregarSaldo(parseInt(cant.value));

        //Recarga texto saldo de wallet
        const textSaldo = document.getElementById("saldo_wallet");
        textSaldo.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";

        alert("El monto: "+cant.value+" ah sido agregado correctamente a su wallet");

        //Recarga texto saldo de mi libreria
        textSaldoPerfil.innerHTML="Saldo: "+sistema.getCurrentUser().getSaldo()+"$";
        cant.value="";
    } else {
        alert("El monto ingresado no es un número")
    }
})

