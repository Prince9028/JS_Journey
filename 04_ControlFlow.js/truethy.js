const useremail = []

if(useremail){
    console.log("got user email");
}
else{
    console.log("plz provide email");
}
// falsy values

// false
// 0,-0
// ""
// null
// undefined
// NaN,BigInt

// truethy values
// "0"
// 'false',"", [],{},function(){},new Date(),-1,1,BigInt(1)

if (useremail.length===0) {
    console.log("array is emty");
    
}
const objectemty = {}

if (Object.keys(objectemty).length===0){
    console.log("object is emty");
}

// nullish coalescing operator (??): null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 30 ?? 20      // first non nullish value
console.log(val1);


// ternary operator
// Condition ? value if true : value if false

const iceprice = 300
  iceprice <= 100 ? console.log("i will buy icecream") : console.log("i will not buy icecream");
