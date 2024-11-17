// FOR OF 

// ["" ,"", ""]
// [{}  ,{} ,{}]

// const Arr = [1 , 2 , 3 , 4 , 5]

// for (const num of Arr) {
//     console.log(num);
    
// }


// const greetings = "HELLOWORLD!"
// for (const greet of greetings) {
//     console.log(`Each Character of greetings is : ${greet}`);
    
// }


// MAPS

const map = new Map()
map.set('PAK' ,'Pakistan')
map.set('USA' ,'United States Of America')
map.set('Fr' ,'France')
console.log(map);

for (const [key , value] of map) {
    console.log(key, ":-" ,value);
}

// const myObj = {
//     game1 : 'NFS',
//     game2 : 'spiderman'
// }
// for (const [key,value] of myObj) {     // WILL NOT EXECUTE
//     console.log(key, ":-" , value);
    
// } 