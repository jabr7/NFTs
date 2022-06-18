import Carta from './cardClass.js';
import init from './init.js';
import Usuario from './userClass.js';
let system = undefined;
beforeEach(() =>{
    system = init();
}) 
afterEach(() => {

    system = undefined;
})

describe("Pruebas Get User", () => {
    test('Test 1', () => {
      expect(system.getUsers()).toBe(system.usuarios);
    });
});

describe("Get random card", () => {
    for (let index = 1; index < 30; index++) {
        test('Test '+index, () => {
            expect(system.getCartas()).toContain(system.getRandomCard());
          });
    }
});

describe("Pruebas Agregar Usuario", () => {
    test('Test Usuario que no existe', () => {
      let user = new Usuario("Test 1","1234",0,true);
      system.agregarUsuario(user);
      expect(system.getUsers()).toContain(user);
    }); 

    test('Test Usuario que ya existe', () => {
        let user = new Usuario("Test 1","1234",0,true);
        let user2 = new Usuario("Test 1","4321",0,false);
        system.agregarUsuario(user);
        system.agregarUsuario(user2);
        expect(system.getUsers()).not.toContain(user2);
      }); 
});

describe("Pruebas Find User", () => {
    test('Test Usuario que no existe', () => {
      expect(system.findUser("noExisto")).toBeNull();
    }); 


    test('Test Usuario que existe', () => {
      let user = new Usuario("Test 1","1234",0,true);
      system.agregarUsuario(user);
      expect(system.findUser(user.nombre)).toBe(user);
    }); 
});

describe("Prueba LogIn", () => {
  test('Login Exitoso', () => {
    let user = new Usuario("Test 1","1234",0,true);
    system.agregarUsuario(user);
    expect(system.logIn("Test 1", "1234")).toBe(true);

  }); 


  test('Login No Exitoso', () => {
    let user = new Usuario("Test 1","1234",0,true);
    system.agregarUsuario(user);
    expect(system.logIn("Test 1", "")).toBe(false);
  }); 
});




describe("Prueba Get Current User", () => {
  test('Test Usuario no logeado', () => {
    let dummy = system.findUser("dummy");
    expect(system.getCurrentUser()).toBe(undefined);
  }); 


  test('Test Usuario no logeado', () => {
    let user = new Usuario("Test 1","1234",0,true);
    system.agregarUsuario(user);
    system.logIn("Test 1", "1234");
    expect(system.getCurrentUser()).toBe(user);
  }); 
});


describe("Agregar Carta", () => {
  test('Agregar una carta', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    system.agregarCarta(carta);
    expect(system.getCarta(carta.id)).toBe(carta);
  }); 
 
});

describe("Get carta", () => {
  test('Carta no existe', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    system.agregarCarta(carta);
    expect(system.getCarta("NoEsUnID")).toBe(undefined);
  }); 

  test('Carta existe', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    system.agregarCarta(carta);
    expect(system.getCarta(carta.id)).toBe(carta);
  }); 
 
});

describe("Get Cartas", () => {
  test('Get cartas', () => {
    expect(system.getCartas()).toBe(system.cartas);
  }); 
 
});

describe("Get index carta", () => {
  test('Carta no existe', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    system.agregarCarta(carta);
    expect(system.getIndexCarta("NoEsUnID")).toBe(-1);
  }); 

  test('Carta existe', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    system.agregarCarta(carta);
    expect(system.getIndexCarta(carta.id)).not.toBe(-1);
  }); 
 
});

describe(" Ordenar por precio Menor", () => {


  test('Ordenar 1', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    let carta2 = new Carta('./test',new Date(),"cartaTest");
    carta.precio = 100;
    carta2.precio = 1000;
    let cartas = [carta2,carta];
    system.orderByPrecioMenor(cartas);
    expect(cartas).toStrictEqual([carta,carta2]);
  }); 
 
  test('Ordenar 2', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    let carta2 = new Carta('./test',new Date(),"cartaTest");
    carta.precio = 100;
    carta2.precio = 1000;
    let cartas = [carta,carta2];
    system.orderByPrecioMenor(cartas);
    expect(cartas).toStrictEqual([carta,carta2]);
  }); 
});

