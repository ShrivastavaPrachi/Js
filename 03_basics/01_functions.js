function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("C")
    console.log("H")
    console.log("I")
}
//sayMyName(); // for execution
//  function addTwoNumbers(number1, number2){// parametrs 

//     console.log(number1 +number2)
//  }

function addTwoNumbers(number1, number2){// parametrs 
 let result =(number1 +number2)
 return result
 }

 addTwoNumbers(3, 5)//8 // arguments
  addTwoNumbers(3, "5") // nehave as a srting

   const result = addTwoNumbers(3, 5)
   //console.log(result) // storing value return undefined ????


   function loginUserMessage(username){
    return `${useranme} just logged in`
   }
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){//rest
    return num1  
}
// console.log(calculateCartPrice(200,300,400))// array
// console.log(calculateCartPrice(200,300,400,500))//200,300,900

const user = {
name: "Hitesh",
price: 999
}
 function handelObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
 }
//handelObject(user);


handelObject({
    name: "sam",
    price: 399
})


const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))

