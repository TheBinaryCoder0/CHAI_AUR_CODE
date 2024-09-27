// YEH SAARI BAATEIN ES6 KE BAAD KI HAI

// class User {
//     constructor(username, email, password){ // JAB BHI HAM new KEYWORD USE KARTE HAI, TOH CONSTRUCTOR CALL HOTA HAI
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com" , "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// BEHIND THE SCENE

// WHAT IF THE FUNCTIONALITY OF THE CLASS WAS NOT AVAILABLE

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

// JOH YAHA User HAI WOH FUNCTION HAI, BUT WOH OBJECT KI TARAH BHI BEHAVE KARTA HAI

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

