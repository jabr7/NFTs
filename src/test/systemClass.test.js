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
        let user2 = new Usuario("Test 1","4321",0,false);
        system.agregarUsuario(user2);
        expect(system.getUsers()).not.toContain(user2);
      }); 
});

