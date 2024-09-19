const score = 400
console.log(score);

const balance = new Number(100) // EXPLICITLY DEFINING A NUMBER => HERE WE ARE DEFINING A NEW OBJECT OF NUMBER TYPE
console.log(balance);  // THE OUTPUT WILL BE A LITTLE BIT DIFFERENT

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 2 IS THE VALUE OF NUMBERS THAT WE WANT AFTER THE DECIMAL PLACE => 100.00 

const otherNumber = 28.66
console.log(otherNumber.toPrecision(3)); // FORMATTING THE NUMBER otherNumber TO 3 SIGNIFICANT DIGITS

const hundreds = 10000000
console.log(hundreds.toLocaleString());  // THE OUTPUT IS BASED ON US(UNITED STATES OF AMERICA) STANDARDS
console.log(hundreds.toLocaleString('en-IN')); // OUTPUT BASED ON INDIAN STANDARDS




// ********************* MATHS **************************************

console.log(Math.LN2);
console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.7));
console.log(Math.min(4,3,2,1));
console.log(Math.max(2,45,1,245));

// MAIN USE OF MATH LIBRARY FOR US

console.log(Math.random()); // IT'S OUTPUT WILL LIE BETWEEN 0 AND 1 (BOTH INCLUSIVE)

console.log((Math.random()*10)+1); // WE HAVE ADDED 1 BECAUSE WE DON'T WANT TO GET 0 
                                 // IN CASE LIKE 0.04 * 10 = 0
                                 // SO BY ADDING 1, WE WILL GET THE MINIMUM VALUE AS 1

                                
//IMPORTANT CONCEPT OF GETTING A RANDOM NUMBER IN A RANGE
                                 
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
