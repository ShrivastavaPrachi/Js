 const myArr= [0,1,2,3,4,5]
// const myHeros=["shaktiman","nagaraj"]

// const myArr2= new Array(1,2,3,4)
// console.log(myArr[2])

//Array Menthod
// myArr.push(6)
// myArr.push(7)// add value on last
// myArr.pop()// not need to give value it will remove the last array from array
// myArr.unshift(9); // it will add 9 on starting (loads on computers)
// myArr.shift()// remove starting array
// console.log(myArr.includes(9))// true/false
// console.log(myArr.indexOf(9))// if its not in array it will give -1 always
// console.log(myArr)

// const arr2= myArr.join()// it will change the datatype to string
// console.log(myArr) //[]
// console.log(arr2)//normal comma seperated
// console.log(typeof arr2) //  string

// //slice, splice
// console.log("A",myArr)
// const myn1 =myArr.slice(1,3)// it will not include 3
// console.log(myn1);
// console.log("B",myArr)
// const myn3=myArr.splice(1,3)// it will not include ranges and in array those values will be vanish
// console.log("c",myArr);
// console.log(myn3)





// Extra in arrays
const marvel_heros=["Thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros); // array ke ander array
//console.log(marvel_heros[3][1])// array ke ander array fetch


//const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros)

const all_heros=[...marvel_heros, ...dc_heros]
//console.log(all_heros)

const another_array=[1,2,3[1,2,3[1,2,3]]]
const real_array =another_array.flat(Infinity)
console.log(real_array)

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2.score3))

