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
console.log(loginUserMessage("hitesh"))
