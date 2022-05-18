import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';


//Login Box
const user = new MDCTextField(document.getElementById('user'));
const password = new MDCTextField(document.getElementById('password'));
const login = new MDCRipple(document.getElementById('login_button'));


//Top Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const marketplace = new MDCRipple(document.getElementById('marketplace_button'));

login.listen('click', () => {
    
    if(user.value==="Joaquin" && password.value === "1234"){
        
        document.querySelectorAll(".login").forEach((element, index) => {
            element.classList.add("sample-content--hidden");
          });
          
         
    }else{
        alert("Error");
    }
})


