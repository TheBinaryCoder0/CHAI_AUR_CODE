const coding = ['js','ruby','cpp','java','python']

// coding.forEach( function (item) { // forEach() MEIN CALLBACK FUNCTION DENA HOTA HAI
//                                         // AUR CALLBACK FUNCTION KA NAAM NAHI HOTA HAI
//     console.log(item);
// } )


// USING ARROW FUNCTION (REMOVES NAME OF FUNCTION AND = BECAUSE WE DON'T HAVE TO STORE IT)
// coding.forEach( (value) => {
//     console.log(value);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // YAHA FUNCTION KA REFERENCE DENA HAI
//                         // FUNCTION KO EXECUTE NAHI KARNA HAI
//                         // THEREFORE, USE printMe NOT printMe()


// ARGUMENTS OF forEach

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

// GET THE ACCESS OF OBJECTS STORED IN AN ARRAY

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => { // HERE item ARE OBJECTS
    console.log(item.languageName);
} )