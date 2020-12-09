
const WEATHER = prompt('¿Cómo está el clima?')
let opciona = 'soleado'

if(WEATHER === 'soleado' ) {
    console.log('oh!, que buen clima para estar en la playa')
} else if (WEATHER === 'lluvioso') {
    console.log('oh!, que buen clima para dormir')
}else if (WEATHER === 'nevando') {
    console.log('oh!, que buen clima para quedarse en casa')
}else if (WEATHER === 'nublado') {
    console.log('oh!, que buen clima para tomar cafe')

} else{
    const WEATHER_DESCRIPTION = prompt('¿Describe tu dia?')
    console.log(WEATHER_DESCRIPTION)
}