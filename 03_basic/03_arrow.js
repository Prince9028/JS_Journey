

const userone = {
    username : "prince",
    cost : 999,

    welcomemessage:function(){
        console.log(`${this.userone} welcome to website`);   //this is iuse to corent message run
      console.log(this);
         
    }
}

// userone.welcomemessage()
// userone.username = "jem"
// userone.welcomemessage()
console.log(this);


// function chai(){
//     let username = "prince"
//     console.log(this.username);            // object are use not function use
// }
// chai()

const chai = () => {
    let username = "prince"
     console.log(this);
}
chai()

// const addtwo = (num1,num2) =>  
{
// return num1+num2              // caurli bress use then return keyword use
}
// const addtwo = (num1,num2) =>  (num1+num2)
// return num1+num2
const addtwo = (num1,num2) =>  ({username : "prince"})

console.log(addtwo(3,4 ));
