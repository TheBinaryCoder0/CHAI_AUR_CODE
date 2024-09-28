const User = {
    _email : 'rajat@gmail.com',
    _password : 'shahi'
    ,
    get email(){
        return this._email.toUpperCase() 
    }
    ,
    set email(value){ // YAHA set KE LIYE email EK PROPERTY HAI, METHOD NAHI
        this._email = value 
    }
}

// WE CAN USE FACTORY FUNCTIONS
const tea = Object.create(User) // YAHA DEFAULT VALUE null HOTI HAI, INSIDE THE PARENTHESIS
console.log(tea.email); // PAR email TOH DEFINE HI NAHI HAI
                        // UNDERSCORE KA USE KARNE SE YEH HOTA HAI KI WOH PROPERTY PRIVATE BANN JAATI HAI

// getter AUR setter SPECIAL METHODS HAI JOH MAIN PROPERTY KE UPAR RAKH RAHA HU

// getter AUR setter MEMORY MEIN JOH BHI VALUES GET YA SET KAR RAHE HAI, USKO OVERWRITE KARNE KE LIYE DIYA JAATA HAI 