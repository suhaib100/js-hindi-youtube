
const myzym =  Symbol("key");

const newObject  = {
    "full name": "suhaib",
    age: 12,
    address: "delhi",
    isLoggedIn : false,
    lastLogInDays: ["monday", "tue", "wed"],
    [myzym] : "suhaib"

}


// console.log(newObject["lastLogInDays"]);
// console.log(newObject.address);

// console.log(newObject["full name"] );
// console.log(newObject[myzym]);

newObject.address = "noida";
// Object.freeze(newObject);
newObject.address = "gurgaon";
// console.log(newObject);


newObject.greeting =  function() {
    console.log("suuhaib");
}



newObject.greeting2 =  function() {
    console.log(`hello suhaib user ${this["full name"]}`);
}

console.log(newObject.greeting);
console.log(newObject.greeting2());
