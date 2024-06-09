// console.log(2>1);  => true 
// console.log(2>=1); => true
// console.log(2<1); => false
// console.log(2==1); => false
// console.log(2!=1); => true

// PROBLEMS OCCUR WHEN WE DON'T COMPARE THE SAME DATA TYPES

// console.log("2">1);  // JAVASCRIPT AUTOMATICALLY CONVERTS THE DATATYPES BUT IT IS NOT ALLOWED IN TYPESCRIPT
// console.log("02">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

/*
THE REASON IS THAT AN EQUALITY CHECK == AND COMPARISIONS > < >= <= WORKS DIFFERENTLY.
COMPARISIONS CONVERT NULL TO A NUMBER, TREATING IT AS 0.
THAT'S WHY null>=0 IS true AND null>0 IS false
*/


// console.log(undefined == 0);
// console.log(undefined>0);
// console.log(undefined<0);

/*
IN ALL THE ABOVE CASES THE OUTPUT WILL BE false
*/

// === OPERATOR (STRICT CHECK) => IT CHECKS THE VALUES AS WELL AS THEIR DATATYPES

console.log("2"===2);  // => false

/* 
NOTE:- ALWAYS WRITE CLEAN CODE AND DON'T USE COMPARISIONS LIKE ABOVE BECAUSE SOMETIMES THEY WILL NOT GIVE THE DESIRED OUTPUT
*/