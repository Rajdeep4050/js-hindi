//Immediately Invoked Function Expression

(function greet(){
    //named IIFE mtlb function ka naam hai
    console.log(`Rajdeep here`);
})();   // semicolon lagana jaruri h end krne k liye

// ()()
// definition execution

//IIFE mtlb jo function immediately execute ho jaye aur globalscope k pollution se prblm hoti h bahut baar
// like variable declaration etc . toh uss pollution ko hatane k liye IIFE ka use kiya

((name) =>{
    //un named IIFE mtlb func ka naam nai h arrow func h
    console.log(`This is implicit function ${name}`);
})("Rajdeep")