/**
 * Exercise 03: Event Handling & Interactive Pages
 * Complete each numbered TODO step below.
 */

// ==========================================
// Select DOM Elements
// ==========================================
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const totalCountElement = document.querySelector('#total-count');
const completedCountElement = document.querySelector('#completed-count');
const filterInput = document.querySelector('#filter-input');

// Helper function to keep task counters in sync
function updateCounters() {
  const allTasks = taskList.querySelectorAll('.task-item');
  const completedTasks = taskList.querySelectorAll('.task-item.completed');
  
  if (totalCountElement) totalCountElement.textContent = allTasks.length;
  if (completedCountElement) completedCountElement.textContent = completedTasks.length;
}

// Initial counter update
updateCounters();


// ==========================================
// TODO: Step 1 - Form Submit Event & preventDefault()
// ==========================================
// Attach a 'submit' event listener to 'taskForm'.
// In the callback function:
// 1. Call event.preventDefault() to stop the page from refreshing.
// 2. Read the value from 'taskInput.value.trim()'.
// 3. If the value is empty, return early.
// 4. Call your task creation logic (Step 2).

if (taskForm) {
  taskForm.addEventListener('submit', (event) => {
    // Write your Step 1 code here:

  });
}


// ==========================================
// TODO: Step 2 - Dynamic Task Item Creation
// ==========================================
// Write a helper function 'createTaskItem(taskText)' that:
// 1. Creates a new 'li' element with document.createElement('li').
// 2. Adds the class 'task-item' to the new element.
// 3. Sets the innerHTML:
//    `<span class="task-text">${taskText}</span>
//     <div class="task-actions">
//       <button class="btn-sm btn-complete">Complete</button>
//       <button class="btn-sm btn-delete">Delete</button>
//     </div>`
// 4. Returns the newly created 'li' element.

function createTaskItem(taskText) {
  // Write your Step 2 code here:

}


// ==========================================
// TODO: Step 3 - Event Delegation for Click Events (Complete & Delete)
// ==========================================
// Attach a single 'click' event listener to the parent 'taskList' container:
// 1. Inspect 'event.target'.
// 2. If event.target has the class 'btn-complete':
//    - Find the parent task item using event.target.closest('.task-item').
//    - Toggle the 'completed' class on that task item using classList.toggle('completed').
//    - Call updateCounters().
// 3. If event.target has the class 'btn-delete':
//    - Find the parent task item using event.target.closest('.task-item').
//    - Remove the element from the DOM with taskItem.remove().
//    - Call updateCounters().

if (taskList) {
  taskList.addEventListener('click', (event) => {
    // Write your Step 3 code here:

  });
}


// ==========================================
// TODO: Step 4 - Real-time Filtering with 'input' Event
// ==========================================
// Attach an 'input' event listener to 'filterInput':
// 1. Get the current search text: const query = event.target.value.toLowerCase();
// 2. Select all task items inside 'taskList': document.querySelectorAll('.task-item');
// 3. Loop over each task item:
//    - Get the item's text from its '.task-text' element: item.querySelector('.task-text').textContent.toLowerCase();
//    - If the text includes 'query', remove the class 'hidden' with item.classList.remove('hidden');
//    - If the text does NOT include 'query', add the class 'hidden' with item.classList.add('hidden');

if (filterInput) {
  filterInput.addEventListener('input', (event) => {
    // Write your Step 4 code here:

  });
}


// ==========================================
// TODO: Step 5 - Keyboard Events ('keydown')
// ==========================================
// Attach a 'keydown' event listener to 'taskInput':
// 1. Check if 'event.key === "Escape"'.
// 2. If true, clear the input field by setting 'taskInput.value = ""'.

if (taskInput) {
  taskInput.addEventListener('keydown', (event) => {
    // Write your Step 5 code here:

  });
}


console.log("=== Exercise 03 Event Handling loaded ===");
