/**
 * Exercise 01 Solution: Core Fundamentals
 */

// ==========================================
// Step 1 - Variables & Primitive Types
// ==========================================
// 1a. String
const storeName = "Dev Diner";

// 1b. Number
let itemCount = 5;

// 1c. Boolean
const isOpen = true;

// 1d. Null
const specialOffer = null;

// 1e. Undefined
let closingTime;

// Reassign 'itemCount' to demonstrate mutable 'let'
itemCount = itemCount + 2;


// ==========================================
// Step 2 - Functions & Control Flow
// ==========================================
// 2a. Function Declaration: calculate total with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// 2b. Arrow Function: format currency
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;


// ==========================================
// Step 3 - Loops & Iteration
// ==========================================
const prices = [12.50, 4.00, 8.75, 22.00, 5.25];

// 3a. for loop summing prices
let sumTotal = 0;
for (let i = 0; i < prices.length; i++) {
  sumTotal += prices[i];
}

// 3b. while loop simulating inventory deduction
let stockCount = 4;
while (stockCount > 0) {
  console.log(`Dispatching item... Remaining: ${stockCount}`);
  stockCount--;
}


// ==========================================
// Step 4 - Array Iteration Methods
// ==========================================
const inventory = [
  { id: 1, name: "Espresso", price: 3.50, inStock: true },
  { id: 2, name: "Croissant", price: 4.25, inStock: false },
  { id: 3, name: "Cold Brew", price: 4.75, inStock: true },
  { id: 4, name: "Avocado Toast", price: 9.50, inStock: true },
  { id: 5, name: "Bagel", price: 2.50, inStock: false }
];

// 4a. forEach to log every item
inventory.forEach((item) => {
  console.log(`Item: ${item.name} | Price: ${formatCurrency(item.price)}`);
});

// 4b. filter items in stock
const availableItems = inventory.filter((item) => item.inStock);

// 4c. map formatted summaries
const itemSummaries = availableItems.map((item) => `${item.name} - ${formatCurrency(item.price)}`);


// ==========================================
// Verification Output
// ==========================================
console.log("=== Exercise 01 Verification ===");
console.log(`Store: ${storeName} | Open: ${isOpen} | Items: ${itemCount}`);
console.log(`Special Offer: ${specialOffer} | Closing: ${closingTime}`);
console.log(`Subtotal: ${formatCurrency(100)} | With Tax: ${formatCurrency(calculateTotal(100, 0.08))}`);
console.log(`Sum of Prices (for loop): ${formatCurrency(sumTotal)}`);
console.log("Available Items:", itemSummaries);
