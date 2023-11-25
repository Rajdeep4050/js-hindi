const mySym = Symbol("Thsi is symbol")

const jsUser  = {
    name:"Rajdeep",
    "full name" : "Rajdeep Chaurasia",
    age:22,
    email : "ok@hmmmm.com",
    // mySym : "symbolkey"  ,   //wrong way to access symbol
    [mySym] : "symbolkey"
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])

// console.log(typeof jsUser.mySym)    //string aayega ans which is wrong way to access symbol

console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

// Object.freeze(jsUser)
jsUser.age = 23
console.log(jsUser.age)     //age change nai hoga coz freeze kiya h 


//function run krne k pehele object ko unfreeze krna padta hai
jsUser.greeting = function(){
    console.log("Hello user ")
}
console.log(jsUser.greeting())

jsUser.greetingtwo = function(){
    console.log(`Hello ${jsUser["full name"]}`)
}
console.log(jsUser.greetingtwo())