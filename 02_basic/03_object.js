//singleleton
//object.create

//objecct literals

const mysym = Symbol("key1")

const jsuser = {
    name: "prince",
    "full name" : "prince patel",
    [ mysym] : "mykey1",
    age:18,
    email:"prince@gmail.com",
    location:"botad",
}
console.log(jsuser.email);
console.log(jsuser["email"])
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

jsuser.email = "prjocekn2",
//  Object.freeze(jsuser)

//  console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello js user");
}


    jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}` )  // this keyword is use entity
    

    
}
// console.log(jsuser.greeting())
// console.log(jsuser.greetingtwo());

//************************************************************************************************** */

// const tinderuser = new Object() // single ten object
const tinderuser = {}               // non single ten object

tinderuser.id = "123abc"
tinderuser.name = "sam"
tinderuser.age = 12 

 console.log(tinderuser);

const regularuser = {
    email : "prkocn@jbcui",
    fullname :{
        userfullname:{
            firstname:"price",
            lastname:"patel"
        }
    }
}
// console.log(regularuser.fullname.userfullname);
const obj1 = {1:"a",2:"b"} 
const obj2 = {3:"a",4:"b"} 

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2} //imp
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "iwlkowqk@mld",
    },
     {
        id : 2,
        email : "sdd2wiwlkowqk@mld",
    },
     {
        id : 3,
        email : "feiwlkowqk@mld",
    },
]

users[1].email
console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('age'));  //property hai ki nhi check karne ke liye


const course = {
    coursename: " js in hindi ",
    price : "12323",
    author :"prince patel",
}

//  course.author

const {author} = course
console.log(author);

// {
//     "name": "prince",
//     "age" : 13,
//     "coursename": "free"
// }




