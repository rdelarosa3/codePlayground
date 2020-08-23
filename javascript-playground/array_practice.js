// Define a function named allIndexesOf that takes in two arguments.
// The first argument should be the array to search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array.
// Given:
// var fruits = [“apple”, “banana”, “orange”, “apple”, “pineapple”];

var fruits = ["apple", "banana", "orange", "apple", "pineapple"]
function allIndexesOf(arr,arg){
    var fruitIndex =[];
    arr.forEach(function(fruit,index) {
        if (arg === fruit){
            fruitIndex.push(index);
        }
    });
    console.log(fruitIndex);
}
allIndexesOf(fruits, "apple") //should return the array [0, 3]
allIndexesOf(fruits, "guava") //should return the array []
allIndexesOf(fruits, "pineapple") //should return [4]


// Define a function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to remove
// Given:
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
function removeAll(arr,value) {
    var newArr = arr.filter(function(bug) {
        return bug !== value;
    })
    console.log(newArr);
}
console.log(removeAll(bugs, "ant")) //should return [“mosquito”, “scorpion”, “mosquito”, “typo”, “reference error”, “type error”]
console.log(removeAll(bugs, "mosquito")) //should return [“ant”, “scorpion”, “ant”, “ant”, “typo”, “reference error”, “type error”]
console.log(removeAll(bugs, "roach")) //should return the original array b/c “roach” has no occurrances.


// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
function randomIntBetween(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}
// Make a function called coinFlip() that returns either 0 or 1, randomly
function coinFlip() {
    return Math.round(Math.random());
}
var x = 0;
do{
    coinFlip();
    x++
}while(x<3);
// Make a function called twoDice() that returns the sum of rolling two six sided dice.
function twoDice(){
    var dice1 = Math.floor(Math.random() * 6 ) + 1;
    var dice2 = Math.floor(Math.random() * 6 ) + 1;
    return (dice1+dice2);
}
// Make a function called twentySidedDie() that returns a random integer between 1 and 20.
function twentySidedDie() {
    return (Math.floor(Math.random() * 20 ) + 1);
}
// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
function twelveSidedDie() {
    return (Math.floor(Math.random() * 12 ) + 1);
}
// Make a function called tetrahedron() that returns a random integer between 1 and 4.
function tetrahedron() {
    return (Math.floor(Math.random() * 4) + 1);
}
// Make a function called rollDie() that returns an integer between 1 and 6.
function  rollDie() {
    return (Math.floor(Math.random() * 6 ) + 1);
}
// Make a function called listOfRolls(num) that takes in a number
// containing how many 6-sided dice rolls you want to make.
// The listOfRolls function should return an array of that length,
// where each element of the array is the result of the rollDie function.
function listOfRolls(num){
    var arr = [];
    for(var j = 0; j<num;j++){
        arr.push(rollDie());
    }
    console.log(arr);
}
// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
// This function should take in two arguments:
// The first argument is the number of rolls you want to make.
// The second argument is a function that contains the function definition for the type of die you want to roll.
// For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron),
// then the function will return an array containing one value that is the result of calling the tetrahedron function.
function listOfRollsFromDieFunc(numberOfRolls, diceFunction){
    var arr = [];
    for(var j = 0; j<numberOfRolls;j++){
        arr.push(diceFunction());
    }
    console.log(arr);
}
/**
 * JS Array Practice
 * Intermediate Array practice: array creation, iteration, and manipulation
 */
// Exercise 0. Write a function named first() that returns only the first element of an array
function first(arg){
    return arg[0];
}
// Exercise 1. Write a function named secondToLast() that returns the second to last element
function secondToLast(arg) {
    return arg[arg.length-2];
}
// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
function rest(arg) {
    arg.shift();
    return arg;
}
// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
function getLongestString(arg) {
    var arr = [arg[0]];
    arg.forEach(function(string){
        if(string.length > arr[0].length){
            arr.shift();
            arr.push(string);
        }
    })
    return arr[0];
}
// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
function getShortestString(arg) {
    var arr = [arg[0]];
    arg.forEach(function(string){
        if(string.length < arr[0].length){
            arr.shift();
            arr.push(string);
        }
    })
    return arr[0];
}
// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays.
// The function should return a single array containing all of the elements of the first array
// along with all of the elements of the second array
// Example:
function addTwoArrays(arr1,arr2) {
    return arr1.concat(arr2);
}
console.log(addTwoArrays([1, 2, 3], [4, 5, 6]))//should return [1, 2, 3, 4, 5, 6]

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
function getUniqueValues(arr){
    return Array.from(new Set(arr));
}
// Example:
console.log(getUniqueValues(["a", "b", "a", "b", "c", "c"])) //should return [“a”, “b”, “c”]

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed,
// but without altering the original array.
function reverseArray(arr) {
    return arr.reverse();
}
// Exercies 7. Write a function named getRandomQuote().
// Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
// getRandomQuote should generate a random number between 0 and the array’s length minus 1
// use the randomly generated number as your index
// return a random quote.

