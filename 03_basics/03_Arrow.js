const user ={
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to website`) // this means not hardcoded
        //console.log(this)// current context
    }
}
//user.welcomeMessage()// hitesh, welcome to wensite
user.username="sam"
user.welcomeMessage()// prachi, welcome to website
//console.log(this)// empty bcoz its otside globe


//++++++++++++++++++++++++++

// function chai(){
//     let username= "hitesh"
//     console.log(this.username)// undefined we cant use this in functions (we can use only on obj)
// }
// chai()

//+++++++++++++===arrow function++++++++++++
// const chai = () => {
//     let username ="hitesh"
//     console.log(this) // empty
// }
// chai()

// const addTwo =(num1 , num2) =>{
//     return (num1+ num2)
// }
// console.log(addTwo(3,4)) //7

//const addTwo =(num1 , num2) => (num1+ num2)
console.log(addTwo(3,4)) //7

// {} - we have to write return keyword
// () - we not use return keyword

