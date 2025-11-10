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

// nullish coalescing operator (??) :null undefined

let val1;
//val1 = 5??10  //5
//val1 = null?? 10 //10
//val1= undefined ?? 15 //15
val1 = null ?? 10 ??20 // gives 10 as its  first value
//console.log(val1);



//Terniary Operator
// condition ? true :false
const iceTea = 100
iceTea >= 80 ? console.log("more") :console.log("less");