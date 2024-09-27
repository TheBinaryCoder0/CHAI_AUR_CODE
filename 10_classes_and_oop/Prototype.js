// let myName = "aman     "

// console.log(myName.truelength()); // WE WANT THE TRUE LENGTH OF THE STRING THAT DOESN'T COUNT SPACES IN THE LENGTH

// WE CAN ALSO DO THIS USING trim
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.aman = function(){
    console.log(`aman is present in all objects`);
}

heroPower.aman() // YEH ISLIYE HO PAYA KYOKI ARRAY, FUNCTION, STRING => YEH SAARE Object SE PASS HOKE JAATE HAI

myHeros.aman() // ARRAY MEIN BHI WOH METHOD AA GAYA


// heroPower IS AN OBJECT 
// myHeros IS AN ARRAY

// YEH SAB HO PAYA KYOKI HAMNE YEH POWER (i.e., METHOD) OBJECT KO HI DEDI

// AB AGAR HAM YEH POWER ARRAY KO DETE HAI TOH KYA WOH OBJECT KE PAAS JAYEGI?

Array.prototype.heyAman = function(){
    console.log(`Aman says hey`)
}

myHeros.heyAman();
// heroPower.heyAman(); // ISKO ACCESS NAHI MILA KYOKI YEH OBJECT HAI

// INHERITANCE 

// PROTOTYPAL INHERITANCE (KAISE KISI AUR KI PROPERTY KO ACCESS KAR SAKTE HAI)

const User = {
    name : "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// YEH WALA APPROACH THODA OUTDATED HAI
// NEW CODEBASES MEIN AISI APPROACH NAHI MILEGI, PAR YEH HOTI HAI

Teacher.__proto__ = User

// NOW IF WE WANT TO LINK TWO OBJECTS, SO WE CAN USE PROTOTYPE

// MODERN SYNTAX
// YAHA BHI INTERNALLY WAHI CHAL RAHA HAI, BUT ISKA SYNTAX THODA SAHI HAI

Object.setPrototypeOf(TeachingSupport, Teacher) // THIS IS PROTOTYPAL INHERITANCE
                                                // THIS IS JUST SYNTACTIC SUGAR

let anotherUsername = "ChaiAurCode       "

String.prototype.truelength = function(){
    console.log(this);
    console.log(`${this}`);
    
    console.log(`True length is ${this.trim().length}`); 
}

anotherUsername.truelength()
"shalini".truelength()
"iceTea".truelength()