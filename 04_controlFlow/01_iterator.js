//for
//  for (let index = 0; index < 10; index++) {
//     const element = index; 
//     console.log(element);
    
//  }



//break and continue

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        break;
    }
    console.log(index);
    
}

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        continue;// ek bar print nahi kruga baki kruga
    }
    console.log(index);
    
}

