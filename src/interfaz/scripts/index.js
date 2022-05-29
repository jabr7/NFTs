import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';

import init from '../../dominio/init.mjs';

var sistema = init();
console.log(sistema.getUsers());


//Marketplace
let cartas = sistema.getCartas();
document.getElementById('NFT1').src = cartas[0].getPath();
document.getElementById('NFT2').src = cartas[1].getPath();
document.getElementById('NFT3').src = cartas[2].getPath();
document.getElementById('NFT4').src = cartas[3].getPath();


//Creacion de la lista NFT


/*
 <ul class="mdc-image-list my-image-list">


  <div class="mdc-card">
            <div class="mdc-card__primary-action">
              <div class="my-card__media mdc-card__media mdc-card__media--16-9 ">
                <!--Valor a cambiar para el action principal del nft-->
                <a href="https://www.google.com/m?client=ms-android-samsung-gs-rev1&source=android-home"><img class="mdc-image-list__image" src="./imagenes/2 - f1LkIrz.gif"></a>
              </div>
              <div class="mdc-card__ripple"></div>
            </div>
            <div class="mdc-card__actions">
              <div class="mdc-card__actions mdc-card__actions--full-bleed">
                <a class="mdc-button mdc-card__action mdc-card__action--button" href="#">
                  <div class="mdc-button__ripple"></div>
                  <span class="mdc-button__label">Nombre del NFT</span>
                  <i class="material-icons mdc-button__icon" aria-hidden="true">arrow_forward</i>
                </a>
              </div>
            </div>
          </div>
*/ 
cartas.forEach(element => {
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
    link.href="https://www.google.com/m?client=ms-android-samsung-gs-rev1&source=android-home";
    divMediaCard.appendChild(link);
    
    var img = document.createElement("img");
    img.className="mdc-image-list__image";
    img.src=element.getPath();
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
    link_button.href="#";
    divFullBleed.appendChild(link_button);
    
    var divButtonRiple = document.createElement("div");
    divButtonRiple.className="mdc-button__ripple";
    link_button.appendChild(divButtonRiple);
    
    var button_label = document.createElement("span");
    button_label.className="mdc-button__label"
    button_label.innerHTML=element.getNombre();
    link_button.appendChild(button_label);
    
    var arrowIcon = document.createElement("i");
    arrowIcon.className="material-icons mdc-button__icon";
    arrowIcon.ariaHidden=true;
    arrowIcon.innerHTML="arrow_forward";
    link_button.appendChild(arrowIcon);

});




//Login Box
const user = new MDCTextField(document.getElementById('user'));
const password = new MDCTextField(document.getElementById('password'));
const login = new MDCRipple(document.getElementById('login_button'));


//Top Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const marketplace = new MDCRipple(document.getElementById('marketplace_button'));
const perfil = new MDCRipple(document.getElementById('profile_button'));

//Elimina el contenido de la pagina
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

//Trae de vuelta el login
marketplace.listen('click', () => {
    document.querySelectorAll(".content").forEach((element, index) => {
        element.classList.add("sample-content--hidden");
      });

    document.querySelectorAll(".login").forEach((element, index) => {
         element.classList.remove("sample-content--hidden");
    });
})

//MARKETPLACE
const search = new MDCTextField(document.getElementById('search'));


const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
    //alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

//Pestaña Principal Perfil

const searchP = new MDCTextField(document.getElementById('searchP'));


const selectP = new MDCSelect(document.getElementById('filtro_lib'));

selectP.listen('MDCSelect:change', () => {
    //alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

