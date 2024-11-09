
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("innder a value is : " , a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "suhaib";
    function two(){
        const website = "google";
        console.log(username);

    }
    // console.log(website);

    // two();
}

// one();



// if(true){
//     const username  = "suuhaib";
//     if(username === "suuhaib"){
//         const website = " google";
//         console.log(username + website);
//     }
    // console.log(website);
    // console.log(username);
// }
// console.log(username);

console.log( add2no(5));

function add2no(num){
    return num + 1;
}





const result = function addtwonuumber(no){
    return no + 1;
}

console.log(result(10));