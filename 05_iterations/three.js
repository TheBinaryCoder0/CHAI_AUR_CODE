// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]


// for (const iterator of object) {
    
// }

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// MAPS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('CHI',"China")
map.set('AUS',"Australia")
map.set('AUS',"Australia") // MAP MEIN DUPLICATE VALUES NAHI HOTI HAI
// AUR JIS ORDER MEIN VALUES ENTER KI JAYENGI, USI ORDER MEIN VALUES RAHENGI
// console.log(map);

// for of LOOP ON map

for (const key of map) { // RETURNS AN ARRAY
    console.log(key);
}

// DE-STRUCTURING OF AN ARRAY IN CASE OF MAPS

for (const [key,value] of map) { 
    console.log(key,':-',value);
}

// const myObject ={ 
//     'game1':'NFS',
//     'game2':'GTA'
// }

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }

// YAHA OBJECTS ITERABLE NAHI HAI
// OBJECTS ITERATE KARNE KE DUSRE TARIKE HAI
