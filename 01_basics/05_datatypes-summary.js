/*
There are 2 types of data types primitive and non primitive(refernce type), its devided into how we store and 
retrieve data from backend
*/

//********Primitive data type = 7 category     call by value*/
/*
String, Number, Boolean, null, undefined, symbol, BigInt
*/

//********Non Primitive data type = 3 category     call by Reference*/
/*
Arrays, Objects, Functions
*/

/**
 * Js is dynamic or static
 */

const id= Symbol('123')
const anotherId = Symbol('123')
//console.log(id=== anotherId) //false

const heros=["Shaktiman","naagraj","doga"]
let myObj ={
    name: "prachi",
    age:22,
}

const myFunction= function(){
console.log("Hello world")
}
//the typeof operator in js
//https://www.google.com/search?q=the+typeof+operator+in+javascript&oq=the+typeof+oper&gs_lcrp=EgZjaHJvbWUqCAgCEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCggEEAAYChgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDc0MTVqMGo3qAIIsAIB8QVCleFpymVtX_EFQpXhacplbV8&sourceid=chrome&ie=UTF-8



//+++++++++++++++++++++++++++++++++++++++
//stack (Primitve), Heap(Non-Primitive)
let myYoutubeName ="Prachi Shrivatastava";
let anotherName= myYoutubeName;
anothername="Chai aur Code";

// console.log(myYoutubeName);//prachi shrivastava
// console.log(anotherName);//chai  aur code

let userOne ={ 
    email: "user@google.com",
upi: "user@ybl", }

let userTwo = userOne;
userTwo.email ="ps@google.com"
console.log(userOne)
console.log(userTwo)