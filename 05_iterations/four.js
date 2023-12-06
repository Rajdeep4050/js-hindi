const myNums = [1,2,3,4,5,6,7]

// const newNum = myNums.filter(num=>{
//     return num>3
// })
// console.log(newNum);

// const newNum = myNums.filter( num => num>3)
// console.log(newNum);

// const newn = myNums.map(num=> num*10).map(num=>num*12)
// console.log(newn);

const newn = myNums.map(num=> num*10).map(num=>num*12).filter(num=>num>600)
console.log(newn);
