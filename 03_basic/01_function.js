function sayname(){
    console.log("p");
        console.log("p");
        console.log("r");
        console.log("i");
        console.log("n");
        console.log("c");
}
// sayname()

// function addtwonumber(num1,num2){
//    console.log( num1 + num2)

// }
function addtwonumber(num1,num2){
    let result = num1+ num2
    return result 
//    console.log( num1 + num2)

}
const result =addtwonumber(3,4)
// console.log("result",result);

function login(username="prince"){

    if(username===undefined){
        console.log("plese enter vaild name");
        return

    }
    return `${username} just  login`

}
// console.log(login());


function calculatorcartprice(val1,val2,...num1){   //val1=200;
    return num1
}
// console.log(calculatorcartprice(200,400,500));\


const user  = {
    username : "prince",
    price :999,
}

function handobject(anyobject){
    console.log(`name is ${anyobject.username}  and  price is ${anyobject.price}`)
}

// handobject(user)
handobject({
    username : "ram",
    price : 999,
})

const mynewarray  = [200,300,400,500]

function returnsecondvalue(getarray){
    return getarray[2]
}

console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,300,400,500]));