describe(" Ordenar por precio Mayor", () => {


  test('Ordenar 1', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    let carta2 = new Carta('./test',new Date(),"cartaTest");
    carta.precio = 100;
    carta2.precio = 1000;
    let cartas = [carta2,carta];
    system.orderByPrecioMayor(cartas);
    expect(cartas).toStrictEqual([carta2,carta]);
  }); 
 
  test('Ordenar 2', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    let carta2 = new Carta('./test',new Date(),"cartaTest");
    carta.precio = 100;
    carta2.precio = 1000;
    let cartas = [carta,carta2];
    system.orderByPrecioMayor(cartas);
    expect(cartas).toStrictEqual([carta2,carta]);
  }); 
});

describe(" Ordenar por Like", () => {


  test('Ordenar sin likes', () => {
    system.orderByLike(system.getCartas());
    expect(system.cartas).toStrictEqual(system.getCartas());
  }); 
 
  test('Ordenar con like', () => {
    let carta = system.getRandomCard();
    carta.likeCard();
    system.orderByLike(system.getCartas());
    expect(system.getCartas()[0]).toStrictEqual(carta);
  }); 
});


describe(" Ordenar por Fecha", () => {

 
  test('Ordenar por fecha 1', () => {
    let date1 = new Date('1990-09-24');
    let date2 = new Date('2022-09-24');
    let carta = new Carta('./test1',date1,"cartaVieja");
    let carta2 = new Carta('./test',date2,"cartaNueva");
    let cartas = [carta,carta2];
    system.orderByFecha(cartas);

    expect(cartas).toStrictEqual([carta,carta2]);
  }); 
 
  test('Ordenar por fecha 2', () => {
    let date1 = new Date('2022-09-24');
    let date2 = new Date('1990-09-24');
    let carta = new Carta('./test2',date1,"cartaNueva");
    let carta2 = new Carta('./test2',date2,"cartaVieja");
 

    let cartas = [carta,carta2];
    system.orderByFecha(cartas);
   
    expect(cartas).toStrictEqual([carta2,carta]);
  }); 
});

describe(" Buscar por nombre", () => {

 
  test('Nombre existe', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    let carta2 = new Carta('./test',new Date(),"lalal");
    let cartas = [carta, carta2];
    console.log(system.buscarPorNombre("cartaTest",cartas));
    expect(system.buscarPorNombre("cartaTest".toLowerCase(),cartas)).toStrictEqual([carta]);
  }); 

  test('Nombre No existe', () => {
    let carta = new Carta('./test',new Date(),"cartaTest");
    let carta2 = new Carta('./test',new Date(),"lalal");
    let cartas = [carta, carta2];
    expect(system.buscarPorNombre("aowperiasd".toLowerCase(),cartas)).toStrictEqual([]);
  });  

});

describe(" Comprar Carta", () => {

 
  test('Compra con Saldo disponible', () => {
    let carta = system.getRandomCard();
    let usuario = system.getUsers()[0];

    expect(system.compraCarta(carta.id, usuario)).toBe(true);
  }); 

  test('Compra Sin Saldo disponible', () => {
    let carta = system.getRandomCard();
    let usuario = system.getUsers()[0];
    usuario.saldo = 0;
    expect(system.compraCarta(carta.id, usuario)).toBe(false);
  });  

});

describe("Venta carta", () => {

 
  test('Venta 1', () => {
    //compra carta
    let carta = system.getRandomCard();
    let usuario = system.getUsers()[0];
    system.compraCarta(carta.id, usuario);

    expect(usuario.getCartas()).toContain(carta);
    expect(system.getCartas()).not.toContain(carta);
    
    //vender
    system.venderCarta(carta.id, usuario);
    expect(usuario.getCartas()).not.toContain(carta);
    expect(system.getCartas()).toContain(carta);
  }); 
});