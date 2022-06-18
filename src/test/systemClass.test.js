import init from './init.js';
let system = undefined;
beforeEach(() =>{
    system = init();
}) 
afterEach(() => {

    system = undefined;
})

describe("Pruebas Usuario", () => {
    test('Consultar usuarios', () => {
      expect(system.getUsers()).toBe(system.usuarios);
    });
});
