// truthy AND falsy VALUES

// truthy MATLAB JAB HAM MAAN LETE HAI KI true VALUE HAI
// falsy MATLAB JAB HAM MAAN LETE HAI KI false VALUE HAI
// JAISE HAMNE userEmail KO true MAAN LIYA HAI


const userEmail = "a@aman.ai"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values:-

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// OTHER THAN THE ABOVE, ALL THE VALUES ARE truthy values
// LIKE 
// "0", 'false', " ", [], {},  function(){} // EMPTY FUNCTION

const username = []
if(username.length===0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

console.log(false==0);
console.log(false=='');
console.log(0=='');

// LOGICAL OPERATORS

// && => AGAR SAARI CONDITIONS true HONGI TAB HI EXECUTE HOGA
// || => AGAR KOI BHI EK CONDITION true HOGI TOH EXECUTE HO JAYEGA

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15 // JOH BHI FIRST VALUE MIL JAYEGI WOH ASSIGN HO JAATI HAI
val1 = null ?? undefined
console.log(val1);

// TERNIARY OPERATOR

// condition ? true : false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");