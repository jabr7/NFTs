/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';
import {MDCTabBar} from '@material/tab-bar';

import init from '../../dominio/init.mjs';
import Usuario from '../../dominio/userClass.mjs';

const sistema = init();

sistema.logIn('dummy', 'dummy');

// Marketplace
const cartas = sistema.getCartas();
document.getElementById('NFT1').src = sistema.getRandomCard().getPath();
document.getElementById('NFT2').src = sistema.getRandomCard().getPath();
document.getElementById('NFT3').src = sistema.getRandomCard().getPath();
document.getElementById('NFT4').src = sistema.getRandomCard().getPath();


// Creacion de la lista NFT y filtros

/** Funcion que recibe el array de cartas, el nombre de la lista a cargar y el tipo de lista
 * siendo 0 la lista de compra general, 1 si es para vender las cartas y 2 si es para favoritos
 * a partir del modo cambia lo que muestra
 * @param {Object} carta
 * @param {String} nombreLista
 * @param {Number} modo
 */
function mostrarCarta(carta, nombreLista, modo) {
  const listaInterna = document.getElementById(nombreLista);

  const divCarta = document.createElement('div');
  divCarta.className='mdc-card';
  listaInterna.appendChild(divCarta);

  const divPrimaryAction = document.createElement('div');
  divPrimaryAction.className='mdc-card__primary-action';
  divCarta.appendChild(divPrimaryAction);

  const divMediaCard = document.createElement('div');
  divMediaCard.className='my-card__media mdc-card__media mdc-card__media--16-9 ';
  divPrimaryAction.appendChild(divMediaCard);

  const link = document.createElement('a');
  divMediaCard.appendChild(link);

  const img = document.createElement('img');
  img.className='mdc-image-list__image';
  img.src=carta.getPath();
  link.appendChild(img);

  const divRipple = document.createElement('div');
  divRipple.className='mdc-card__ripple';
  divMediaCard.appendChild(divRipple);

  const divCardActions = document.createElement('div');
  divCardActions.className='mdc-card__actions';
  divCarta.appendChild(divCardActions);
  //
  const divFullBleed = document.createElement('div');
  divFullBleed.className='mdc-card__actions mdc-card__actions--full-bleed';
  divFullBleed.data=carta.getId();
  divCardActions.appendChild(divFullBleed);

  divFullBleed.onclick=function() {
    // Descomentar siguiente linea para provocar error #94
    // if(modo!=2)
    if (modo==0) {
      // CODIGO PARA DAR LIKE
      if (!sistema.getCurrentUser().getIdFavoritas().includes(carta.getId())) {
        sistema.getCurrentUser().addFavorita(divFullBleed.data);
        alert('Agregado a favoritos correctamente');

        carta.likeCard();


        // Debo actualizar ambas listas (market y perfil) por que no se de donde puede venir
        // el like o dislike
        const listaInterna = document.getElementById('NFT_lista_interna');
        listaInterna.innerHTML='';
        cartas.forEach((element) => {
          mostrarCarta(element, 'NFT_lista_interna', 0);
        });

        const listaInternaPerfil = document.getElementById('NFT_Lib_interna');
        listaInternaPerfil.innerHTML='';
        sistema.getCurrentUser().getCartasFavoritas(sistema.getCartas()).forEach((element) => {
          mostrarCarta(element, 'NFT_Lib_interna', 1);
        });
      } else {
        alert('Este NFT ya tiene tu like!');
      }
      // Quitar clausula de el if debajo para reproducir error #64
    } else if (modo==2) {
      // CODIGO PARA QUITAR LIKE
      sistema.getCurrentUser().removeFavorita(divFullBleed.data);

      carta.unlikeCard();

      alert('Quitado de favoritos correctamente');

      const listaInterna = document.getElementById('NFT_Favoritos_interna');
      listaInterna.innerHTML='';
      sistema.getCurrentUser().getCartasFavoritas(sistema.getCartas()).forEach((element) => {
        mostrarCarta(element, 'NFT_Favoritos_interna', 1);
      });
      const listaInterna2 = document.getElementById('NFT_lista_interna');
      listaInterna2.innerHTML='';
      cartas.forEach((element) => {
        mostrarCarta(element, 'NFT_lista_interna', 0);
      });
    }
  };


  const linkButton = document.createElement('a');
  linkButton.className='mdc-button mdc-card__action mdc-card__action--button';
  linkButton.data=carta.getId();
  divFullBleed.appendChild(linkButton);

  const divButtonRiple = document.createElement('div');
  divButtonRiple.className='mdc-button__ripple';
  linkButton.appendChild(divButtonRiple);

  const buttonLabel = document.createElement('span');
  buttonLabel.className='mdc-button__label';
  buttonLabel.innerHTML= carta.getNombre();
  linkButton.appendChild(buttonLabel);

  const arrowIcon = document.createElement('i');
  arrowIcon.className='material-icons mdc-button__icon link_carta';
  arrowIcon.ariaHidden=true;

  // Icono corazon
  if (sistema.getCurrentUser().getIdFavoritas().includes(carta.getId())) {
    arrowIcon.innerHTML='favorite';
  } else {
    arrowIcon.innerHTML='favorite_border';
  }
  linkButton.appendChild(arrowIcon);


  const numberOfLikes = document.createElement('span');
  numberOfLikes.innerHTML=carta.getLikes();
  linkButton.appendChild(numberOfLikes);


  if (modo!=2) {
    const divFullBleed2 = document.createElement('div');
    divFullBleed2.className='mdc-card__actions mdc-card__actions--full-bleed';
    divCardActions.appendChild(divFullBleed2);


    const linkButton2 = document.createElement('a');
    linkButton2.className='mdc-button mdc-card__action mdc-card__action--button';
    divFullBleed2.appendChild(linkButton2);

    const divButtonRiple2 = document.createElement('div');
    divButtonRiple2.className='mdc-button__ripple';
    linkButton2.appendChild(divButtonRiple2);

    const buttonLabel2 = document.createElement('span');
    buttonLabel2.className='mdc-button__label';
    linkButton2.appendChild(buttonLabel2);

    if (modo!=2) {
      // El var es necesario por que es utilizado debajo
      // eslint-disable-next-line no-var
      var buttonComprar2=document.createElement('button');
      buttonComprar2.className='mdc-button mdc-button--raised comprar_NFT';
      buttonComprar2.data=carta.getId();
      buttonLabel2.appendChild(buttonComprar2);

      buttonComprar2.onclick=function() {
        if (modo==0) {
          //  Codigo de la compra
          if (sistema.compraCarta(buttonComprar2.data, sistema.getCurrentUser())) {
            const listaInterna = document.getElementById('NFT_lista_interna');
            listaInterna.innerHTML='';
            cartas.forEach((element) => {
              mostrarCarta(element, 'NFT_lista_interna', 0);
            });
            alert('Se ha realizado la compra exitosamente!');
            textSaldo.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';
            textSaldoPerfil.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';
          } else {
            alert('Saldo insuficiente');
          }
        } else if (modo==1) {
          //  Codigo de la venta
          sistema.venderCarta(buttonComprar2.data, sistema.getCurrentUser());
          const listaInterna = document.getElementById('NFT_Lib_interna');
          listaInterna.innerHTML='';
          sistema.getCurrentUser().getCartas().forEach((element) => {
            mostrarCarta(element, 'NFT_Lib_interna', 1);
          });

          const listaInterna2= document.getElementById('NFT_lista_interna');
          listaInterna2.innerHTML='';
          cartas.forEach((element) => {
            mostrarCarta(element, 'NFT_lista_interna', 0);
          });

          alert('Se ha realizado la venta correctamente');
          textSaldo.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';
          textSaldoPerfil.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';
        }
      };
    }

    if (modo==0) {
      const buttonLabel3 = document.createElement('span');
      buttonLabel3.className='mdc-button__label';
      buttonLabel3.innerHTML='Buy: '+carta.getPrecio()+'$';
      buttonComprar2.appendChild(buttonLabel3);
    } else if (modo==1) {
      const buttonLabel3 = document.createElement('span');
      buttonLabel3.className='mdc-button__label';
      buttonLabel3.innerHTML='Sell: '+carta.getPrecio()+'$';
      buttonComprar2.appendChild(buttonLabel3);
    }
  }
}


