// STACK (USED IN PRIMITIVE), HEAP(USED IN NON-PRIMITIVE)

// WHENEVER WE USE STACK MEMORY THEN WE GET A COPY OF THE VARIABLE WE HAVE DEFINED

// AND WHENEVER WE USE HEAP MEMORY THEN WE GET THE REFERENCE OF THE ORIGINAL VALUE AND ALL THE CHANGES WILL BE MADE TO THE ORIGINAL VALUE

let myYoutubeName = "Amnash"

let anotherName = myYoutubeName  // HERE WE GET A COPY OF myYoutubeName VARIABLE
anotherName = "Martin Garrix" // SO THIS CHANGE WILL BE DONE TO THE COPY OF THE VARIABLE NOT THE ACTUAL VALUE

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne  // HERE userTwo GET THE REFERENCE OF THE userOne VARIABLE AND ITS VALUES
userTwo.email = "aman@gmail.com" // SO THIS CHANGE WILL BE DONE TO THE userOne

console.log(userOne.email);
console.log(userTwo.email);