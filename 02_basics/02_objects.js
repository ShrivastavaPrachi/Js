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


 const obj1 = {1: "a" , 2: "b"}
 const obj2 = {3: "a" , 4: "b"}
 const obj3 = { 5: "a" , 6: "b"}

 //const obj4 = {obj1,, obj2}
 //const obj4 = Object.assign({}, obj1, obj2, obj3)
//  console.log({...obj1, ...obj2, ...obj3})
//  console.log(obj3);

// console.log(Object.keys(tinderUser));// keys
// console.log(Object.values(tinderUser))// values
// console.log(Object.entries(tinderUser)) //both
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))// check wether it has that or now




//__________________________de structure___________________

const course ={ 
    coursename: "js  in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
//course.courseInstructor// lengthy way
 const{courseInstructor: instructure} =course
 console.log(instructure)//  short and easy way
   