function getRandomQuote() {
    var quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, so don't waste it living someone else's life. " +
        "Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "If life were predictable it would cease to be life, and be without flavor."
    ]
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}
// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
function getIndexesOf(letter,word) {
    var hold=[]
    word.split("").forEach(function(char,ind){
        if(char === letter){
            hold.push(ind);
        }
    })
    return hold;
}
// Example:
console.log(getIndexesOf("a", "banana")); //should return the array [1, 3, 5]
console.log(getIndexesOf("z", "banana")); //should return an empty array [] since there are no “z” characters in “banana”
// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array

function removeAllValues(arr,val) {
    return arr.filter(function(value) {
        return val !== value;
    })
}
// Example:
console.log(removeAllValues([1, 2, 3], 2)); //should return [1, 3]
// Example 2:
console.log(removeAllValues([2, 2, 3, 4, 5, 2, 2], 2)); //should return [3, 4, 5]
// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
function firstTenFibonacciNumbers(){
    let x = 0;
    let y = 1;
    let arr = [x,y];
    for(let f=2;f<10;f++){
        y = y + x;
        x = y - x;
        arr.push(y);
    }
    console.log (arr);
}
firstTenFibonacciNumbers();
// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers
function getNFibonacci(n){
    let x = 0;
    let y = 1;
    let arr = [x,y];
    for(let f=2;f<n;f++){
        y = y + x;
        x = y - x;
        arr.push(y);
    }
    console.log (arr);
}
getNFibonacci(10);
// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
function moveFirstToLast(arr) {
    return arr.push(arr.shift());
}
console.log(moveFirstToLast([1, 2, 3, 4])) //should return [2, 3, 4, 1]

// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
function zip(arr1,arr2) {
    var zipped = []
    if (arr1.length === arr2.length){
        for(var z=0;z<arr1.length;z++){
            zipped.push([arr1[z],arr2[z]]);
        }
    }
    zipped.forEach(function(arr){
        console.log(arr);
    })
    return zipped;
}
// Example:
console.log(zip([1, 2, 3], [4, 5, 6])) //returns [[1, 4], [2, 5], [3, 6])
// Example:
console.log(zip(["a", "b", "c"], ["x", "y", "z"])); //returns [[“a”, “x”], [“b”, “y”], [“c”, “z”]]
// Loops & Arrays

// Create a function that takes in two arrays of elements, including numbers.
// If all numbers added together in the first array is equal to all the number inputs added in the second array,
// return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric
// elements. –
var arr1 = ["bob", 1, true, 1, 2];
var arr2 = [2, null, undefined, 0, 2, "apple"]
// example Function(arr1, arr2) // returns true

function arrays(arr1,arr2){
    var total1 = 0;
    var total2 = 0;
    arr1.forEach(function(val){
        if(typeof val === "number"){
            total1 += val;
        }
    })
    arr2.forEach(function(val){
        if(typeof val === "number"){
            total2 += val;
        }
    })
    return total1 === total2;
}

console.log(arrays(arr1,arr2));


// function arrays(arr1,arr2){
// var nums1 = arr1.filter(function(val){
//     return typeof val === "number";
// })
// var nums2 = arr2.filter(function(val){
//     return typeof val === "number";
// })
// var sum1 = nums1.reduce(function(a,b){
//     return a+b;
// })
// var sum2 = nums2.reduce(function(a,b){
//     return a+b;
// })
// return sum1 === sum2;
// }