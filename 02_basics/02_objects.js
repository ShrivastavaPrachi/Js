const { jsx } = require("react/jsx-runtime")

//singleton
Object.create //constructor method

const mysmbol = Symbol("key1")
//object literals
const JsUser ={
    name: "Hitesh",
    "full name": "Hitesh Chaudary",
    [mysmbol]:"mykey1",// to represent it as symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof mysmbol);
