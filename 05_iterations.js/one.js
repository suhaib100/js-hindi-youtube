for (let i = 0; i <= 10; i++) {
    const element = i;
    if( element == 5){
        // console.log(" 5 is the best number");
    }
    // console.log(element);
}

// console.log(element);


for (let i = 0; i <= 10 ; i++) {
    // console.log(`outer for loop ${i}`);
for (let j = 0; j <=10; j++) {
//  console.log(`inner for loop ${j} and innder loop ${index}`);   
// console.log(i + `*` +  j + ` = ` + i*j);
}    
}


let myArray = ["flash" , "tiger", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue statement:

for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log("5 detected");
continue;
    }
console.log(`value of i is ${index}`);    
}