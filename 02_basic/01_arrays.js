
const myarr = [0,1,2,3,4,5,6]
// console.log(myarr[1]);

const myarr2 = new Array(1,2,3,4,5,6)
// console.log(myarr2[2]);

// Array method

myarr.push(8)
myarr.pop()  // last value of remove
console.log(myarr);

// myarr.unshift(9)  // first element come
myarr.shift()

console.log(myarr.includes(9));
console.log(myarr.indexOf(2));

const NewArray = myarr.join()    



console.log( typeof NewArray );

///slice,splice ***************************************************************

console.log("A",myarr);

const my1 = myarr.slice(1,3);
console.log(my1);
console.log("B",myarr);

const my2= myarr.splice(1,3);
console.log("c",myarr);

console.log(my2);




