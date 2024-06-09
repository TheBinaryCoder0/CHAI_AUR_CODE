"use strict"; // TREAT ALL JS CODE AS NEWER VERSION

// alert(3+3) // WE ARE USING NODEJS, NOT BROWSER SO IT WILL NOT WORK
              // alert GIVES A POP-UP IN THE WINDOW WITH THE OUTPUT

/* 
CODE READIBILITY SHOULD BE OUR FIRST CONCERN
*/

console.log(3+3)

console.log("AMAN")

/*
WE CAN WRITE THE ABOVE STATEMENTS LIKE 

console.log(3
    +3  
)

THIS WILL ALSO WORK BECAUSE JAVASCRIPT AVOIDS SPACES AUTOMATICALLY 
BUT DON'T WRITE IT LIKE THIS BECAUSE IT IS NOT EASILY READABLE

*/

/*
DOCUMENTATIONS:-

https://tc39.es/ecma262/

https://developer.mozilla.org/en-US/docs/Web/JavaScript

*/

let name = "AMAN"
let age = 20
let isLoggedIn = false

/*
DATATYPES:-

number => 2 to power 53
bigint => FOR LARGE NUMBERS (USED IN FACEBOOK, REDDIT, STOCK MARKET, ETC WHERE NUMBERS ARE VERY BIG)
string => ""
boolean => true/false
null => standalone value
undefined => value is not assigned
symbol => used to find uniqueness (WE WILL USE IN React.js)

object => 

*/

console.log(typeof null); // null IS AN OBJECT
console.log(typeof undefined) // TYPE OF undefined IS undefined
