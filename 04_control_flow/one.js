// if

const isUserloggedIn = true

if(isUserloggedIn){
    console.log("User is logged in!");
}

// <, >, <=, >=, ==, !=, ===, !==

if(2=="2"){ // ISILIYE TYPECHECKING KE LIYE === USE KARTE HAI
    console.log("Executed");
}

const score = 200
if(score>100){
    const power ="fly" // ISKA SCOPE KEWAL if MEIN HAI
    var magic = "burn" // var KA SCOPE GLOBAL HOTA HAI
    console.log(`User power:${power}`);
}

console.log(`magic:${magic}`);

const balance = 1000
if(balance>500) console.log(`balance:${balance}`), // ISKO KEHTE HAI IMPLICIT SCOPE MAAN LIYA HAI KI SCOPE HAI
console.log("balance 2");  // MULTIPLE LINES BHI LIKH SAKTE HAI , (COMMA) LAGA KE
                           // SCOPE SAME HI REHTA HAI
                           // BUT DON'T WRITE LIKE THIS

// MULTIPLE CONDITIONALS

if(balance<500){
    console.log("less than 500");
} else if(balance<750){
    console.log("less than 750");
} else if(balance<900){
    console.log("less than 900");
} else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in!");
}