//  Iniciaizacion de lista NFTs
cartas.forEach((element) => {
  mostrarCarta(element, 'NFT_lista_interna', 0);
});


//  Filtros, buscador y saldo de marketplace
const search = new MDCTextField(document.getElementById('search'));
const select = new MDCSelect(document.querySelector('.mdc-select'));
const botonBuscar = new MDCRipple(document.getElementById('aplicar_filtros'));
const textSaldo = document.getElementById('saldo_marketplace');

textSaldo.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';

botonBuscar.listen('click', () =>{
  if (!search.value=='') {
    const array = sistema.buscarPorNombre(search.value.toLowerCase(), sistema.getCartas());
    const listaInterna = document.getElementById('NFT_lista_interna');
    listaInterna.innerHTML='';
    array.forEach((element) => {
      mostrarCarta(element, 'NFT_lista_interna', 0);
    });
  } else {
    cartas.forEach((element) => {
      mostrarCarta(element, 'NFT_lista_interna', 0);
    });
  }
});


select.listen('MDCSelect:change', () => {
  const listaInterna = document.getElementById('NFT_lista_interna');
  listaInterna.innerHTML='';
  if (select.selectedIndex==1) {
    sistema.orderByLike(sistema.getCartas());
  }
  if (select.selectedIndex==2) {
    sistema.orderByPrecioMayor(sistema.getCartas());
  }
  if (select.selectedIndex==3) {
    sistema.orderByPrecioMenor(sistema.getCartas());
  }
  if (select.selectedIndex==4) {
    sistema.orderByFecha(sistema.getCartas());
  }

  sistema.getCartas().forEach((element) => {
    mostrarCarta(element, 'NFT_lista_interna', 0);
  });
});


