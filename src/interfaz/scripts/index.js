import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';

import init from '../../dominio/init.mjs';

var sistema = init();
console.log(sistema.getUsers());


//Marketplace
sistema.getCartas()[0]
let cartas = sistema.getCartas();
document.getElementById('NFT1').src = cartas[0].getPath();
document.getElementById('NFT2').src = cartas[1].getPath();
document.getElementById('NFT3').src = cartas[2].getPath();
document.getElementById('NFT4').src = cartas[3].getPath();

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

