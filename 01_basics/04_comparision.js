//console.log("2" >1) //true
//console.log("02">1) //true - it automatically covert strin to number(it is not comparing datatype)

//console.log(null>0)// false
//console.log(null==0)//false
//console.log(null>=0)//true ->it will not behave correct
/**
 * The reason is that an equality check == and comparision > < >= <= work differntly
 * Comparision convert null to number, treating it as 0.
 * Thats why(3) null >= 0 is true and  (1) null >0 is false
 */


// for undefined it will always gives false

//****strict check */
//console.log("2"==2)//true
//console.log("2"===2)//false check the datatype also