 // reduce

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)  // 0 IS THE INITIAL VALUE

/* IF YOU DON'T DEFINE AN INITIAL VALUE WHEN USING THE `reduce()` METHOD, 
   JAVASCRIPT WILL AUTOMATICALLY USE THE FIRST ELEMENT OF THE ARRAY AS THE INITIAL VALUE FOR THE ACCUMULATOR. 
   THE ITERATION WILL THEN START FROM THE SECOND ELEMENT.
*/
// USING reduce WITH ARROW FUNCTION

const myTotal = myNums.reduce( (acc, currval) => acc+currval,0 ) // 0 IS THE INITIAL VALUE
console.log(myTotal);

// WE CAN DO THIS TASK USING OTHER LOOPS AS WELL i.e., Foreach, Forof, etc

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course course',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0 ) // YAHA item KO CHECK BHI KARENGE KI WOH NUMBER HAI YA NAHI
                                                                         // LEKIN ABHI CHECK ISLIYE NAHI KIYA KYOKI ABHI HAME PATA HAI
                                                                         // KI YAHA NUMBER HAI item KI VALUES
console.log(priceToPay);

// reduce ON EMPTY ARRAY

const emptyArray = [];
const result = emptyArray.reduce((acc, cur) => acc + cur, 10);
console.log(result); // => 10
