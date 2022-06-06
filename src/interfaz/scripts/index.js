import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';
import {MDCTabBar} from '@material/tab-bar';

import init from '../../dominio/init.mjs';
import Usuario from '../../dominio/userClass.mjs';

var sistema = init();
console.log(sistema.getUsers());


//Marketplace
let cartas = sistema.getCartas();
document.getElementById('NFT1').src = sistema.getRandomCard().getPath();
document.getElementById('NFT2').src = sistema.getRandomCard().getPath();
document.getElementById('NFT3').src = sistema.getRandomCard().getPath();
document.getElementById('NFT4').src = sistema.getRandomCard().getPath();



document.querySelectorAll("link_carta").forEach((element) => {
    alert(element);
  });

//Creacion de la lista NFT y filtros
function mostrarCarta(carta){
    

    let listaInterna = document.getElementById("NFT_lista_interna");

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
    
    var divFullBleed = document.createElement("div");
    divFullBleed.className="mdc-card__actions mdc-card__actions--full-bleed";
    divCardActions.appendChild(divFullBleed);
    

    var link_button = document.createElement("a");
    link_button.className="mdc-button mdc-card__action mdc-card__action--button";
    link_button.onClick="prueba;";


    //link_button.data="Prueba";
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
    arrowIcon.innerHTML="favorite_border";
    link_button.appendChild(arrowIcon);

    var numberOfLikes = document.createElement("span");
    numberOfLikes.innerHTML=carta.getLikes();
    link_button.appendChild(numberOfLikes);

}

function prueba(){
    alert("Hola");
}

function exampleFunction() {
    alert('You triggered an alert!');
}
 



//Iniciaizacion de lista NFTs
cartas.forEach(element => {
    mostrarCarta(element);
});


//Filtros y buscador de marketplace
const search = new MDCTextField(document.getElementById('search'));
const select = new MDCSelect(document.querySelector('.mdc-select'));
const botonBuscar = new MDCRipple(document.getElementById('aplicar_filtros'));

botonBuscar.listen('click', () =>{
    if(!search.value==""){
            let array = sistema.buscarPorNombre(search.value.toLowerCase());
            let listaInterna = document.getElementById("NFT_lista_interna");
            listaInterna.innerHTML='';
            array.forEach(element => {
                mostrarCarta(element);
            });
    }else{
        cartas.forEach(element => {
            mostrarCarta(element);
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
        mostrarCarta(element);
    });

});



//Login Box
const user = new MDCTextField(document.getElementById('user'));
const password = new MDCTextField(document.getElementById('password'));
const login = new MDCRipple(document.getElementById('login_button'));

login.listen('click', () => {
    if(sistema.logIn(user.value, password.value)){
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
document.getElementById("registro").addEventListener("click", abrirRegistro);
function abrirRegistro(){
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

      document.querySelectorAll(".registro").forEach((element, index) => {
        element.classList.remove("sample-content--hidden");
   });
}
const registro_user = new MDCTextField(document.getElementById('registro_user'));
const registro_password = new MDCTextField(document.getElementById('registro_password'));
const registro_verificar_password = new MDCTextField(document.getElementById('verificar_password'));
const registro_email = new MDCTextField(document.getElementById('registro_email'));


let boton_registro=new MDCRipple(document.getElementById("register_button"));

boton_registro.listen('click', () => {
    if(registro_password.value==registro_verificar_password.value){
        let usuario = sistema.findUser(registro_user.value);
        if(!usuario){ 
            let user = new Usuario(registro_user.value,registro_password.value,0,false);
            sistema.agregarUsuario(user);
            alert("Usuario agregado exitosamente");
            alert(sistema.findUser(registro_user.value));
        }else{
            alert("Un usuario con ese username ya existe")
        }
    }else{
        alert("La contraseña ingresada no coincide")
    }

});


//Top Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const marketplace = new MDCRipple(document.getElementById('marketplace_button'));
const perfil = new MDCRipple(document.getElementById('profile_button'));

perfil.listen('click', () => {
    
        document.querySelectorAll(".content").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
          });

          document.querySelectorAll(".perfilPrinc").forEach((element, index) => {
            element.classList.remove("sample-content--hidden");
       });
       document.getElementById('caja-perfilPrinc').prepend(document.getElementById('banner-principal'));

    user.value="";
    password.value="";
})

//Boton marketplace trae de vuelta el login
marketplace.listen('click', () => {
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".login").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
})



//Pestaña Principal Perfil

const searchP = new MDCTextField(document.getElementById('search_P'));
const selectP = new MDCSelect(document.getElementById('filtro_lib'));
const logout = new MDCRipple(document.getElementById('logout_button'))
const tabBar = new MDCTabBar(document.getElementById('tab_perfil'));


logout.listen('click', () => {
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".login").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
})

selectP.listen('MDCSelect:change', () => {
    //alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

tabBar.listen('MDCTabBar:activated', ()=> {
    let tab0 = document.getElementById('lib_btn');
    let tab1 = document.getElementById('fav_btn');
    let tab2 = document.getElementById('wallet_btn');
    let tab3 = document.getElementById('info_btn');
    let tab4 = document.getElementById('vender_btn');
    if(tab0.ariaSelected == "true"){
    alert('entro 0');
    } else if(tab1.ariaSelected  == "true"){
        
    } else if(tab2.ariaSelected  == "true"){
        ventanaWallet();
    } else if(tab3.ariaSelected  == "true"){
        alert('entro 3');
    } else {
        alert('entro 4');
    }
});

function ventanaWallet(){
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".wallet").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
    document.getElementById('caja-wallet').prepend(document.getElementById('banner-principal'));
    document.getElementById('contenido_wallet').prepend(document.getElementById(document.getElementById('tab_perfil')));

}

