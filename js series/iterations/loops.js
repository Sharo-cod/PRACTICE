// for LOOP

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5 ) {
//         console.log('5 is the best number');
//     }
//     console.log(element);
// } 




// for (let i = 1; i <= 10; i++) {
// // console.log(`outer loop value : ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         // console.log(`INNER LOOP VALUE : ${j} AND INNER LOOP ${i}`);    // it will repeat 10 times and then outerloop and then 10 times and so on :)
//         console.log(i + '*' + j + ' = ' + i*j);
               
//     }
    
// }



// let myArray = [ "flash" , "batman" , "superman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }



// BREAK AND CONTINUE

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("DETECTED 5 =========================");
//         break                                                               // BREAK VALUE CAN STOP THE SERIES
//     }
//     console.log(`VALUE OF I IS ${index}`);
    
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("DETECTED 5 =========================");
        continue
    }
    console.log(`VALUE OF I IS ${index}`);
    
    
}