const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
   //console.log(`${key} shortcut of ${myObject[key]}`)
    }

    //forin loop doesnt work in array bcoaz its only shows keys eich is 0,1,2,3,4,5
    //for maps- maps are not iterable  so its will not give anything



    //++++++++++++++For each loop(important)++++++++++++++++++
     const coding =["js",,"ruby","java","python","cpp"]
    // coding.forEach( function (item){
    //     console.log(item)
    // })
  

    //Arrow fun
    // coding.forEach((item)=> {
    //     console.log(item)
    // })

    //we can also give function in for each loop
    function printme(item){
        console.log(item);
    }
    //coding.forEach(printme)


    // foreach has many access not only on item
    coding.forEach((item,index,arr) => {
        console.log(item, index, arr)
    })
    