// Login Box
const user = new MDCTextField(document.getElementById('user'));
const password = new MDCTextField(document.getElementById('password'));
const login = new MDCRipple(document.getElementById('login_button'));

login.listen('click', () => {
  if (user.value.toLowerCase()!='dummy'&& sistema.logIn(user.value, password.value)) {
    const listaInterna = document.getElementById('NFT_lista_interna');
    listaInterna.innerHTML='';
    cartas.forEach((element) => {
      mostrarCarta(element, 'NFT_lista_interna', 0);
    });
    document.querySelectorAll('.content').forEach((element, _index) => {
      element.classList.add('sample-content--hidden');
    });

    document.querySelectorAll('.marketplace').forEach((element, _index) => {
      element.classList.remove('sample-content--hidden');
    });

    textSaldo.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';
    textSaldoPerfil.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';
    const cajaMarketplace = document.getElementById('caja-marketplace');
    cajaMarketplace.prepend(document.getElementById('banner-principal'));
  } else {
    alert('Error el usuario o contraseña estan incorrectos, o el usuario no existe');
  }

  user.value='';
  password.value='';
});

// Register Box
const volver = new MDCRipple(document.getElementById('arrow_registro_img'));
volver.listen('click', () => {
  document.querySelectorAll('.content').forEach((element, _index) => {
    element.classList.add('sample-content--hidden');
  });

  document.querySelectorAll('.login').forEach((element, _index) => {
    element.classList.remove('sample-content--hidden');
  });
});


document.getElementById('registro').addEventListener('click', abrirRegistro);
/** Funcion para abrir el registro y ocultar el contenido en pantalla */
function abrirRegistro() {
  document.querySelectorAll('.content').forEach((element, _index) => {
    element.classList.add('sample-content--hidden');
  });
  document.querySelectorAll('.registro').forEach((element, _index) => {
    element.classList.remove('sample-content--hidden');
  });
}


const registroUser = new MDCTextField(document.getElementById('registro_user'));
const registroPassword = new MDCTextField(document.getElementById('registro_password'));
const registroVerificarPassword = new MDCTextField(document.getElementById('verificar_password'));


