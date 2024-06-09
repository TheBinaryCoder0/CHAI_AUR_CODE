let a = 10
const b = 20
var c = 30
var d = 40

if (true) {
    let a = 10
    const b = 20
    var c = 300 // YAHA C KI VALUE CHANGE HO GAYI 
    d = 400 // YAHA BHI d KI VALUE CHANGE HO GAYI
    console.log(`INNER a: ${a} INNER b: ${b} INNER c:${c} INNER d: ${d}`);
}


/* INTERVIEW QUESTION

NOTE:- BROWSER MEIN INSPECT KE CONSOLE KA JOH SCOPE HAI (CORE SCOPE) AUR JOH SCOPE CODE ENVIRONMENT MEIN RUN KARAKE AATA HAI
       DONO ALAG HOTE HAI
*/



// *************************** FUNCTION INSIDE A FUNCTION AND THEIR SCOPES ***********************************

function one() {
    const username = "aman"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // WE CANNOT ACCESS THIS
    two()
}

one()


if (true) {
    const firstName = "archna"
    if (firstName === "archna") {
        const lastName = " rawat"
        console.log(firstName + lastName);
    }
    // console.log(lastName); // SCOPE MEIN NAHI HAI
}

// console.log(firstName); // SCOPE MEIN NAHI HAI



// ++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++

// HOISTING AND EXECUTION CONTEXT

console.log(addone(5));
function addone(num) {
    return num + 1
}

// console.log(addtwo(5)); // IT WILL GIVE AN ERROR BECAUSE OF THE FUNCTION DEFINITION TECHNIQUE 
const addtwo = function(num){ // FUNCTION CALL EXPRESSION
    return num+2
}