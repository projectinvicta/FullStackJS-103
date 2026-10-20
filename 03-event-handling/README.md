# Exercise 03: Event Handling & Interactive Pages

Welcome to Module 3! In this module, you will learn how to make web pages truly interactive by handling user input. You will listen for browser events (`click`, `input`, `submit`, and keyboard keys), inspect the `event` object, prevent default browser form submissions, and dynamically update DOM elements in real-time.

---

## 📖 Key Concepts

### 1. The `addEventListener` Method
In modern JavaScript, we attach event handlers using `.addEventListener(eventName, handlerFunction)`:
```javascript
const button = document.querySelector("#submit-btn");

button.addEventListener("click", (event) => {
  console.log("Button clicked!", event);
});
```

Benefits of `addEventListener`:
- Allows multiple listeners for the same event on a single element.
- Separates JavaScript logic cleanly from HTML markup (unlike inline `onclick="..."` attributes).

### 2. The `event` Object & `preventDefault()`
Whenever an event fires, the browser passes an **`event` object** to your callback function. This object contains crucial information:
- **`event.target`**: The specific DOM element that triggered the event.
- **`event.key`**: The name of the key pressed (for keyboard events like `"Enter"` or `"Escape"`).
- **`event.preventDefault()`**: Prevents the browser's default action.
  > ⚠️ When submitting an HTML `<form>`, browsers default to refreshing the entire page or sending an HTTP GET/POST request. In single-page applications, we call `event.preventDefault()` so we can handle the submission with JavaScript without refreshing!

### 3. Common Event Types
- **`submit`**: Fires on a `<form>` when submitted via button click or pressing Enter inside an input.
- **`click`**: Fires when a mouse or touch tap occurs on an element.
- **`input`**: Fires immediately whenever the value of an `<input>` or `<textarea>` changes (perfect for real-time live search/filtering).
- **`keydown`**: Fires when a keyboard key is pressed down.

### 4. Dynamic UI Updates in Response to Events
An interactive web application follows this event-driven loop:
1. **Listen:** Detect user action (`submit`, `click`, `input`).
2. **Read:** Extract data from inputs or `event.target`.
3. **Update:** Modify the DOM (append new items, toggle classes, update counters).

---

## 🛠️ Step-by-Step Instructions

1. Open [events.js](file:///Users/stantonwjones/dev/FullStackJS-103/03-event-handling/events.js).
2. Open [index.html](file:///Users/stantonwjones/dev/FullStackJS-103/03-event-handling/index.html) in your browser.
3. Follow the numbered `TODO` steps:
   - **Step 1:** Add a `'submit'` event listener to `#task-form` and call `event.preventDefault()`.
   - **Step 2:** Read the input value, validate it, and dynamically create a new task `<li>` with "Complete" and "Delete" buttons.
   - **Step 3:** Attach `'click'` handlers to mark tasks completed and delete tasks, while maintaining the task counter.
   - **Step 4:** Add an `'input'` event listener to the live filter search bar (`#filter-input`) to show/hide matching tasks.
   - **Step 5:** Add a `'keydown'` listener to `#task-input` to clear the field whenever the student presses `Escape`.

---

> [!TIP]
> **Always call `event.preventDefault()` on form submit handlers**
> If your page seems to flash or refresh immediately when you click submit, check if you called `event.preventDefault()` at the very beginning of your form submit handler.

> [!NOTE]
> **Event Delegation**
> When adding items dynamically to a list, you can either attach event listeners to each new button when creating it, or attach a single listener to the parent list (`#task-list`) and inspect `event.target`. We'll explore both techniques!
