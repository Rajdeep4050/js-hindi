const arr = ["golang" , "cpp" , "javascript", "py"]
arr.forEach(element => {
    // console.log(element);
});


arr.forEach( (ele , ind , arr) => {
    // console.log(ele,ind,arr[ind][0]);
});


const coding = [
    {
        lang : "javascript",
        end : "js"
    },
    {
        lang : "python",
        end : "py"
    },
    {
        lang : "C++",
        end : "cpp"
    },
]

// coding.forEach(item => {
//     console.log(item);
// });

coding.forEach(item => {
    console.log(item.end , item.lang);
});