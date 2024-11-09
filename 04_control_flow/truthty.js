const userEmail = [];
if(userEmail){
    console.log("got user email");
} else {
    console.log("dont have user email");
}


// falsy values:

// false , 0 ,-0 , BigInt  , "" , null , undefined , NaN


// truth values : 
// "0 " , "false" , " " , [] , {} , function(){}

if(userEmail.length === 0){
console.log("Array is empty1 ");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("array is empty 2");
}

let val1 ;
val1 = 5 ?? 10;
console.log(val1);


const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("less than 80 ") : console.log("more thna 80");;