function getFahrenheitFromCelsius(celsius){
   return (celsius * (9 / 5)) + 32;
}

function getCelsiusFromFahrenheit(fahrenheit){
   return (fahrenheit - 32) * (5 / 9);
}
let fahrenheit = 100, celcius = 50;

console.log("farenheit to Celcius:", getFahrenheitFromCelsius(celcius));
console.log("celcius to ferenheit:", getCelsiusFromFahrenheit(fahrenheit));
