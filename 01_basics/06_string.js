const name="hitesh"
const repoCount =50
//console.log(name+ repoCount);
console.log(`Hello my name ${name} and repoCount ${repoCount}`) // modern way


const gameName = new String ('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString=gameName.substring(0,4);// can give negative value
console.log(newString);
const anotherString =gameName.slice(-8,4);// we can give negative value also
console.log(anotherString)
const ns1="    hitesh    ";
console.log(ns1.trim());// remove spaces
const ns2 = "https://hitesh%20 chaudary";
console.log(ns2.replace('%20','_'));
console.log(ns2.includes('hite'));
console.log(gameName.split('-'));
