// "hello" and 'hello' => BOTH ARE STRINGS

const name = "Aman"
const title = "Shahi"
// console.log(name+title+'7');  => OUTDATED FORM TO CREATE STRINGS AND GET THE OUTPUT FROM IT

// FOR THE NEW DEFINTION WE USE BACKTICKS ``
// THE ADVANTAGE OF USING BACKTICKS IS THAT WE CAN USE THE CONCEPT OF STRING INTERPOLATION
// HERE WE DEFINE PLACEHOLDERS AND IN THE PLACEHOLDERS, WE CAN DIRECTLY INJECT OUR VARIABLES
// FOR INJECTING THE VARIABLES, WE USE => ${name of the variable}

console.log(`Hello my name is ${name} and my title is ${title}`);

const gameName = new String('Aman') // HERE A STRING OBJECT IS CREATED, NOT A PRIMITIVE STRING.
                                    // THE RESULT IS NOT A PRIMITIVE STRING BUT AN OBJECT.
                                    // AVOID USING new String() UNLESS YOU SPECIFICALLY NEED A String OBJECT.

                // PRIMITIVE STRING IS A BASIC STRING VALUE. e.g. 'AMAN'
                // A STRING OBJECT ( CREATED USING new String() ) IS AN OBJECT THAT WRAPS THE PRIMITIVE STRING AND ADDS ADDITIONAL PROPERTIES AND METHODS
                                    

console.log(gameName[0]);  // RETURNS THE VALUE OF THE STRING AT 0-th INDEX
                           // HERE IT IS NOT AN ARRAY, IT IS AN OBJECT, THAT'S WHY WE CAN ACCESS IT'S INDEXES
console.log(gameName.__proto__);  // RETURNS AN OBJECT WHICH CONTAINS ALL THE FUNCTIONS FOR THE STRING

console.log(gameName.length);  // WE CAN DIRECTLY USE length FUNCTION 
                               // WE DON'T HAVE TO WRITE console.log(gameName.__proto__.length)

console.log(gameName.toUpperCase());  // BUT IT DOESN'T CHANGE OUR ORIGINAL STRING.
                                      // REASON => WE HAVE DISCUSSED THE CONCEPT OF memory allocation OF heap AND stack
                            
console.log(gameName.charAt(2));  // RETURNS THE VALUE IN THE STRING AT 2nd INDEX

console.log(gameName.indexOf('z'));  // IT WILL RETURN -1 BECAUSE IT IS NOT PRESENT IN THE STRING

console.log(gameName.indexOf('n'));  // RETURNS THE INDEX/POSITION OF n IN THE STRING

const gameName1 = "hitesh-hc"

const newString = gameName1.substring(0,4) // IT WILL RETURN THE VALUE TILL THE 3rd INDEX => 4-1 = 3
                                           // SUBSTRING DOESN'T TAKE -VE VALUES AS AN ARGUMENT
                                // const newString = gameName1.substring(-8,4) => IT WILL RETURN THE SAME VALUE => hite
console.log(newString);

const anotherString = gameName1.slice(-8,-4) // slice RETURNS A PART OF THE STRING BETWEEN -8 TO -5 (-4-1)
console.log(anotherString);  

const newString1 = "     AMAN    "
console.log(newString1);
console.log(newString1.trim());  // trim REMOVES WHITE-SPACES AND LINE TERMINATORS (\n => NEWLINE) 
                                 // trim ALSO HAVE ARGUMENTS LIKE trimstart AND trimend

const url = "https://aman.com//aman%20shahi"

/*
BROWSERS DON'T UNDERSTAND SPACES 
SO, SUPPOSE SOMEONE HAVE WRITTEN "https://aman.com//aman shahi" 
THEN THE BROWSER WILL CONVERT IT INTO "https://aman.com//aman%20shahi" (URLN CODING)
*/

url.replace("%20","-")
console.log(url.replace("%20","-"));
console.log(url.includes('aman'));


const StringList = "Aman Shahi is a Music Producer"
console.log(StringList.split(" ")); // split IS USED ON THE BASIS OF WHITE-SPACES
                                    // AN ARRAY IS RETURNED