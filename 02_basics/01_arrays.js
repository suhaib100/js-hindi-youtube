const myArrays = [0,1,112,3,4,5];
const myHeroes = ["sab", "axs", "vfg"];
// console.log(myArrays);
// console.log(myHeroes[2]);

const a = new Array(1,2,3,2,1);
// console.log(a);

myArrays.push(6);
myArrays.push(7);
myArrays.pop();
// console.log(myArrays);


// console.log(myArrays.includes(40));
// console.log(myArrays.indexOf(112));

const n = myArrays.join();
// console.log( typeof n);
// console.log(typeof myArrays);

const n2 = myArrays.slice(1,3);
console.log(n2);

const n3 = myArrays.splice(1,3);
console.log(n3);

console.log("A " , myArrays);