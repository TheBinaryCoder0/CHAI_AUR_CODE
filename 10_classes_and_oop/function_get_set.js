// YEH OLD METHODS HAI, JAB JS MEIN CLASS KA CONCEPT NAHI THA

function User(email, password){
    this._email = email
    this._password = password

    // NOW AS WE KNOW THAT, function => FUNCTION BHI HAI AUR OBJECT BHI HAI
    // TOH HAM function KE OBJECT KI PROPERTIES YA POWERS KO CALL KAR SAKTE HAI
    Object.defineProperty(this, 'email' ,{ // YEH ACTUALLY MEIN GETTER AUR SETTER PROPERTY HI HAI
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    }) 
    Object.defineProperty(this, 'password' ,{ 
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    }) 
}

const shalini = new User("shalini@gmail.com","verma")
console.log(shalini.email);


// AB HAMNE YAHA FUNCTION BASED SYNTAX KIYA HAI

// HAM OBJECT BASED SYNTAX BHI KAR SAKTE HAI AUR USMEIN BHI GETTER AUR SETTER LAGA SAKTE HAI