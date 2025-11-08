//Immediately invoked function expressions//(IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

//()()-> first is function and second is execute
//global scope ke pollution ko htane ke liye iife use krte h  but we have to end this by using semicolon

// unnamed iife
( () =>{
    console.log(`db connected 2`)
})();

//named iife
((name) => {
    console.log(`db connected ${name}`);
})('hitesh')