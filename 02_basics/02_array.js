const marvel_heroes = ["ironman","thor","spiderman"]
const dc_heroes = ["batman","flash","superman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); //  THIS IS NOT A GOOD WAY TO ACCESS THE ELEMENT

const allHeroes = marvel_heroes.concat(dc_heroes)  // concat MERGES THE ARRAYS TOGETHER
console.log(allHeroes);

// NOW WE USE spread OPERATOR (...) => KAANCH KA GLASS MICHE GIRAYA TOH WOH SPREAD HO GAYA

const all_new_heroes = [...marvel_heroes,...dc_heroes]  // IT WILL ALSO MERGE THE ARRAY 
                                                        // BUT HERE WE CAN MERGE MORE THAN TWO ARRAYS AT A TIME
console.log(all_new_heroes);

// flat METHOD

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // HERE IN THE PLACE OF Infinity, 
                                                        // WE CAN ALSO GIVE THE DEPTH TO WHICH IT WILL SOLVE THE ARRAY
                                                        // DEPTH IS THE NUMBER OF ARRAYS INSIDE AN ARRAY
                                                        // LIKE IN THE ABOVE EXAMPLE, THE DEPTH IS 2
console.log(real_another_array);

// WE WILL USE THIS WHEN WE WILL DO DATA SCRAPING

// WHEN WE SELECT A DATA FROM A WEBPAGE THEN IT COMES IN DIFFERENT FORMATS LIKE NODELIST, OBJECT, STRING, etc
// BUT WE WANT ARRAY SINCE WE CAN LOOP ON AN ARRAY 

console.log(Array.isArray("Aman")); // CHECKING IF THE INPUT IS ARRAY OR NOT
console.log(Array.from("Aman"));
console.log(Array.from({name:"Aman"})); // IT RETURNS AN EMPTY ARRAY AND IT'S VERY INTERESTING
                                // BECAUSE WE HAVE TO TELL THAT ON WHAT BASIS IT SHOULD CREATE AN ARRAY(LIKE keys,values)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

// LEARN MORE ABOUT isArray, from, of 