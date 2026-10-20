# Exercise 02: DOM Traversal & Manipulation

Welcome to Module 2! In this module, you will learn how JavaScript interacts with the browser via the **Document Object Model (DOM)**. You will select elements, traverse the DOM hierarchy, update content and attributes, modify styling and classes dynamically, and create and append brand new HTML elements to the page.

---

## 📖 Key Concepts

### 1. What is the DOM?
The **Document Object Model (DOM)** is an object-oriented representation of your HTML document. When a browser loads a webpage, it parses the HTML and constructs an in-memory tree of nodes. JavaScript uses the global `document` object to inspect and manipulate this tree in real time.

### 2. Selecting Elements: `querySelector` & `querySelectorAll`
- **`document.querySelector(selector)`**: Returns the *first* element in the document matching the specified CSS selector (or `null` if none match).
  ```javascript
  const heading = document.querySelector("#page-title");
  const firstButton = document.querySelector(".btn-primary");
  ```
- **`document.querySelectorAll(selector)`**: Returns a static `NodeList` containing *all* matching elements. You can loop over a NodeList with `.forEach()`.
  ```javascript
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => console.log(card));
  ```

### 3. Navigating DOM Nodes (Traversal)
Elements exist in a tree hierarchy with parental, child, and sibling relationships:
- **Parent:** `element.parentElement`
- **Children:** `element.children` (HTMLCollection of element children), `element.firstElementChild`, `element.lastElementChild`
- **Siblings:** `element.nextElementSibling`, `element.previousElementSibling`

### 4. Updating Content & Attributes
- **`textContent`**: Gets or sets the text inside an element (safe from XSS; does not parse HTML tags).
- **`innerHTML`**: Gets or sets HTML markup inside an element (parses tags like `<strong>`, `<p>`).
- **Attributes:** `element.getAttribute('src')`, `element.setAttribute('src', 'new-image.jpg')`, `element.removeAttribute('disabled')`.

### 5. Styling & Dynamic CSS Classes
- **Inline Styles:** `element.style.color = '#38bdf8';` (Use camelCase for CSS properties, like `backgroundColor`).
- **Class Manipulation (`classList`):** The preferred, cleanest way to alter appearance:
  - `element.classList.add('active')`
  - `element.classList.remove('hidden')`
  - `element.classList.toggle('highlight')`
  - `element.classList.contains('active')`

### 6. Creating and Appending Elements
To add new content dynamically:
1. Create the element: `const newCard = document.createElement('div');`
2. Configure it: `newCard.className = 'card'; newCard.textContent = 'New Card';`
3. Attach it to the page: `container.appendChild(newCard);` (or `container.append(newCard);`)
4. Remove an element: `element.remove();`

---

## 🛠️ Step-by-Step Instructions

1. Open [dom-manipulation.js](file:///Users/stantonwjones/dev/FullStackJS-103/02-dom-manipulation/dom-manipulation.js).
2. Open the page in your browser by previewing [index.html](file:///Users/stantonwjones/dev/FullStackJS-103/02-dom-manipulation/index.html) (via `npx serve .` or VS Code Live Server).
3. Complete the numbered `TODO` steps:
   - **Step 1:** Select single and multiple elements using `document.querySelector` and `document.querySelectorAll`.
   - **Step 2:** Traverse between parent, child, and sibling nodes.
   - **Step 3:** Update element text with `textContent`, insert formatted markup with `innerHTML`, and modify element attributes.
   - **Step 4:** Adjust inline styles and toggle CSS classes with `classList`.
   - **Step 5:** Create a new element using `document.createElement`, set its properties, append it into the DOM tree, and remove an unwanted placeholder element.

---

> [!TIP]
> **Use `textContent` for plain text; use `innerHTML` only when you need HTML tags**
> Assigning untrusted user input directly to `innerHTML` can introduce security vulnerabilities (Cross-Site Scripting, or XSS). When only displaying text, always prefer `textContent`.

> [!NOTE]
> **`NodeList` vs Array**
> `querySelectorAll()` returns a `NodeList`. While modern browsers support `.forEach()` on NodeLists, if you need array methods like `.map()` or `.filter()`, you can convert it using `Array.from(document.querySelectorAll(...))`.
