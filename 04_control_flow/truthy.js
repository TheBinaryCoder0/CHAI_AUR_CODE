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



// HOW TO CHECK WHETHER AN ARRAY IS EMPTY OR NOT

const username = []
if(username.length===0){
    console.log("Array is empty");
}

// HOW TO CHECK IF AN OBJECT IS EMPTY OR NOT
// Object.keys(object) RETURNS AN ARRAY

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

console.log(false==0); // => true
console.log(false==''); // => true
console.log(0==''); // => true

// LOGICAL OPERATORS

// && => AGAR SAARI CONDITIONS true HONGI TAB HI EXECUTE HOGA
// || => AGAR KOI BHI EK CONDITION true HOGI TOH EXECUTE HO JAYEGA



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // => 5
// val1 = null ?? 10 // => 10
// val1 = undefined ?? 15 // => 15
// val1 = null ?? 10 ?? 15 // JOH BHI FIRST VALUE MIL JAYEGI WOH ASSIGN HO JAATI HAI
val1 = null ?? undefined // THE `??` (NULLISH COALESCING) OPERATOR CHECKS IF THE VALUE ON THE LEFT-HAND SIDE IS `NULL` OR `UNDEFINED`. 
                         // IF IT IS, THE OPERATOR RETURNS THE VALUE ON THE RIGHT-HAND SIDE.
console.log(val1); // => undefined
let val2 = 0 ?? 10; // val2 WILL BE 0 BECAUSE 0 IS NOT NULL OR UNDEFINED 
console.log(val2);
let val3 = null ?? undefined ?? 200;
console.log(val3);



// TERNIARY OPERATOR

// condition ? true : false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");