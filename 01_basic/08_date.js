let myname = new Date()
//console.log(myname.toString());
//console.log(myname.toJSON());
//console.log(myname.toLocaleString());

console.log(typeof myname);
let newdate = new  Date(2025,4,12)

//console.log(newdate.toDateString());
//console.log(newdate.toLocaleString());

let mytimestemp = Date.now()
console.log(mytimestemp);
console.log(newdate.getTime()); // mili sec me 

console.log(Math.floor(Date.now()/100000));  


let otherdate = new Date()
    console.log(otherdate);
    console.log(otherdate.getMinutes());
    
    `${otherdate.getDay()}  and the time`

    otherdate.toLocaleString('default',{
        weekday : "long",
    })