class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    // METHOD MEIN NAME SAME HOGA, JOH PROPERTY KA NAAM HOGA WAHI METHOD KA BHI NAAM HOGA

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase() // SETTER KO RETURN NAHI KARTE HAI
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}aman`
    }

    set password(value){
        // this.password = value // => ERROR: Maximum call stack size exceeded
        this._password = value // AB YAHA EK NEW VARIABLE HI PASSWORD KO SET KAR RAHA HAI
    }
    // AB YAHA PASSWORD KO CONSTRUCTOR SET NAHI KAR RAHA, KYOKI HAMNE OVERWRITE KAR DIYA HAI BY USING SETTER AND GETTER
}

const aman = new User("aman@gmail.com","abc")
console.log(aman.email);
console.log(aman.password)



// AB BAHOT BAAR AISA HOTA HAI KI HAM APNA PASSWORD SHARE NAHI KARNA CHAHTE
// YA CUSTOMIZE KARKE DENA CHAHTE HAI, TOH AISE SCENARIOS KE LIYE HI getter AUR setter AATE HAI

// getter AUR setter BY DEFAULT HAR CLASS MEIN HOTE HAI
// AB HAM CHAHTE HAI KI HAM SAAMNE WAALE KO PASSWORD HI NA DE

// HAM KISI VARIABLES YA PROPERTIES PE getter AUR setter LAGA SAKTE HAI, JOH KI CLASS MEIN HOTE HAI

// HAM JITNE BHI PROPERTIES BANATE HAI, UNKE LIYE getter AUR setter AS A METHOD BANN JAATE HAI AUTOMATICALLY

// AGAR HAM getter DEFINE KIYA HAI, TOH HAME setter BHI DEFINE KARNA PADEGA

// getter :- CLASS KE ANDAR SE KOI VALUE GET KARNA CHAHTE HO
// setter :- CLASS KE ANDAR KOI VALUE SET KARNA CHAHTE HO

// THERE IS A ERROR CALLED ' Maximum call stack size exceeded ' , READ ABOUT IT

// AB YEH ERROR ISLIYE AATI HAI KYOKI YAHA setter AUR constructor DONO HAI, TOH ISLIYE DONO VALUES KO SET KARTE HAI
// TOH INKE BEECH RACE LAG JAATI HAI

// YAHA email AUR _email DONO ALAG ALAG HAI
// _email EK PRIVATE PROPERTY BANN GAYI HAI
