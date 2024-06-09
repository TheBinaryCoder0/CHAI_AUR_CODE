// DATES

let myDate = new Date()
console.log(`TO STRING => ${myDate.toString()}`);
console.log(`TO DATE STRING => ${myDate.toDateString}`);
console.log(`TO ISO STRING => ${myDate.toISOString()}`);
console.log(`TO JSON => ${myDate.toJSON()}`);
console.log(`TO LOCALE DATE STRING => ${myDate.toLocaleDateString()}`);
console.log(`TO LOCALE STRING => ${myDate.toLocaleString()}`);
console.log(`TO LOCALE TIME STRING => ${myDate.toLocaleTimeString()}`);
console.log(`TO TIME STRING => ${myDate.toTimeString()}`);
console.log(`TO UTC STRING => ${myDate.toUTCString()}`);

// INTERVIEW QUESTION => WHAT IS THE TYPE OF DATE

console.log(typeof myDate);  // IT IS AN OBJECT

// CREATING A DATE

let myCreatedDate = new Date(2024,0,23) // (YEAR, MONTH, DATE)
console.log(myCreatedDate.toDateString());

/* NOTE:- MONTHS START FROM 0 IN JAVASCRIPT WHEN WE WRITE IT AS A SINGLE DIGIT
          BUT IF WE ARE USING FORMATS LIKE YY--DD-MM OR ANY ELSE FORMAT, THEN THE MONTH STARTS FROM 1
*/

let myCreatedDateWithFormat = new Date("2024-02-14")
console.log(myCreatedDateWithFormat.toLocaleString());

// CREATING A DATE WITH TIME

let myCreatedDateWithTime1 = new Date(2024,1,20,5,3)
let myCreatedDateWithTime2 = new Date(2024,1,20,21,3) // TIME FOLLOWS 24 HOUR CLOCK RULE

console.log(myCreatedDateWithTime1.toLocaleString());
console.log(myCreatedDateWithTime2.toLocaleString());

// TIMESTAMPS
let createdDate = new Date(2024,3,15)
let myTimeStamp = Date.now()
console.log(myTimeStamp); // OUTPUT WILL BE IN MILLISECONDS
console.log(createdDate.getTime()); // oUTPUT WILL BE IN MILLISECONDS

// IF WE WANT THE OUTPUT IN SECONDS THEN

console.log(Math.round(Date.now()/1000)) // WE ARE USING round OR floor BECAUSE WE DON'T WANT DECIMAL PLACES

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // HERE MONTH IS STARTING FROM 0, SO WE HAVE ADDED +1 SO THAT THE END USER GETS IT AS USUAL
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));