let myDate = new Date()
console.log(myDate) //2023-11-24T10:39:02.312Z
console.log("\n")
console.log("tostring method " +myDate.toString())      //Fri Nov 24 2023 10:39:02 GMT+0000 (Coordinated Universal Time)
console.log("\n")
console.log("tolocalestring method " +myDate.toLocaleString())   //11/24/2023, 10:39:02 AM
console.log("\n")
console.log("tolocaledatestring method " +myDate.toLocaleDateString())   //11/24/2023
console.log("\n")
console.log("to datestring method "+myDate.toDateString())  //Fri Nov 24 2023
console.log("\n")
console.log("to JSON method " +myDate.toJSON())    //2023-11-24T10:39:02.312Z

console.log(typeof myDate)