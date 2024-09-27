/*
THERE ARE THREE THINGS WE HAVE TO UNDERSTAND:-
1. call
2. bind 
3. apply
*/

function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    // SetUsername.call(username) 
    // YEH HAMNE this.username = username KI JAGAH HI TOH USE KIYA HAI
    // AB YAHA DIKKAT YEH HAI KI SetUsername(username) CALL NAHI HUA HAI, USKA BAS REFERENCE GAYA HAI
    // ISILIYE HAMNE .call LAGAYA HAI
    // AB YAHA .call LAGANE SE CALL TOH HUA LEKIN JAISE HI WOH EXECUTE HUA, USKA EXECUTION CONTEXT GAYAB HO GAYA
    // TOH ISILIYE USKE ANDAR KE VARIABLES BHI CHALE GAYE

    // AB HAME REFERENCE HOLD KARKE RAKHNA HAI TOH HAM APNA EK this DENGE
    SetUsername.call(this, username) // YAHA this OPTIONAL HAI
    // TOH AB MAIN GAYA, MERE SAMAAN AAP RAKH LO

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
