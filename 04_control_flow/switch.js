// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("default case match");
        break;
}

/* NOTE:- JAHA PE BHI HAMARA KEY MATCH HO GAYA HAI 
          USKE BAAD KA SAARA CODE EXECUTE HO JAATA HAI 
          ISS LIYE HAM break USE KARTE HAI
          LEKIN default PHIR BHI RUN HOGA AGAR KOI CASE MATCH NAHI HUA TOH BHI

    MODERN LANGUAGES LIKE SWIFT MEIN AISA NAHI HAI
    LEKIN JS OLD SCHOOL LANGUAGE HAI ISLIYE ISMEIN AISA HOTA HAI
*/

const day = "wed" // CASE SENSITIVITY KA DHYAAN RAKHNA
switch (day) {
    case "mon":
        console.log("Monday");
        break;
    case "tue":
        console.log("Tuesday");
        break;
    case "wed":
        console.log("Wednesday");
        break;
    case "thu":
        console.log("Thursday");
        break;
    
    default:
        console.log("default case match");
        break;
}