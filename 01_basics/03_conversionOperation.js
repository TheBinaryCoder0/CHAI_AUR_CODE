let score1  = 33

console.log(typeof(score1));
console.log(typeof score1);

console.log();

let score2="33"
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

console.log();

let score3 = "33abc"
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2); // NOTE:- NaN is still considered a type of number in JavaScript
console.log(valueInNumber2);  // IT GIVES NaN (NOT A NUMBER)

console.log();

/* 
TOH AGAR HAM STRING TO CONVERT KARTE HAI NUMBER MEIN TOH WOH HO JAYEGA LEKIN USPE RELY MATT KARNA
KYOKI WOH GALAT OUTPUT BHI DE SAKTA HAI 
JAISE KI UPAR WAALE CONVERSION MEIN HUA HAI

JAVASCRIPT MEIN THODE SE ISSUES HAI
STRICT CHECK NAHI HAI
ISILIYE HAM TYPESCRIPT USE KARTE HAI
LEKIN YEH JAVASCRIPT KA KOI BUG NAHI HAI
*/


let score4 = null
let valueInNumber3 = Number(score4)  // IT CONVERTS THE VALUE OF NULL TO 0
console.log(typeof valueInNumber3); // IT GIVES number AS OUTPUT
console.log(valueInNumber3); 

console.log();

let score5 = undefined
let valueInNumber4 = Number(score5)  
console.log(typeof valueInNumber4); // IT GIVES number AS OUTPUT
console.log(valueInNumber4);   // IT GIVES NaN AS OUTPUT

console.log();

let score6 = true  // BOOLEAN VALUES
let valueInNumber5 = Number(score6)  // IT GIVES 1 AS OUTPUT IF THE VALUE IS true AND IF IT IS false THEN IT WILL GIVE 0
console.log(typeof valueInNumber5);
console.log(valueInNumber5); 

console.log();

let score7 = "AMAN"  // STRING CANNOT BE CONVERTED INTO A NUMBER
let valueInNumber6 = Number(score7)  
console.log(typeof valueInNumber6); // IT GIVES number AS OUTPUT
console.log(valueInNumber6); // IT GIVES NaN AS OUTPUT

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn1 = 1
let isLoggedIn2 = 0
let isLoggedIn3 = "" // EMPTY STRING
let isLoggedIn4 = "AMAN" // STRING
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(booleanIsLoggedIn1);
console.log(booleanIsLoggedIn2);
console.log(booleanIsLoggedIn3);
console.log(booleanIsLoggedIn4);

// 1 => true; 0 => false
// "" => false IN CASE OF EMPTY STRING
// "AMAN" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************************  OPERATIONS  ********************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);  // 2 RAISED TO THE POWER 3
console.log(2/3);
console.log(2%3);

let str1 = "Hello "
let str2 = "Aman"
let str3= str1+str2
console.log(str3);

// PROBLEMS OCCUR IN THE BELOW CONDITIONS

console.log( "1" + 2 ); // => 12
console.log( 1 + "2" );  // => 12
console.log( "1" + 2 + 2 ); // => 122
console.log( 1 + 2 + "2" ); // => 32
console.log( 1 + 2 + 3 + "92" ); // => 692
console.log( "921" + 5 + 17 ); // => 921517

/*
JOH DATATYPE PEHLE AAYEGA USI MEIN SAARE VALUES CONVERT HO JAYENGE AUR UNHI PE OPERATION PERFORM HOGA
*/

// DON'T WRITE LIKE THIS => console.log( 2 + 3 * 5 % 7 )
// INSTEAD USE MORE PARENTHESIS => console.log( ((2 + 3) * 5) % 7)

/*
DON'T WRITE CODES LIKE IN THE BELOW CASES:-
*/

console.log(+true)  // => 1
console.log(+"") // => 0

// NOTE:- THE + OPERATOR IS USED AS A UNARY OPERATOR TO CONVERT ITS OPERAND TO A NUMBER

console.log(+true);  // Output: 1
console.log(+false); // Output: 0
console.log(+"123"); // Output: 123 (string to number)
console.log(+"" );   // Output: 0 (empty string to number)
console.log(+null);  // Output: 0 (null to number)


// ASSIGNING A VALUE TO MULTIPLE VARIABLES IN ONE LINE

let num1, num2, num3
num1 = num2 = num3 = 2+2


// POST-INCREMENT AND PRE-INCREMENT

let gameCounter = 100
gameCounter++;  // OR ++gameCounter;
console.log(gameCounter);

// READ ABOUT PREFIX AND POSTFIX ON MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


