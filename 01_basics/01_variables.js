const accountId = 144553
let accountEmail = "aman@google.com"
var accountPassword = "12345"
accountCity = "Delhi"  // AISE BHI LIKH SAKTE HAI LEKIN YEH TARIKA SAHI NAHI HAI. SO, AISE MATT LIKHE VARIABLES KO
let accountState; // YAHA SEMICOLON LAGAO YA MATT LAGAO KOI FARK NAHI PADTA 

// accountId = 2 // NOT ALLOWED
accountEmail="shahi@outlook.com"
accountPassword="54321"
accountCity="Mumbai" 
console.log(accountId);

/*
PREFER NOT TO USE var
BECAUSE OF BLOCK SCOPE AND FUNCTIONAL SCOPE 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])