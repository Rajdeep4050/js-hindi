//const user = new Object()     this is singleton object
//const user = {}       this is non singleton object

const user = {}
user.id = "12abc"
user.name = "Rajdeep"
user.age = 22
user.isLoggedIn = false
// console.log(user)

const regularUser = {
    name:"Rajdeep",
    fullname : {
        firstName : "Rajdeep",
        lastName : "Chaurasia"
    }
}
// console.log(regularUser.fullname.firstName)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

//method 1
// const final = Object.assign({} , obj1,obj2,obj3)
// console.log(final)

//method 2
const final = {...obj1 , ...obj2, ...obj3}
console.log(final)

console.log(Object.keys(user))  //[ 'id', 'name', 'age', 'isLoggenIn' ]     datatype array
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty("isLoggedIn"))      //this is case sensitive
