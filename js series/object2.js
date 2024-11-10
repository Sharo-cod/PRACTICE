// let tinderUser = new Object()
// OR
let tinderUser = {

tinderUserid : "123abc",
tinderUsername : "SHARIQ ALAM",
tinderUserisLoggedIn : true
}

// console.log(tinderUser);

const regularUser = {
    email : "shariqalam@gmail.com",
    fullName: {
        userFullname : {
            firstName: "Shariq ",
            lastName : "Alam"
        }

    }
}
// console.log(regularUser.fullName.userFullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1 ,...obj2};
// const obj5 = Object.assign({},obj1 , obj2)
console.log(obj3);





// let abc = [1,2,3,4,5,6]
// let def = [7,8,9,10]
//                                               //        :)
// let asj = Object.assign({} ,abc, def)
// console.log(asj);

console.log(tinderUser);
console.log("---------------------------------------------------------------------");

console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));       // MAKE ALL THE KEY VALUE AN ARRAY
console.log(tinderUser.hasOwnProperty('tinderUserisLoggedIn'));  // TO CHECK TH VALUE
console.log(tinderUser.hasOwnProperty('tindsdfsdfdsfsedIn'));  


