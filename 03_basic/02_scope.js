
// var b = 300
let a = 200

{} //scope
if(true){
    let a = 20
    var b = 30
    const c = 40

    console.log("Inner:",a);     //scope ki inner value ko print karva ne ke liye
    
}


    


 console.log(a);
 console.log(b);
// console.log(c);


function one() {
    const  username = "Prince"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
// one()

if(true){
    const username = "prince"
    if(username==="prince"){         //scope ki inner part ko define kar sakhte hai loop ke inner me
        const website = "youtube"
        console.log(username+website);
            console.log(website);

    }
    
    console.log(username);
}
// console.log(username);
  

//******************************************************8 */

console.log(addone(10))

function addone (num){
    return num+1

}

console.log(addtwo(5))

const addtwo = function(num){
    return num+2

}
