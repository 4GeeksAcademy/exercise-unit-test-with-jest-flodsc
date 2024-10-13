// Importar las funciones del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para la función sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para fromEuroToDollar
test('One euro should be 1.07 dollars', function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Prueba para fromDollarToYen
test('10 dollars should be 1462.62 yen', function() {
    const yen = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected, 2); // Usamos toBeCloseTo para números decimales
});

// Prueba para fromYenToPound
test('1000 yen should be 5.56 pounds', function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2); // Verificación con dos decimales
});
