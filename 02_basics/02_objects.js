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
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof mysmbol) //
// console.log(JsUser[mysmbol])

//Object.freeze(JsUser)// to freeze the changes
//console.log(JsUser)


JsUser.greeting = function(){
   console.log(`Hello JS User, ${this.name}`);
}

//console.log(JsUser.greeting());//undefined


//_________________objects_________________________________
 //const tinderUser = new Object()
 const tinderUser = { }
 tinderUser.id="123abc"
 tinderUser.name ="Sammy"
 tinderUser.isLoggedIn = false
 //console.log(tinderUser)

 const regularUser ={
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudary"

        }
    }
 }

 //console.log(regularUser.fullname.userfullname)


 