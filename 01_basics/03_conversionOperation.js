let score =undefined
console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // it will convert in number (score = 33)
// console.log(valueInNumber); // NaN ->not in number (score ="33abc")
// console.log(valueInNumber); //0 (score =null)
// console.log(valueInNumber); //Nan (score =undefined)
// console.log(valueInNumber); //1 (score =true)

let isLoggedIn =""
let BooleanIsLoggedIn= Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn)
/*
 1= true; 0= false
 " " = false
 "hitesh" = true
*/
someNumber=33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)