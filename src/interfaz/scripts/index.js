import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const user = new MDCTextField(document.getElementById('user'));
const password = new MDCTextField(document.getElementById('password'));
const login = new MDCRipple(document.getElementById('login_button'));


login.listen('click', () => {
    console.log();    
})


