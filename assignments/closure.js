// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function child(){
  
  function dad(){
    let allowance =  "$20"
    return `the dad gave his kid ${allowance}`
  }
  return dad()
};
console.log(child())
console.log(allowance)


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// // ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   return function newCounter(){
//     let count = 0
//     count =+ 1
//     return count
//   }
// };
// // Example usage: const newCounter = counter();
//  Counter(); // 1
//  Counter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
