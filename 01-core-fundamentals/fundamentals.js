/**
 * Exercise 01: Core Fundamentals
 * Complete each numbered TODO step below.
 */

// ==========================================
// TODO: Step 1 - Variables & Primitive Types
// ==========================================
// 1a. Declare a 'const' named 'storeName' and assign it a string (e.g. "Dev Diner").
// 1b. Declare a 'let' named 'itemCount' and assign it a number (e.g. 5).
// 1c. Declare a 'const' named 'isOpen' and assign it a boolean (e.g. true).
// 1d. Declare a 'const' named 'specialOffer' and assign it the value null.
// 1e. Declare a 'let' named 'closingTime' without giving it an initial value (it will be undefined).

// Write your Step 1 code below:



// Reassign 'itemCount' to demonstrate how 'let' variables can be modified (e.g., itemCount = itemCount + 2):



// ==========================================
// TODO: Step 2 - Functions & Control Flow
// ==========================================
// 2a. Write a function declaration named 'calculateTotal' that accepts two parameters:
//     - 'price' (number)
//     - 'taxRate' (number, e.g. 0.08 for 8%)
//     It should return the total price including tax: price + (price * taxRate).

// Write calculateTotal here:



// 2b. Write an arrow function named 'formatCurrency' that accepts an 'amount' (number)
//     and returns a string formatted with a dollar sign and 2 decimal places (e.g. "$15.99").
//     Hint: Use amount.toFixed(2) and a template literal `$${...}`.

// Write formatCurrency here:



// ==========================================
// TODO: Step 3 - Loops & Iteration
// ==========================================
const prices = [12.50, 4.00, 8.75, 22.00, 5.25];

// 3a. Use a standard 'for' loop to iterate over the 'prices' array and compute the sum of all prices.
//     Store the result in a variable named 'sumTotal'.

let sumTotal = 0;
// Write your for loop here:



// 3b. Use a 'while' loop to simulate an inventory countdown.
//     Start with a variable 'stockCount' set to 4.
//     While 'stockCount' is greater than 0, log: `Dispatching item... Remaining: ${stockCount}`
//     Decrement 'stockCount' by 1 on each iteration.

let stockCount = 4;
// Write your while loop here:



// ==========================================
// TODO: Step 4 - Array Iteration Methods
// ==========================================
const inventory = [
  { id: 1, name: "Espresso", price: 3.50, inStock: true },
  { id: 2, name: "Croissant", price: 4.25, inStock: false },
  { id: 3, name: "Cold Brew", price: 4.75, inStock: true },
  { id: 4, name: "Avocado Toast", price: 9.50, inStock: true },
  { id: 5, name: "Bagel", price: 2.50, inStock: false }
];

// 4a. Use .forEach() on 'inventory' to log the name and price of every item.
// Write forEach here:



// 4b. Use .filter() to create a new array 'availableItems' containing only items where 'inStock' is true.
// Write filter here:
const availableItems = []; // Replace with inventory.filter(...)



// 4c. Use .map() on 'availableItems' to create an array 'itemSummaries' of strings formatted as:
//     "<Item Name> - $<Price>" (e.g. "Espresso - $3.50")
// Write map here:
const itemSummaries = []; // Replace with availableItems.map(...)



// ==========================================
// Verification Log Output
// (Uncomment once you have finished the TODOs above)
// ==========================================
/*
console.log("=== Exercise 01 Verification ===");
console.log(`Store: ${storeName} | Open: ${isOpen} | Items: ${itemCount}`);
console.log(`Special Offer: ${specialOffer} | Closing: ${closingTime}`);
console.log(`Subtotal: ${formatCurrency(100)} | With Tax: ${formatCurrency(calculateTotal(100, 0.08))}`);
console.log(`Sum of Prices (for loop): ${formatCurrency(sumTotal)}`);
console.log("Available Items:", itemSummaries);
*/
