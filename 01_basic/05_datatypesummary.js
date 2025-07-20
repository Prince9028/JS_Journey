 // primitive
 //  7 type :  string ,number,boolearn,null,undefined,symbol,bigint

 const score =100
 const scorevalue = 100.3

 const isloggedin = false
 const outsidetemp = null
 let useremail;

 const id = Symbol('123')
 const anotherid = Symbol('123')
 // reference (non primitiv)
 //  ---> array,objects,function

 const name  = ["rajdip","prince","yash"];
   let myobj={
    name : "prince",
    age : 17
 }


 const myfunction = function(){
   console.log("Hello Prince");
   
 }
 //console.log(typeof scorevalue);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory ===> stack(primitive) ,heap(non primitive)--> origian value ka refarence 
 
let myname = "prince patel"

let anothername = "hello Prince"

console.log(anothername);

let userone = {
  email: "user@gmail.com",
    id: "978987@ybl"
}

let usertwo = userone 

usertwo.email = "princepatel@gmail.com"

console.log(usertwo);
console.log(usertwo.email)


