/* 1. primitives :
7 types : string , nuumber , boolean , null  , undefined , symbol , bigint



2. non primitives datatypes (reference types) : 
arrays , objects , functions, 



JavaScript is a dynamically typed language, which means that data types 
of variables are determined by the value they hold at runtime and can change 
throughout the program as we assign different values to them.


ava is a statically-typed language.

This means that in Java, the type of a variable is determined at compile time, 
and you must declare the type of variables explicitly before you can use them. For example:
int age = 25;       // age is declared as an integer
String name = "John"; // name is declared as a String
Once a variable is assigned a type (e.g., int, String), it cannot change to another type. 
If you try to assign a value of a different type, it will result in a compile-time error.

*/

const score = 100;
const scoreValue  = 100.3;
const isLoggedin = true;
const outsideTemp = null;
let userEmail;
// console.log(userEmail);

const id = Symbol('123');
const id1 = Symbol('123');
console.log(id ==id1);


// 1 . arrays :
const heroes = ["suuhaib", "samad", "sahhil"];
console.log(heroes);

// 2 . objects:

let myObj = {
    name : "suhaib",
    number: 123

}

console.log(myObj);

const  fun = function(){
    console.log("hello suhaiib");
}

fun();
// console.log(fun);  




// stack (primitives) , Heap(non primitives)