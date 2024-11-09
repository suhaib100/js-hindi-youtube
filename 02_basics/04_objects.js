const n = {};
n.id = 100;
n.name = "suuhaib";
n.address = "delhi"
// console.log(n);

const n1 = {
    name: "suhaib",
    age: {
        address: {
            street: "asc",
            district:"kgf"

        }
    }
}

// console.log(n1.age.address.street);


const obj1 = {1:  "a", 2: "b"};
const obj2 = {3:  "c", 4: "d"};
// const ob3 = {obj1 , obj2}
// const ob4 = Object.assign(obj1 , obj2) 
// console.log(ob4);

const obj3 = {...obj1 , ...obj2};
// console.log(obj3);

const arrObj = [
    {
        name: " suhaib",
        email: "suuhaib@2001"
    },
    {
        name: " samad",
        email: "suuhaib@2001"
    },
    {
        name: " suhaib",
        email: "suuhaib@2001"
    }
]
// console.log(arrObj);
// console.log( arrObj[2].name);
// // console.log(n);
// console.log(Object.keys(n));
// console.log(Object.values(n));
// console.log(Object.entries(n));



const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "suhaib"

}

const {courseInstructor : instruuctor} = course;
// console.log(courseInstructor);
console.log(instruuctor);