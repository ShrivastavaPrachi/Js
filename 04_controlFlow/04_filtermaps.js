//  const coding =["js",,"ruby","java","python","cpp"]
//  const values = coding.forEach((item) => {
//     //console.log(item)

//  })
// console.log(values);// undefined (foreach doesnt returnany value)


// for overcome we use filter
const myNums=[1,2,3,4,5,6,7,8,9,0]
// const newNums = myNums.filter((num) =>  num> 4)
// console.log(newNums);

//same from for each
const newNums =[]
myNums.forEach((num) => {
if(num>4){
    newNums.push(num)
}
})
//console.log(newNums);


//chaining
const myNumers =[1,2,3,4,5,6,7,8,9,0]
const newNum1s =myNumers
               .map((num) => num*10)
               .map((num) =>num+1)
               .filter((num)=>num>=40)
//console.log(newNum1s)



//reduce
const myN=[1,2,3]
const myTotal= myN.reduce(function (acc,currVal){
    console.log(`acc :${acc} and currval: ${currVal}`)
    return acc +currVal;
},0)
console.log(myTotal)
