import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';


//Login Box
const user = new MDCTextField(document.getElementById('user'));
const password = new MDCTextField(document.getElementById('password'));
const login = new MDCRipple(document.getElementById('login_button'));


//Top Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const marketplace = new MDCRipple(document.getElementById('marketplace_button'));

//Elimina el contenido de la pagina
login.listen('click', () => {
    if(user.value==="Joaquin" && password.value === "1234"){
        document.querySelectorAll(".content").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
          });
    }else{
        alert("Error");
    }

    user.value="";
    password.value="";
})

//Trae de vuelta el login
marketplace.listen('click', () => {
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

