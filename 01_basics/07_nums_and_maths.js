const score =400;
//console.log(score);//400

const balance = new Number(400);
//console.log(balance);//[number: 400]

//console.log(balance.toString().length);//convert it in leth
//console.log(balance.toFixed(2))// point value

const number=123.4567
//console.log(number.toPrecision(4));//round of

const hundreds =10000;
//console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++maths++++++++++++++++++++++


// console.log(Math)//Object [math] {}
// console.log(Math.abs(-4));// negative to positiove
// console.log(Math.round(67.768))//68
// console.log(Math.ceil(4.2))//5 upper value
// console.log(Math.floor(4.9))//4 lower value
// console.log(Math.min(2,3,4,5,6,))//2
console.log(Math.random())// value always lies btween 0 and 1
console.log(Math.random()*10)//  digit shift (to avoid 0)
console.log(Math.floor(Math.random()*10)+1)// for every condition avoid 0

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)// good formula
