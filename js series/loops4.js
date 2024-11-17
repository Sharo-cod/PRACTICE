const coding = ["js" , "rb",  "py" , "java" ,"cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     // console.log(item);
    
// }
// coding.forEach( (item , index ,arr) => {
//     console.log(item , index ,arr);
    
// })


const mycoding = [ {
    languageName : "javascript",
    languageFileName : "Js"
},
{
    languageName: "java" ,
    languageFileName: "java"
},
{
    languageName: "python" ,
    languageFileName: "py"
}
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})