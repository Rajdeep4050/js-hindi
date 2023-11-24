const name = "Rajdeep"
const age = 22

console.log(`My name is ${name.toUpperCase()} and my age is ${age}`)
console.log(name.indexOf('J'))      //-1
console.log(name.indexOf('j'))      //2

console.log(name.substring(0,3))    // Raj char at index 3 will not be included
console.log(name.slice(-5 , 5))     //(start , end+1)
console.log(name.slice(-5, 4))

console.log('   Rajdeep    '.trimEnd())

console.log('RajdeepChaurasia__4050'.replace('__' , 'ok'))

console.log(name.includes('okokokok'))

const newGame = 'Rajdeep-ok-game'
console.log(newGame.split('-'))

const words = newGame.split('-');
console.log(words[1]);