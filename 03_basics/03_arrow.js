// const addTwo = function(num1, num2){
//     return num1+num2
// }
// console.log(addTwo(3,4))

//explicit return..... return lagana pad rha h 
// const addTwo = (num1, num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

//implicit return .....return lagane ki jarurat nai h
// const addTwo = (num1, num2) =>(num1+num2)   
// console.log(addTwo(3,4))

//object ko implicitly return krna h to bracket m daalke hi curly bracket m daalna 
const greet = () =>({username : "Rajdeep"})   
console.log(greet())