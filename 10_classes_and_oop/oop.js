// OBJECT LITERAL 

const user = {
    username: "Aman",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// IN JS, OBJECT IS THE OBJECT LITERAL AND IT IS THE BASIC UNIT

// console.log(user.username); // YOU CAN ALSO USE THE SQUARE BRACKETS METHOD TO PRINT THE VALUES
// console.log(user.getUserDetails());
// console.log(this); // YEH JAB BROWSER KE CONSOLE MEIN KAROGE TAB AAPKO WINDOW OBJECT MILTA HAI
                   // NODE MEIN LEKIN EMPTY OBJECT MILEGA

// CONSTRUCTOR FUNCTION

// const promiseOne = new Promise()
// const date = new Date()
// IN THE ABOVE CASES, WE NEED NEW INSTANCES, DON'T AFFECT PREVIOUS VALUES AND MAINTAIN YOUR CONTEXTS (i.e., EXECUTION CONTEXT)

// new KEYWORD IS A CONSTRUCTOR FUNCTION
// new KEYWORD IS USED TO CREATE A NEW CONTEXT
// CONSTRUCTOR FUNCTIONS ALLOWS US TO CREATE MULTIPLE INSTANCES FROM THE SAME OBJECT LITERAL
 

function User(username, loginCount, isLoggedIn){
    this.username = username; // HERE, LHS username IS THE VARIABLE AND THE RHS username IS THE PASSED VALUE
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this // YEH NAHI BHI LIKHOGE TOH CHALEGA, KYOKI YEH IMPLICITLY RETURN HOTA HAI
}

// const userOne = User("shreya", 12 , true)
// console.log(userOne);

// YAHA userTwo NE userOne KE VALUES KO OVERWRITE KAR DIYA

// const userOne = User("shreya", 12 , true)
// const userTwo = User("ChaiaurCode",11,false)
// console.log(userOne);

// THIS IS WHY WE USE new KEYWORD SO THAT WE CAN GET NEW INSTANCE EVERY TIME

// NOW USE new KEYWORD
const userOne = new User("shreya", 12, true)
const userTwo = new User("ChaiaurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);

// STEPS THAT ARE DONE WHENEVER WE USE new KEYWORD:-

// STEP-1: JAISE HI HAM new KEYWORD USE KARTE HAI, TOH EK EMPTY OBJECT CREATE HOTA HAI
// STEP-2: new KEYWORD KI WAJAH SE CONSTRUCTOR FUNCTION CALL HOTA HAI
//         YEH KYA KARTA HAI, KI JITNE BHI ARGUMENTS WAGERA HOTE HAI USKE ANDAR PACK KAR DETA HAI
// STEP-3: JOH BHI HAMNE ARGUMENTS LIKHE HAI WOH this MEIN INJECT HO JAATE HAI
// SETP-4: HAME OUTPUT MIL JAATA HAI


// WE CAN ALSO WRITE METHODS INSIDE MY User FUNTION

function User2(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userThree = new User2("Shalini",20,true)
// console.log(userThree.greeting());
console.log(userThree.constructor); // YEH REFERENCE DEGA KHUDKE BAARE MEIN HI

// instanceof

console.log(userThree instanceof User2); // => true
console.log(userThree instanceof Object); // => true


