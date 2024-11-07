const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["suuperman", "flash", "batman"];
// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const n = marvel_heroes.concat(dc_heroes);
// console.log(n);

const n1 = [... marvel_heroes, ...dc_heroes];
// console.log(n1);

const n3 = [1,2,3,[4,3,2],[1,[2,3,4,[4,3,1]]]];
const n4 = n3.flat(Infinity);
console.log(n4);

console.log(Array.isArray("suhaib"));
console.log(Array.from("suhaib"));

let n5 = 100;
let n6 = 200;
let n7 = 300;
console.log(Array.of(n5,n6,n7));