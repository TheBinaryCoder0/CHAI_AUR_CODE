// OBJECTS KA BHI ITERATION ROKE JAA SAKTE HAI

// const descriptor = Object.getOwnPropertyDescriptor( Math, "PI" )
// console.log(descriptor)

// HAM BHI AISE PROPERTIES DEFINE KAR SAKTE HAI JISKI VALUES HARD CODED HAI
// AUR KOI UNKO CHANGE KAR BHI SAKTA HAI AUR NAHI BHI
// JAISE KI HAMNE NICHE KIYA HAI

const chai = {
    name:'ginger chai',
    price: 250,
    isAvailable:true,

    orderChai: function(){
        console.log("Chai nahi bani");
        
    }
}

// console.log(chai)

// AB KYA ISKO BHI DESCRIPTOR PROPERTIES HAI
// AUR AGAR HAI BHI TOH KYA MAIN USKO SET KAR SAKTA HU YA NAHI

// ACTUALLY MEIN WOH AVAILABLE HAI

console.log(Object.getOwnPropertyDescriptor( chai, "name" ));

Object.defineProperty( chai, "name", {
    // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor( chai, "name" ));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value!== 'function') { // KYOKI HAME BAS KEY VALUE PAIRS CHAHIYE THE, ISLIYE YEH CONDITION CHECK KIYA
        console.log(`${key} : ${value}`);   
    }
}

// AB HAMNE enumerable:false KIYA HAI name PE 
// ISLIYE LOOP SE JOH KEY VALUE PAIRS MIL RAHE HAI, USMEIN name NAHI HAI