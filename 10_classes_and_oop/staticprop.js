class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);   
    }

    static createId(){ // LEARN MORE ABOUT static KEYWORD AND UNDERSTAND WHY WE HAVE USED static HERE
        return `123`
    }
}

const aman = new User("aman")
// console.log(aman.createId()); // IT WILL GIVE AN ERROR BECAUSE WE HAVE USED static KEYWORD

class Teacher extends User{
    constructor(username, email){ // YAHA ORDER DEPEND NAHI KARTA ARGUMENTS KA, KAISE BHI LIKH SAKTE HO
        super(username)
        this.email = email
    }
}

const shalini = new Teacher("shalini","shalini@gmail.com")
console.log(shalini.logMe());
// console.log(shalini.createId()); // IT WILL ALSO GIVE AN ERROR BECAUSE OF THE static KEYWORD 
                                 // CHILD CLASS KO BHI ACCESS NAHI MILA
