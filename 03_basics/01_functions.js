function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// PARAMETERS => THE INPUT THAT WE GIVE INSIDE THE PARENTHESIS DURING THE CREATION OF FUNCTION

// ARGUMENTS => THE INPUT THAT WE GIVE DURING THE FUNCTION CALL

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
// const result = addTwoNumbers(5,7)
// console.log("Result :",result); // ITS PRINTS undefined BECAUSE THE FUNCTION IS NOT RETURNING A VALUE

function addTwoNumbers2(number1,number2){
    return number1+number2; // let result = number1 + number2
                            // return result  
                            // return KE BAAD LIKHA HUA CODE KABHI EXECUTE NAHI HOGA
                            // FUNCTION return PE JAATE HI RUKK JAYEGA 
}
const result2 = addTwoNumbers2(5,4)
console.log(result2);

function loginUserMessage(username){ // username="sam" => DEFAULT VALUE ASSIGN KAR DIYA
    if(!username){ // !username IS EQUIVALENT TO username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Aman"));
console.log(loginUserMessage()); // IT THERE IS NO VALUE PASSED TO THE FUNCTION THEN IT RETURNS undefined


// undefined IS TREATED AS A false VALUE IN JS

// REST OPERATOR IN FUNCTION => USED TO PASS MULTIPLE VALUES IN THE FUNCTION
function calculateCartPrice(val1,val2,...num1){ // ...num1 IS THE REST OPERATOR
    return `value 1: ${val1} value 2: ${val2} AND OTHER REMAINING VALUES ARE: ${num1}`
}

console.log(calculateCartPrice(200,300,700,900));

// HOW TO PASS AN OBJECT INTO A FUNCTION AND HOW TO USE IT

const user = {
    username:"aman",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// BUT WE HAVE TO CHECK WHETHER THE anyobject IS AN OBJECT OR NOT 
// OR THE .username AND .price IS AVAILABLE OR NOT
// IN TYPESCRIPT, IT IS DONE IMPLICITLY
// BUT IN JAVASCRIPT, WE HAVE TO WRITE SOME EXTRA CODE FOR THIS

handleObject(user)

handleObject({             // WE CAN ALSO THE OBJECT DIRECTLY AS AN ARGUMENT 
    username:"shahi",
    price:299
})

// PASSING AN ARRAY INTO A FUNCTION
const myNewArray = [200,300,700,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1000,2030,4500,9870])); // PASSING AN ARRAY DIRECTLY