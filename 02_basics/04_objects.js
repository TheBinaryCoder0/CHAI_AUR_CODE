// HERE WE WILL CREATE OBJECTS AS CONSTRUCTORS (JISME SINGLETON BANTA HAI HAMESHA)

const tinderUser = new Object() // const tinderUser = {} => BOTH ARE SAME (THERE IS NO INTERNAL DIFFERENCE)
                                // THE ONLY DIFFERENCE IS THAT 
                                // const tinderUser = new Object() => THIS IS A SINGLETON OBJECT
                                // const tinderUser = {} => THIS IS A NON-SINGLETON OBJECT
                                
                                
                                
tinderUser.id="123abc"
tinderUser.name="Aman"
tinderUser.isLoggedIn=false
console.log(tinderUser);

// OBJECTS INSIDE OBJECTS

const regularUser={
    email:"aman@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aman",
            lastname:"Shahi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


// COMBINING OBJECTS

const obj1= {1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3 = {obj1,obj2} // WHOLE OBJECT GETS ADDED IN THE OBJECT

// const obj3 = Object.assign({},obj1,obj2) // WE HAVE ADDED {} BUT IT IS AN OPTIONAL ARGUMENT

const obj3 ={...obj1,...obj2} // WE WILL USE THIS MOST OF THE TIMES
console.log(obj3);

// DATABASE SE JAB VALUES AATI HAI TOH ARRAY OF OBJECTS KE FORM MEIN AATI HAI
const users =[
    {
    id:1,
    email:"one@gmail.com"
    },
    {
        id:2,
        email:"two@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // => RETURNS AN ARRAY ON WHICH WE CAN RUN LOOPS AND ITERATE OVER IT
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // HAR EK KEY-VALUE PAIRS KO ARRAY MEIN BANA DIYA JAATA HAI
                                         // AUR YEH UNN SAARE ARRAYS KA COLLECTION RETURN KARTA HAI IN THE FORM OF ARRAY
console.log(tinderUser.hasOwnProperty("isLoggedIn"))
console.log(tinderUser.hasOwnProperty("isLogged"));

// DESTRUCTURING AN OBJECT

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor  // AGAR HAME YEH BAAR BAAR NAHI LIKHNA TOH

const {courseInstructor:instructor}= course // HERE courseInstructor IS RENAMED AS instructor
// console.log(courseInstructor);
console.log(instructor);

/*    USE OF DESTRUCTURING IN REACT.js

const navbar = ({company}) => {

}
navbar(company = "hitesh")

*/

// WE CAN ALSO DESTRUCTURE ARRAYS BUT WE WILL LEARN IT LATER

// ******************************** API and JSON ************************************


// JSON = >

// {
//     name:"aman",
//     course:"js in hindi",
//     price:"free"
// }

// IN JSON THE KEYS ARE USUALLY STRINGS

/* WE SOMETIMES ALSO GET THE DATA FROM THE API IN THE FORM OF ARRAYS IN WHICH DIFFERENT OBJECTS ARE PRESENT
    
    [
        {},
        {},
        {}
    ]
*/

// JSON => JAVA SCRIPT OBJECT NOTATION