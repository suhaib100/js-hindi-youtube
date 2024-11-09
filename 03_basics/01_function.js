// function add2Num(p1,  p2){
//     console.log(p1 + p2);
// }

function add2Num(p1,  p2){
// let result  = p1 + p2;
// return result;

return p1 + p2;
}
// add2Num(30 , 40);

// const resuult  = add2Num(30 , 40);
// console.log("result is : ", resuult);


function isUserzlloggedIn(username = "sam"){
    // if(username == undefined)
      if(!username)  {
        // console.log("username cannot be null or empty");
        return;
    }
    return ` ${username} just logged in `;
}

// console.log(isUserzlloggedIn("suuhaib"));


function calculateCartPrice(...num){
    return num;
}

// console.log(calculateCartPrice(200, 500 , 100));

const user = {
    username : "mohd suuhaib khan",
    prices : 200
}

function handleuserData(anyobject){
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price} and age is ${anyobject.age}` );

}
// handleuserData(user)


// handleuserData({
//     username : "sahil",
//     price : 199,
//     age : 20

// })



const myArray = [100 , 200 , 300];
function returnSecondValue(anyArray){
return  anyArray[2];
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([2,1,2,3]));