let score =undefined
//console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // it will convert in number (score = 33)
// console.log(valueInNumber); // NaN ->not in number (score ="33abc")
// console.log(valueInNumber); //0 (score =null)
// console.log(valueInNumber); //Nan (score =undefined)
// console.log(valueInNumber); //1 (score =true)

let isLoggedIn =""
let BooleanIsLoggedIn= Boolean(isLoggedIn);
//console.log(BooleanIsLoggedIn)
/*
 1= true; 0= false
 " " = false
 "hitesh" = true
*/
someNumber=33
let stringNumber = String(someNumber)
//console.log(typeof stringNumber);

//******************Operations******************

let value=3
let negValue = -value;
//console.log(negValue)

//console.log(2**3); //power

let str1="Hello"
let str2=" prachi"
let str3 =str1 +str2
//console.log(str3) //hello prachi

//console.log("2"+ 1+1); //211 it will check first one default
//console.log(1+1+"3") //23


//console.log(+true) // it will see 1
//console.log(true+)// through error
//console.log(+"")// gives 0

let num1, num2, num3
num1 = num2 =num3 =2+2
//console.table([num1,num2,num3]);// will assign 2 for all

// postfix and prefix check in mdn document
let gameCounter =100;
++gameCounter;
//console.log(gameCounter) //gives 101