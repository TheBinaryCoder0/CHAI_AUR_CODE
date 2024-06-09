const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

// for in LOOP ON OBJECTS

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// } 

// for in LOOP ON ARRAY

//  const programming = ['js','rb','py','java','cpp']
//  for (const key in programming) {
//     console.log(programming[key]);
//  }

// for in LOOP ON MAPS

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('CHI',"China")
map.set('AUS',"Australia")
map.set('AUS',"Australia")

for (const key in map) {
    console.log(key);
}

// HERE IT NOT SHOWING ANY OUTPUT BECAUSE IT IS NOT ITERATABLE
// BUT THERE ARE WAYS TO DO IT, WE WILL LEARN IT LATER