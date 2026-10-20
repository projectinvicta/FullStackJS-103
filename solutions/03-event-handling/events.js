/**
 * Exercise 03 Solution: Event Handling & Interactive Pages
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

// Helper function to update counters
function updateCounters() {
  const allTasks = taskList.querySelectorAll('.task-item');
  const completedTasks = taskList.querySelectorAll('.task-item.completed');
  
  if (totalCountElement) totalCountElement.textContent = allTasks.length;
  if (completedCountElement) completedCountElement.textContent = completedTasks.length;
}

// Initial counter update
updateCounters();


// ==========================================
// Step 2 Helper - Create Task Item
// ==========================================
function createTaskItem(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button class="btn-sm btn-complete">Complete</button>
      <button class="btn-sm btn-delete">Delete</button>
    </div>
  `;
  return li;
}


// ==========================================
// Step 1 - Form Submit Event & preventDefault()
// ==========================================
if (taskForm) {
  taskForm.addEventListener('submit', (event) => {
    // 1. Prevent page reload
    event.preventDefault();

    // 2. Read and trim input value
    const text = taskInput.value.trim();

    // 3. Guard against blank submissions
    if (!text) return;

    // 4. Create and append new task
    const newTask = createTaskItem(text);
    taskList.appendChild(newTask);

    // 5. Reset input field and focus
    taskInput.value = '';
    taskInput.focus();

    // 6. Update task counters
    updateCounters();
  });
}


// ==========================================
// Step 3 - Event Delegation for Click Events (Complete & Delete)
// ==========================================
if (taskList) {
  taskList.addEventListener('click', (event) => {
    // Handle 'Complete' button click
    if (event.target.classList.contains('btn-complete')) {
      const taskItem = event.target.closest('.task-item');
      if (taskItem) {
        taskItem.classList.toggle('completed');
        updateCounters();
      }
    }

    // Handle 'Delete' button click
    if (event.target.classList.contains('btn-delete')) {
      const taskItem = event.target.closest('.task-item');
      if (taskItem) {
        taskItem.remove();
        updateCounters();
      }
    }
  });
}


// ==========================================
// Step 4 - Real-time Filtering with 'input' Event
// ==========================================
if (filterInput) {
  filterInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const taskItems = taskList.querySelectorAll('.task-item');

    taskItems.forEach((item) => {
      const taskText = item.querySelector('.task-text')?.textContent.toLowerCase() || '';
      if (taskText.includes(query)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
}


// ==========================================
// Step 5 - Keyboard Events ('keydown')
// ==========================================
if (taskInput) {
  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      taskInput.value = '';
    }
  });
}


console.log("=== Exercise 03 Event Handling Solution Loaded ===");
