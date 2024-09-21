/* 
    WE CAN DEFINE OBJECTS IN TWO WAYS: - (THE ONLY DIFFERENCE BETWEEN THE TWO IS SINGLETON ONLY)
        1. LITERALS
        2. CONSTRUCTOR (ISMEIN SINGLETON BANTA HAI HAMESHA)
*/

// OBJECT LITERALS

// Object.create // CREATING AN OBJECT THROUGH CONSTRUCTOR METHOD

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Aman", // HERE name IS TREATED AS A STRING BY JAVASCRIPT  (i.e., "name")
    "full name": "Aman Shahi",
    mySym1: "mykey1", // HERE IT WILL NOT BE TREATED AS A SYMBOL
    [mySym2]: "mykey2", // IT WE WANT TO USE mySym2 AS A SYMBOL THEN WE HAVE TO USE [mySym2]
    age: 20,
    location: "Delhi",
    email: "aman@gmail.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// IN OBJECTS, WE CAN ACCESS THE ELEMENTS BY USING EITHER key OR value

// TWO WAYS TO ACCESS ELEMENTS IN OBJECTS
console.log(JsUser.email);
// console.log(JsUser[email]); // IT WILL THROW AN ARRAY BECAUSE email IS TREATED AS A STRING BY JAVASCRIPT 
console.log(JsUser["email"]);

console.log(JsUser.mySym1);
console.log(typeof JsUser.mySym1);
console.log(JsUser["full name"]); // WE CAN'T USE console.log(JsUser[full name]) OR console.log(JsUser.full name)
console.log(JsUser[mySym2]);
console.log(typeof JsUser[mySym2]); // HERE IT WILL SHOW THAT IT IS A STRING BUT IT A SYMBOL

// BUT IF WE WANT TO CHECK THAT IT IS A SYMBOL OR NOT THEN
function isSymbolProperty(obj, key) {
    const symbolFromKey = Symbol.for(key);
    return symbolFromKey === key;
}

console.log(isSymbolProperty(JsUser, "mySym1")); // Output: false
// console.log(isSymbolProperty(JsUser, mySym2)); // IT SHOWS AN ERROR THAT THE isSymbolProperty FUNCTION
                                                  // CANNOT CONVERT A SYBMOL TO A STRING 


// HOW TO CHANGE VALUES OF AN OBJECT

JsUser.email = "aman@outlook.com"

// HOW TO LOCK A VALUE SO THAT NO ONE CAN CHANGE IT

// Object.freeze(JsUser)
JsUser.email = "aman@microsoft.com" // THIS CHANGE WILL NOT BE MADE DUE TO FREEZE
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`); // this => JAB BHI HAME SAME OBJECT KO REFER KARNA HOGA TAB HAM this USE KARENGE
}   

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());