/// 1- JavaScript fundamentals language

//  1.1 - Classes and objects

//  I can use objects with functions as parameters:
user = {
    name: "Ewerton",
    age: 36,
    greetings() {
        console.log(`Greetings ${user.name}!`)
    }
}

user.greetings()


//  1.2 - Arrays & Methods like map()

//  Find Index method
//Can return the index of a specific item in the array
const languages = ["Python", "JavaScript", "Go", "C#", "C++"];
const specific_index = languages.findIndex((item) => {
    return item === 'C#'
});
//  The code above even shorter:
// const specific_index = languages.findIndex((item) => item === 'C#');
console.log(specific_index);

//  Map method (It can transform every item and return the transformed )
const transformed_array = languages.map((item) => item + '!');
console.log(transformed_array); //Output: ["Python!", "JavaScript!", "Go!", "C#!", "C++!"] 


//  1.3 - Desestructuring

//  Desestructuring arrays
const [firstName, lastName] = ["Ewerton", "Lima"]; //variable names is of a free choice
console.log(firstName); //output: "Ewerton"
console.log(lastName); //output: "Lima"

//  Desesctruturing objects
const { name: userName, age } = {
    name: "Ewerton",
    age: 36
}
console.log(userName);
console.log(age);

//  Destruturing in Function Parameter Lists

//  For example, if a function accepts a parameter that will 
// contain an object it can be destructured to "pull out" the 
// object properties and make them available as locally scoped 
// variables (i.e., variables only available inside the function body).
//  Here's an example:

function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
//  Instead of accessing the order properties via the "dot notation" 
// inside the storeOrder function body, you could use destructuring like this:

function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
//  The destructuring syntax is the same as taught in the previous lecture - just 
// without creating a constant or variable manually.

//  Instead, id and currency are "pulled out" of the incoming object (i.e., the 
// object passed as an argument to storeOrder).

//  It's very important to understand, that storeOrder still only takes one parameter 
// in this example! It does not accept two parameters. Instead, it's one single 
// parameter - an object which then just is destructured internally.

//  The function would still be called like this:
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!

//  1.4 - The Spread Operator

//Spread operator in arrays
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies]; 
//  Obs: if const mergeHobbies = [hobbies, newHobbies] the output is gonna be 
// nested arrays (example: [["Sports", "Cooking"],["Reading"]])
console.log(mergedHobbies); //output: ["Sports", "Cooking", "Reading"]

//Spread operator in objects
const user_x = {
    firstname: "Ewerton",
    lastname: "Andrade",
    age: 36,
};

const extendedUser = {
    isAdmin: true,
    ...user_x
};

console.log(extendedUser); 
//output: {
//     "isAdmin": true,
//     "firstname": "Ewerton",
//     "lastname": "Andrade",
//     "age": 36
//   } 