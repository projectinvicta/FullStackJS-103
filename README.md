# FullStackJS-103: Vanilla JavaScript in the Browser

Welcome to **FullStackJS-103**! This repository is an interactive, step-by-step GitHub Codespaces template designed to guide you through the essentials of client-side JavaScript without any external libraries or frameworks.

In this workshop, you will learn core programming constructs—variables, functions, and control flow loops—and build dynamic, interactive web pages using the browser's Document Object Model (DOM) and event-handling APIs.

---

## 📅 Lesson Outline (90 Minutes)

| Time | Module | Key Topics | Focus |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:05** | **Introduction** | Client-side JavaScript overview, browser execution model, and workshop goals | Orientation & Setup |
| **00:05 - 00:30** | **[1. Core Fundamentals](./01-core-fundamentals/)** | `const` vs `let`, primitive types, functions (declarations & arrow functions), loops, array iteration | Core JS Programming |
| **00:30 - 01:00** | **[2. DOM Traversal & Manipulation](./02-dom-manipulation/)** | `querySelector`, navigating parent/child/sibling nodes, updating content & styles, dynamic element creation | Document Object Model |
| **01:00 - 01:20** | **[3. Event Handling & Interactive Pages](./03-event-handling/)** | `addEventListener` (click, input, submit), event objects, `preventDefault()`, building an interactive app | User Interactivity |
| **01:20 - 01:30** | **Review & Synthesis** | Live coding recap, key takeaways, and next steps in frontend engineering | Wrap-up & Q&A |

---

## 🚀 Getting Started

### 1. Verify Your Environment
Ensure your development tools are accessible:
```bash
node -v
npm -v
```

### 2. Previewing Web Pages in Codespaces / VS Code
Because this workshop explores browser-based JavaScript, each exercise contains an HTML file that renders in your browser.

You can preview exercises using any of the following methods:
- **Built-in Static Server:**
  ```bash
  npx serve .
  ```
  VS Code will automatically detect port `3000` (or `5000`) and display a preview notification.
- **VS Code Live Server Extension:** Right-click on any `index.html` file and select **"Open with Live Server"**.
- **Run scripts directly in Node.js (Module 1):**
  ```bash
  node 01-core-fundamentals/fundamentals.js
  ```

---

## 📂 Workshop Modules

Complete the exercises sequentially:

1. 📂 **[01-core-fundamentals](./01-core-fundamentals/)**
   - Practice variable scoping (`const`, `let`), primitives, writing modular functions, and iterating over data structures using loops and modern array methods.
2. 📂 **[02-dom-manipulation](./02-dom-manipulation/)**
   - Select and traverse DOM elements, update textual content and HTML markup, modify inline styles and CSS classes dynamically, and insert new elements onto the page.
3. 📂 **[03-event-handling](./03-event-handling/)**
   - Wire up click, keyboard, and form submission events. Prevent default browser behaviors, inspect event payloads, and build an interactive task tracker UI.

---

## 💡 Checking Solutions

If you get stuck or want to compare your implementation with reference code, check the **[solutions/](./solutions/)** directory. It contains completed, verified versions of every exercise.
