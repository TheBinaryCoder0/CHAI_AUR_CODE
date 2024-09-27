class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    // OVERWRITING THE CONSTRUCTOR
    constructor(username, email, password){
        super(username) // YAHA USERNAME SET HO JAYEGA PARENT CLASS KA CONSTRUCTOR USE KARKE
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const aman = new Teacher("Aman","aman@teacher.com", "123")

aman.addCourse()
aman.logMe()

const shalini = new User("shalini")

shalini.logMe()

console.log(aman===shalini); // => false
console.log(aman===Teacher); // => false
console.log(aman instanceof Teacher); // => true 
console.log(aman instanceof User); // => true


