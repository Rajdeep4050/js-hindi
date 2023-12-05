// const user = {
//     username : "Rajdeep",
//     age : 18,

//     greet : function(){
//         console.log(`${this.username}, welcome here`)

//     }
// }

// user.greet()
// user.username = "Sam"
// user.greet()


function name(){
    let username = "Rajdeep"
    console.log(this.username)   //yeh function m work nai krta h sirf objects m
}
name()  // undefined 
// because this . vala sirf objects m chalta h function m nai

