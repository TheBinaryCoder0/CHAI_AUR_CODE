// ARROW FUNCTION AND THIS KEYWORD

// this => CURRENT CONTEXT KO BATATA HAI
// CONTEXT KA SIMPLE MATLAB HAI VALUES, JOH AAPKE VARIABLES HAI WOH KYA VALUES HOLD KAR RHE HAI

const user = {
    username:"aman",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to website`);
        // console.log(this); // YEH CURRENT VALUES KO PRINT KAREGA
    }
}

user.welcomeMessage()
user.username="archna"
user.welcomeMessage()

console.log(this); // YEH EK EMPTY OBJECT RETURN KAREGA, KYOKI GLOBAL MEIN KOI CONTEXT HI NAHI HAI

/* 
   AGAR YAHI console.log(this) HAM BROWSER MEIN RUN KARAYENGE TOH WOH window OBJECT RETURN KAREGA
   PEHLE KE TIME MEIN KEWAL BROWSER PE HI MATLAB JAVASCRIPT RUN KARA SAKTE THE
   LEKIN AB HAMARE PAAS STANDALONE ENGINES HAI LIKE NODE, DINO, BUN, etc.
*/

/* INTERVIEW QUESTION:-
        BROWSER KE ANDAR JOH GLOBAL OBJECT HOTA HAI WOH "WINDOW" OBJECT HOTA HAI
        ISILIYE TOH HAM WINDOWS KE SAARE EVENTS CAPTURE KAR PAATE HAI LIKE click,form submit,etc.
*/

function tea(){
    let username = "mayank";
    console.log(this);
}

tea()

function chai(){
    let username = "shahi"
    console.log(this.username); // => undefined
    // FUNCTION KE ANDAR HAM this KA USE NAHI KAR PAA RAHE HAI
    // AAGE JAB HAM DOM MEIN MANIPULATION KARENGE, TAB YEH HAMARE KAAM AAYEGA
}

chai()

const chai2 = function(){
    let username = "rawat"
    console.log(this.username); // => undefined
}

chai2()

// ARROW FUNCTION

const tea3 = () => { 
    let username = "rajat"
    console.log(this.username);
}

tea3() // => undefined

const chai3 = () => { 
    let username = "somya"
    console.log(this.username);
}

chai3() // => undefined

// BASIC ARROW FUNCTION

const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(5,7))

// IMPLICIT RETURN IN ARROW FUNCTION

const addTwo2 = (num3,num4) => num3+num4
console.log(addTwo2(7,12))


// CURLY BRACES i.e.,{}  MEIN LIKHA TOH return KEYWORD LIKHNA PADEGA
// PARENTHESIS i.e.,() MEIN LIKHA TOH return KEYWORD NAHI LIKHNA PADEGA

const productTwo = (num5,num6) => (num5*num6) // YEH react.js MEIN BAHOT JYADA USE HOTA HAI
console.log(productTwo(3,2));

// PARENTHESIS KA USE HAMNE ISLIYE KIYA KYOKI AGAR HAME KOI OBJECT RETURN KARANA HOTA TOH HAM 
// USKO BINA PARENTHESIS KE RETURN NAHI KAR SAKTE
// OBJECT KO RETURN KARNE KE LIYE USKO PARENTHESIS MEIN WRAP KARNA HI PADEGA

const productThree = (num7,num8,num9) => ({username:"sachin"})
console.log(productThree(2,4,3));