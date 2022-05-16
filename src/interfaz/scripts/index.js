import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const textField = new MDCTextField(document.getElementById('user'));
const textField2 = new MDCTextField(document.getElementById('password'));
const buttonRipple = new MDCRipple(document.getElementById('login_button'));