const botonRegistro=new MDCRipple(document.getElementById('register_button'));

botonRegistro.listen('click', () => {
  if (registroPassword.value==registroVerificarPassword.value) {
    const usuario = sistema.findUser(registroUser.value);
    if (!usuario) {
      const user = new Usuario(registroUser.value, registroPassword.value, 0, false);
      sistema.agregarUsuario(user);
      alert('Usuario agregado exitosamente');
      document.querySelectorAll('.content').forEach((element, _index) => {
        element.classList.add('sample-content--hidden');
      });
      document.querySelectorAll('.login').forEach((element, _index) => {
        element.classList.remove('sample-content--hidden');
      });
    } else {
      alert('Un usuario con ese username ya existe');
    }
  } else {
    alert('La contraseña ingresada no coincide');
  }
});

// Forgotten Password
const volverForgotten = new MDCRipple(document.getElementById('arrow_registro_img'));
volverForgotten.listen('click', () => {
  document.querySelectorAll('.content').forEach((element, _index) => {
    element.classList.add('sample-content--hidden');
  });

  document.querySelectorAll('.login').forEach((element, _index) => {
    element.classList.remove('sample-content--hidden');
  });
});

document.getElementById('olvide').addEventListener('click', abrirForgotten);
/** Funcion para abrir la ventana de contraseña olvidada y ocultar el contenido actual de la pagina */
function abrirForgotten() {
  document.querySelectorAll('.content').forEach((element, _index) => {
    element.classList.add('sample-content--hidden');
  });

  document.querySelectorAll('.forgotten').forEach((element, _index) => {
    element.classList.remove('sample-content--hidden');
  });
}

const forgottenUser = new MDCTextField(document.getElementById('forgotten_user'));
const forgottenPassword = new MDCTextField(document.getElementById('forgotten_password'));
const forgottenVerificarPassword = new MDCTextField(document.getElementById('forgotten_verificar_password'));
const botonForgotten=new MDCRipple(document.getElementById('boton_forgotten'));


botonForgotten.listen('click', () => {
  if (forgottenPassword.value==forgottenVerificarPassword.value) {
    const usuario = sistema.findUser(forgottenUser.value);
    if (usuario) {
      usuario.setPassword(forgottenPassword.value);

      alert('Contraseña actualizada exitosamente');
      forgottenUser.value='';
      forgottenPassword.value='';
      forgottenVerificarPassword.value='';
      document.querySelectorAll('.content').forEach((element, _index) => {
        element.classList.add('sample-content--hidden');
      });
      document.querySelectorAll('.login').forEach((element, _index) => {
        element.classList.remove('sample-content--hidden');
      });
    } else {
      alert('Ese usuario no existe');
    }
  } else {
    alert('La contraseña ingresada no coincide');
  }
});


// Top Bar
const marketplace = new MDCRipple(document.getElementById('marketplace_button'));
const perfil = new MDCRipple(document.getElementById('profile_button'));

const tab0 = document.getElementById('lib_btn');
const tab1 = document.getElementById('fav_btn');
const tab2 = document.getElementById('wallet_btn');

perfil.listen('click', () => {
  if (sistema.getCurrentUser().getNombre()!='dummy') {
    const listaInterna = document.getElementById('NFT_Lib_interna');
    listaInterna.innerHTML='';
    sistema.getCurrentUser().getCartas().forEach((element) => {
      mostrarCarta(element, 'NFT_Lib_interna', 1);
    });
    document.querySelectorAll('.content').forEach((element, _index) => {
      element.classList.add('sample-content--hidden');
    });

    document.querySelectorAll('.perfilPrinc').forEach((element, _index) => {
      element.classList.remove('sample-content--hidden');
    });
    document.getElementById('contenido_perfilPrinc').prepend(document.getElementById('tab_perfil'));
    document.getElementById('caja-perfilPrinc').prepend(document.getElementById('banner-principal'));
    tabBar.activateTab(0);
  } else {
    alert('Debe logearse con usuario y contraseña');
  }
});

