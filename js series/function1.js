//   FUNCTIONS

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("Q");
}
// sayMyName()             // THIS IS HOW TO WRITE AND RUN A FUNCTION


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);              
// }

function addTwoNumbers(number1, number2){
    let Result = number1 + number2              // THIS IS HOW TO ADD TWO NUMBERS AND
    return Result                               // RETURN ITS ANSWER.
}

const Result =  addTwoNumbers(3, 9)
// console.log("Result : " ,Result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("ENTER A USERNAME");
    //     return
    // }
    // return `${username} JUST LOGGED IN`

    // OR 


    if(!username){
        console.log("ENTER A USERNAME");
        return
    }
    return `${username} JUST LOGGED IN`
}

console.log(loginUserMessage());
