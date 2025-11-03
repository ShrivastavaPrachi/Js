
var c=30;

if(true){
    let a=10;
const b=20;
 var c=3;
}
// console.log(a)// not defined
// console.timeLog(b)//not defined
// console.log(c)// run its the error in var keyword it will run all scope

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function one(){
    const username ="hitesh"

    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
one()