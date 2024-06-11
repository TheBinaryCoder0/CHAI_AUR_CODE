const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10 ) // map KHUD RETURN KARTA HAI
                                                   // LEKIN JAB SCOPE OPEN KARENGE TOH return LIKHNA PADEGA
// console.log(newNums);

// **************** CHAINING ********************

const newNums = myNumbers
                .map( (num) => num*10 )
                .map( (num) => num + 1 ) // YAHA JOH num AAYEGA WOH PICHLE CHAIN SE RETURNED VALUE HOGA
                .filter( (num) => num>=40 )
console.log(newNums);