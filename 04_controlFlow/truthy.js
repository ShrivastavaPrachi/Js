//const userEmail = "@prachi" // user got email
//const userEmail = ""// user dont have email
const userEmail = [] // user got email
if(userEmail){
    console.log("user got email")
}
else{
    console.log("user dont have email");
}

//checking arraay is empty
// if(userEmail.length ===0){
//     console.log("Array is empty")
// }


// checking object is empty
const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//falsy values
//false, 0, -0, BigInt, 0n, "", null, undefined, NaN 

//everything except this is truthy
// true, [], "0", 'false', " ", function(){} -> empty  function  is always truthy

//false ==0 //true
//false = ''//true
//0==''//true