// Boton marketplace abre marketplace
marketplace.listen('click', () => {
  if (sistema.getCurrentUser().getNombre()=='dummy') {
    alert('Debe logearse con usuario y contraseña');
  } else {
    document.querySelectorAll('.content').forEach((element, _index) => {
      element.classList.add('sample-content--hidden');
    });

    document.querySelectorAll('.marketplace').forEach((element, _index) => {
      element.classList.remove('sample-content--hidden');
    });
    document.getElementById('caja-marketplace').prepend(document.getElementById('banner-principal'));
  }
});


// Pestaña Principal Perfil

const logout = new MDCRipple(document.getElementById('logout_button'));
const tabBar = new MDCTabBar(document.getElementById('tab_perfil'));


const searchP = new MDCTextField(document.getElementById('search_perfil'));
const selectP = new MDCSelect(document.getElementById('combobox_perfil'));
const botonBuscarP = new MDCRipple(document.getElementById('aplicar_filtros_perfil'));

textSaldo.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';


botonBuscarP.listen('click', () =>{
  if (!searchP.value=='') {
    // FALTA CAMBIAR QUE BUSQUE EN EL ARRAY DE COMPRADOS POR EL USUARIO Y NO DEL GENERAL
    const array = sistema.buscarPorNombre(searchP.value.toLowerCase(), sistema.getCurrentUser().getCartas( ));
    const listaInterna = document.getElementById('NFT_Lib_interna');
    listaInterna.innerHTML='';
    array.forEach((element) => {
      mostrarCarta(element, 'NFT_Lib_interna', 1);
    });
  } else {
    const listaInterna = document.getElementById('NFT_Lib_interna');
    listaInterna.innerHTML='';

    sistema.getCurrentUser().getCartas().forEach((element) => {
      mostrarCarta(element, 'NFT_Lib_interna', 1);
    });
  }
});


selectP.listen('MDCSelect:change', () => {
  const listaInterna = document.getElementById('NFT_Lib_interna');
  listaInterna.innerHTML='';
  if (selectP.selectedIndex==1) {
    sistema.orderByLike(sistema.getCurrentUser().getCartas());
  }
  if (selectP.selectedIndex==2) {
    sistema.orderByPrecioMayor(sistema.getCurrentUser().getCartas());
  }
  if (selectP.selectedIndex==3) {
    sistema.orderByPrecioMenor(sistema.getCurrentUser().getCartas());
  }
  if (selectP.selectedIndex==4) {
    sistema.orderByFecha(sistema.getCurrentUser().getCartas());
  }

  sistema.getCurrentUser().getCartas().forEach((element) => {
    mostrarCarta(element, 'NFT_Lib_interna', 1);
  });
});


