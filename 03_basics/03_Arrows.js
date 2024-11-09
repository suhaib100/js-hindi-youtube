const user = {
    username: "mohd suhsib khan",
    price : 249 ,
    welcomeMessage : function(){
        console.log(`${this.username} welocme to the website`);
        console.log(this);
    }

}


// user.welcomeMessage();
// user.username = "sahil khan";
// user.welcomeMessage();


const chai = function(){
    let username = "suhaib";
    console.log(this.username);
}

// chai();



// const add = (n1 , n2) => {
//     return n1 + n2;
// }


// const add = (n1 , n2) => (n1 + n2);

const add = (n1 , n2) => ({username : "suhaib"});

console.log(add(3 , 4));