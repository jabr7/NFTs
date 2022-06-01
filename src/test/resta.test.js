
const resta = require('./resta');


describe("Pruebas resta", () => {
  test('resta 1 - 2 to equal -1', () => {
    expect(resta(1, 2)).toBe(-1);
  });
  
  test('adds 5 - 2 to equal 3', () => {
      expect(resta(5, 2)).toBe(3);
    });

});