tabBar.listen('MDCTabBar:activated', ()=> {
  // Dependiendo de cual este activo, despliegara el contenido correspondiente
  if (tab0.ariaSelected == 'true') {
    // Ventana mis NFTs
    document.querySelectorAll('.content').forEach((element, _index) => {
      element.classList.add('sample-content--hidden');
    });
    document.querySelectorAll('.perfilPrinc').forEach((element, _index) => {
      element.classList.remove('sample-content--hidden');
    });
    document.getElementById('contenido_perfilPrinc').prepend(document.getElementById('tab_perfil'));
    document.getElementById('caja-perfilPrinc').prepend(document.getElementById('banner-principal'));
    const listaInterna = document.getElementById('NFT_Lib_interna');
    listaInterna.innerHTML='';
    sistema.getCurrentUser().getCartas().forEach((element) => {
      mostrarCarta(element, 'NFT_Lib_interna', 1);
    });
  } else if (tab1.ariaSelected == 'true') {
    // Ventana Favoritos
    document.querySelectorAll('.content').forEach((element, _index) => {
      element.classList.add('sample-content--hidden');
    });

    document.querySelectorAll('.favoritos').forEach((element, _index) => {
      element.classList.remove('sample-content--hidden');
    });
    document.getElementById('contenido_favoritos').prepend(document.getElementById('tab_perfil'));
    document.getElementById('caja_favoritos').prepend(document.getElementById('banner-principal'));

    // Re carga
    const listaInterna = document.getElementById('NFT_Favoritos_interna');
    listaInterna.innerHTML='';
    sistema.getCurrentUser().getCartasFavoritas(sistema.getCartas()).forEach((element) => {
      mostrarCarta(element, 'NFT_Favoritos_interna', 2);
    });
  } else if (tab2.ariaSelected == 'true') {
    ventanaWallet();
  } else {
    // Ventana Informacion del usuario
    document.querySelectorAll('.content').forEach((element, _index) => {
      element.classList.add('sample-content--hidden');
    });

    document.querySelectorAll('.informacion').forEach((element, _index) => {
      element.classList.remove('sample-content--hidden');
    });

    document.getElementById('contenido_informacion').prepend(document.getElementById('tab_perfil'));
    document.getElementById('caja_informacion').prepend(document.getElementById('banner-principal'));

    const nombre = new MDCTextField(document.getElementById('modificar_user'));
    const password = new MDCTextField(document.getElementById('modificar_password'));
    const botonActualizarInfo = new MDCRipple(document.getElementById('actualizar_button'));

    nombre.value=sistema.getCurrentUser().getNombre();

    botonActualizarInfo.listen('click', () => {
      if (nombre.value==sistema.getCurrentUser().getNombre()) {
        alert('El nombre ingresado a actualizar ya es el original');
        nombre.value=sistema.getCurrentUser().getNombre();
      } else if (nombre.value!='') {
        const usuario = sistema.findUser(nombre.value);
        if (!usuario) {
          sistema.getCurrentUser().setNombre(nombre.value);
          alert('Nombre cambiado correctamente');
        } else {
          alert('Ya existe un usuario con ese nombre!');
          nombre.value=sistema.getCurrentUser().getNombre();
        }
      }
      if (password.value==sistema.getCurrentUser().getPassword()) {
        alert('La password ingresada a actualizar ya es la original');
        password.value='';
      } else if (password.value!='') {
        sistema.getCurrentUser().setPassword(password.value);
        alert('Contraseña cambiada correctamente');
      }
    });
  }
});


logout.listen('click', () => {
  document.querySelectorAll('.content').forEach((element, _index) => {
    element.classList.add('sample-content--hidden');
  });

  sistema.logOut();

  document.querySelectorAll('.login').forEach((element, _index) => {
    element.classList.remove('sample-content--hidden');
  });
});

const textSaldoPerfil = document.getElementById('saldo_perfil');

textSaldoPerfil.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';

/** Funcion que crea la ventana de wallet, actualiza el saldo de la billetera y  */
function ventanaWallet() {
  const textSaldo = document.getElementById('saldo_wallet');

  textSaldo.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';

  document.querySelectorAll('.content').forEach((element, _index) => {
    element.classList.add('sample-content--hidden');
  });

  document.querySelectorAll('.wallet').forEach((element, _index) => {
    element.classList.remove('sample-content--hidden');
  });
  document.getElementById('contenido_wallet').prepend(document.getElementById('tab_perfil'));
  document.getElementById('caja-wallet').prepend(document.getElementById('banner-principal'));
}

const cant = new MDCTextField(document.getElementById('agg_monto'));
const monto = new MDCRipple(document.getElementById('monto_button'));

monto.listen('click', () => {
  if (!(isNaN(cant.value)) && cant.value != '') {
    sistema.getCurrentUser().agregarSaldo(parseInt(cant.value));

    // Recarga texto saldo de wallet
    const textSaldo = document.getElementById('saldo_wallet');
    textSaldo.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';

    alert('El monto: '+cant.value+' ah sido agregado correctamente a su wallet');

    // Recarga texto saldo de mi libreria
    textSaldoPerfil.innerHTML='Saldo: '+sistema.getCurrentUser().getSaldo()+'$';
    cant.value='';
  } else {
    alert('El monto ingresado no es un número');
  }
});

