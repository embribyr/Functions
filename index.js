// 1. Hello user 
// Write a function which greets the user. The function should receive one argument, a string. We can assume the string is a person’s name. We’d like the function to return "Hello " and then the name. We should be able to see the output in the console.

// Examples:

// console.log(greeter("Yvonne"));
// // outputs to the console: Hello Yvonne

// let myGreeting = greeter("gregor");
// console.log(myGreeting);
// // outputs: Hello gregor

function greeter(name) {
  console.log("Hello " + name);
}

greeter("Emma");

let myGreeting = greeter("again");


// 2. What type? 
// Write a function which returns the type of the argument we pass in.

// console.log(checkType(12));
// // ouputs: number

function checkType(value) {
let values = [Number, String, Array];
 return typeof value;
}
 console.log(checkType(12));

 //OR

 function checkTypeAgain(value) {
   return typeof value;
}
console.log(checkTypeAgain(12))

// let typeOf = "this is a string";
// console.log(checkType(typeOf));
// // outputs: string
 
var typeOf = "this is a string";
console.log(checkType(typeOf));

// Bonus: Examine the output we get when we check the type of an array. Why does this happen?

var typeOf = ["apples", "bananas", "oranges"];
console.log(checkType(typeOf));

//we get 'object'...??! ...Because arrays are a type of object. Using Array.isArray() can check whether something is specifically an array.


// 3. Check length 
// Write a function which returns the length of the string we pass in.
// const theLength = checkLength("Around the World");
// console.log(theLength);


function theLength(string) {
    let count = 0;
    for(let checkLength of string) {
        count++;
    }
    return count;
}
console.log(theLength("Around the World"));
// outputs: 16

const checkLength = theLength;
console.log(checkLength("One More Time"));
// outputs: 13

// Bonus: Can we use the length property on other types of //variable? What else might this be useful for?

//we could use it to find the length of an array or to identify a particular item in a list.