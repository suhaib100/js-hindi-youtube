const name = "suhaib ";
const repoCount = 50;
// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo couunt is ${repoCount}`);

const  gameName = new String('hitesh');

console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newName = gameName.substring(0,4);
console.log(newName);

const newString  = "            suhaib        ";
console.log(newString.trim());


const uurl = "http://suhaib.com/suhaib%20khan";
console.log(uurl.replace('%20', '-'));
console.log(uurl.includes('suhaib'));
console.log(gameName.split('-'));