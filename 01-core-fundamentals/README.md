# Exercise 01: Core Fundamentals (Variables, Functions & Loops)

Welcome to Module 1! In this module, you will master the foundational building blocks of JavaScript: declaring variables with modern scoping, working with primitive types, defining functions (both declarations and arrow functions), and controlling execution flow with loops and array iteration methods.

---

## 📖 Key Concepts

### 1. Variables and Scoping: `const` vs `let`
Think of variables like storage bins with labels:
- **`const` (Constant):** A locked bin. Once you place a value inside, you cannot reassign it to a completely different value. This should be your default choice in modern JavaScript to prevent accidental bugs.
- **`let`:** An unlocked bin. You can change what's inside at any point later in your program (e.g., counters, accumulated totals, state flags).
- **Avoid `var`:** Legacy JavaScript used `var`, which has function-scoping rules that can cause hoisting bugs and variable leakage across block statements.

### 2. Primitive Data Types
JavaScript has five primary primitive types:
- **String:** Textual data wrapped in quotes (`"hello"` or `'world'` or template literals `` `Score: ${score}` ``).
- **Number:** Numeric values, both integers and floating-point decimals (`42`, `3.14`).
- **Boolean:** Logical truth values (`true` or `false`).
- **Null:** Intentional absence of any object value (`null`).
- **Undefined:** A variable that has been declared but not yet assigned a value (`undefined`).

### 3. Functions: Reusable Logic
Functions allow you to bundle a block of code and run it multiple times with different inputs:
- **Function Declaration:**
  ```javascript
  function calculateDiscount(price, discountPercent) {
    return price - (price * (discountPercent / 100));
  }
  ```
- **Arrow Function:**
  ```javascript
  const formatPrice = (amount) => `$${amount.toFixed(2)}`;
  ```

### 4. Loops & Array Iteration
When working with collections of data:
- **`for` loop:** Useful when you need index-based iteration or need to know the exact loop count.
- **`while` loop:** Ideal when you want to continue looping until a specific condition becomes false.
- **Array methods (`forEach`, `map`, `filter`):** Modern functional approaches to processing array elements cleanly without manual index management.

---

## 🛠️ Step-by-Step Instructions

1. Open [fundamentals.js](file:///Users/stantonwjones/dev/FullStackJS-103/01-core-fundamentals/fundamentals.js).
2. Complete the numbered `TODO` sections:
   - **Step 1:** Declare variables for each of the 5 primitive types using `const` and `let`.
   - **Step 2:** Implement a standard function declaration `calculateTotal(price, taxRate)` and an arrow function `formatCurrency(amount)`.
   - **Step 3:** Use a `for` loop to sum an array of numbers, and a `while` loop to process an inventory countdown.
   - **Step 4:** Practice array iteration methods (`forEach`, `filter`, and `map`) to inspect, filter, and transform an array of product objects.
   - **Step 5:** Run the script and verify the output in the terminal or browser console.

---

## 🔍 How to Run & Verify

You can run your code in either of two ways:

### Option A: In the Terminal with Node.js
```bash
node 01-core-fundamentals/fundamentals.js
```

### Option B: In the Web Browser
Start a local web server from the workspace root:
```bash
npx serve .
```
Open your browser to the URL displayed (e.g. `http://localhost:3000/01-core-fundamentals/`), open DevTools (Press `F12` or `Cmd+Option+I`), and check the **Console** tab to view your output!

---

> [!TIP]
> **Prefer `const` over `let`**
> Always declare variables with `const` first. Only change them to `let` if you know you will reassign the variable later in your code. This signals intent and prevents subtle reassignment bugs.

> [!NOTE]
> **Browser vs Node.js Execution**
> Core JavaScript constructs (variables, functions, loops, objects, arrays) behave identically in Node.js and the browser because both environments execute JavaScript using modern ECMAScript standards (and both use the V8 engine under the hood).
