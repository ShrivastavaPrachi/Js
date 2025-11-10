//while(conditon)

// let index =0;
// while(index <=10){
//     console.log("value of index is "+ index);
//     index = index+2;
// }

// do while - first work then check
//let score =1;//normal run
// 




//++++++++++++++++Array Loops
//for of
const arr =[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

const greeting ="Hello world"
for (const greet of greeting) {
    //console.log(`each char is ${greet}`)
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of america")
map.set('fr',"France")
//console.log(map)

for (const [key, value] of map) { 

    //console.log(key,':-', value);
    
}


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [key,value] of myObject) { //myObject is not iterable
    console.log(key ,':-', value)
}

// forof will not work on objects
