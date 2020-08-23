
// Create an object calculator with three methods:
//
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result
let calculator = {
    // ... your code ...
    read(){
        this.value1= Number(prompt("Enter number"));
        this.value2= Number(prompt("Enter another"));
    },
    sum() {
        return this.value1 + this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    }
};
// Test Case
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// Chaining object methods
// There’s a ladder object that allows to go up and down:
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
    }
};
// Now, if we need to make several calls in sequence, can do it like this:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Modify the code of up, down and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep(); //

// Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
// size of object
console.log(Object.keys(student).length);


// Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
var studentA = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}
function findKeys(arg) {
    var objectKeys = [];
    if(typeof arg !== "object"){
        return [];
    }
    if(Object.keys(arg).length>0) {
        Object.keys(arg).forEach(function (key) {
            objectKeys.push(key);
            console.log(`${key}:`, arg[key]);

        })
    }
    return objectKeys.join(" ");
}
console.log(findKeys(studentA));
// Sample Output: name,sclass,rollno

// Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
library.forEach(function(book,ind){
    console.log(`
        Book #${ind+1}
        Title: ${book.title}
        Author: ${book.author}
        Status: ${book.readingStatus}
    `)
})

// Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

var bookLibrary = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
var sortedLibrary = [];
bookLibrary.forEach(function (book,ind) {
    sortedLibrary.push({});
    Object.keys(book).sort().forEach(function(k){
        sortedLibrary[ind][k] = bookLibrary[ind][k];
    });
})
sortedLibrary.forEach(function (book) {
    console.log(book);
})

// Write a JavaScript function to print all the methods in an JavaScript object.
var methodsInObject = [];
Object.keys(calculator).forEach(function (value) {
    if(typeof calculator[value]==="function"){
        methodsInObject.push(value);
    }
})
// Write a JavaScript function to check whether an object contains given property.
function containsProperty(obj,property) {
    return obj.hasOwnProperty(property);
}
console.log(containsProperty(calculator,"mul"));