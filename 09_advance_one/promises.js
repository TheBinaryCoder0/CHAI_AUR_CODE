// PROMISE IS AN OBJECT

// PROMISES APNE ANDAR EK CALLBACK LETA HAI


// PROMISES CALLBACK HELL KO BHI REDUCE KARTA HAI
// CALLBACK HELL :- CALLBACK KE ANDAR CALLBACK, USKE ANDAR CALLBACK, AND SO ON

const promiseOne = new Promise(function(resolve,reject){
    // DO AN ASYNC TASK
    // DB CALLS, CRYPTOGRAPHY RELATED, NETWORK RELATED
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // CONNECTED resolve
    },1000)
})

// AB PROMISE CREATE HO GAYA HAI TOH USKO CONSUME BHI KARNA HOTA HAI

promiseOne.then(function(){ // ISKA CONNECTION DIRECT resolve KE SAATH HAI
    console.log("promise consumed");  
}) 

// DIRECT EXECUTION OF PROMISE

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Aman", email:"coderthebinary@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// resolve MEIN JOH BHI PARAMETER PASS KAROGE WOH DATA .then() MEIN MIL JAATA HAI

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false // CHANGE THIS VALUE TO false IF true OR VICE-VERSA AND THEN SEE THE OUTPUT
        if(!error){
            resolve({username:"Rajat", password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },2000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
} )
.then( (username) => {
    console.log(username);
} )
.catch(function(err){
    console.log(err); // err IS ERROR   
}).finally( () => console.log("The promise is either resolved or rejected")) // finally HAMESHA EXECUTE HOTA HAI

// PROMISE KA BHI EK TIME HOTA HAI
// AISA NAHI HAI KI PROMISE UNLIMITED TIME TAK CHALTA HAI


// ASYNC AWAIT

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false // CHANGE THIS VALUE TO false IF true OR VICE-VERSA AND THEN SEE THE OUTPUT
        if(!error){
            resolve({username:"javascript", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);  
}

consumePromiseFive()


// try catch

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // YAHA await USE KIYA KYOKI JSON MEIN CONVERT HONE KE LIYE BHI TIME LAGTA HAI
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }
// 
// getAllUsers()


// fetch() KA RESPONSE TYPE PROMISE AATA HAI
fetch('https://jsonplaceholder.typicode.com/users') 
.then( (response) => { // HERE response IS A VARIABLE
    return response.json()
} )
.then( (data) => { // data IS THE VALUE THAT IS RETURNED FROM THE ABOVE .then()
    console.log(data);    
} )
.catch( (error) => {
    console.log(error)
} )