// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};

// Función que convierte de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    return valueInYen;
};

// Función que convierte de yenes a libras esterlinas
const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / 156.5) * 0.87;
    return valueInPound;
};

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
};

// Solo un registro en consola para nosotros
console.log(sum(7, 3));

// Exportamos las funciones para usarlas en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };