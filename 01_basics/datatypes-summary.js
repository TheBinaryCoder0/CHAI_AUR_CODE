// PRIMITIVE

// 7 TYPES: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // => ITS VALUE IS undefined. WE CAN ALSO WRITE IT AS let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
// id AND anotherId WILL NOT BE SAME
console.log(id===anotherId);

const bigNumber = 252542152511273861286n // JUST ADD n IN THE LAST OF THE NUMBER TO MAKE IT BigInt

/*
 IS JAVASCRIPT STATICALLY TYPED OR DYNAMICALLY TYPES LANGUAGE?

 => JAVASCRIPT IS DYNAMICALLY-TYPED LANGUAGE BECAUSE WHENEVER WE DEFINE A VARAIBLE WE DON'T DEFINE ITS DATATYPES.
    IT IS DONE AUTOMATICALLY BY THE INTERPRETER OR COMPILER

*/


// REFERENCE (NON PRIMITIVE)

// ARRAY, OBJECTS, FUNCTIONS

const heros = ["IronMan","Batman","WinterSoldier"]; // ARRAY

// OBJECTS ARE DEFINED USING CURLY BRACKETS => {} AND IN THAT THE VALUE CAN BE OF ANY DATATYPES LIKE NUMBER, STRING, ARRAY, FUNCTION, 
// IT CAN BE ANOTHER OBJECT ALSO

let myObj = {
    name : "Aman",
    age  : 20,
}

// FUNCTION KO BHI HAM JAVASCRIPT MEIN VARIABLE KI TARAH USE KAR SAKTE HAI

const myFunction = function(){
    console.log("Hello World");
}

// READ THE DOCUMENTATION TO KNOW THE RETURN TYPE OF THE DATATYPES (PRIMITIVE AND NON-PRIMITIVE)
// https://262.ecma-international.org/5.1/#sec-11.4.3

// IF YOU WANT TO MASTER JAVASCRIPT THEN BE A MASTER IN OBJECTS AND (WEB EVENTS/BROWSER EVENTS) 
