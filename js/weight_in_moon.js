let weight_in_earth = prompt('¿Cuál es tu peso en kg?')
let weight_in_moon = (weight_in_earth / 9.81) * 1.622 
console.log(weight_in_moon)



let result = 'Tu peso en la luna es: ' + weight_in_moon + 'kg.'

let resultTwo = `Tu peso en la luna es: ${weight_in_moon} kg`

alert(resultTwo)
