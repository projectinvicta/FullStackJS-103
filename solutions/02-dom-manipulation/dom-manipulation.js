/**
 * Exercise 02 Solution: DOM Traversal & Manipulation
 */

// ==========================================
// Step 1 - Selecting Elements
// ==========================================
// 1a. Select single element by ID
const titleElement = document.querySelector('#dashboard-title');

// 1b. Select all elements matching class
const statCards = document.querySelectorAll('.stat-card');


// ==========================================
// Step 2 - Navigating DOM Nodes (Parent, Child, Sibling)
// ==========================================
// 2a. Parent element navigation
const usersCard = document.querySelector('#card-users');
const metricsContainer = usersCard ? usersCard.parentElement : null;

// 2b. First child element navigation
const firstCard = metricsContainer ? metricsContainer.firstElementChild : null;

// 2c. Next sibling element navigation
const nextCard = usersCard ? usersCard.nextElementSibling : null;


// ==========================================
// Step 3 - Modifying Content & Attributes
// ==========================================
// 3a. Update textContent
if (titleElement) {
  titleElement.textContent = "Production Cloud Dashboard";
}

// 3b. Update innerHTML with formatted markup
const statusBanner = document.querySelector('#status-banner');
if (statusBanner) {
  statusBanner.innerHTML = "<strong>All Systems Operational</strong> &mdash; 99.98% Uptime";
  // 3c. Update data-status attribute
  statusBanner.setAttribute('data-status', 'active');
}

// 3d. Update announcement text
const announcement = document.querySelector('#primary-announcement');
if (announcement) {
  announcement.textContent = "Scheduled maintenance completed successfully.";
}


// ==========================================
// Step 4 - Styling & CSS Classes (classList)
// ==========================================
// 4a. Inline styling
if (usersCard) {
  usersCard.style.borderLeftColor = '#10b981';
  usersCard.style.borderLeftWidth = '4px';
}

// 4b. Add class using classList.add
const latencyCard = document.querySelector('#card-latency');
if (latencyCard) {
  latencyCard.classList.add('highlight');
}

// 4c. Toggle class using classList.toggle
const metricsBadge = document.querySelector('#metrics-badge');
if (metricsBadge) {
  metricsBadge.classList.toggle('badge-active');
}


// ==========================================
// Step 5 - Creating, Appending & Removing Elements
// ==========================================
// 5a. Create new element
const newCard = document.createElement('div');

// 5b. Assign class
newCard.className = 'stat-card';

// 5c. Set content
newCard.innerHTML = `
  <h3>Error Rate</h3>
  <div class="stat-value">0.01%</div>
  <span class="stat-status">Well below threshold</span>
`;

// 5d. Append to container
const metricsGrid = document.querySelector('#metrics-grid');
if (metricsGrid) {
  metricsGrid.appendChild(newCard);
}

// 5e. Remove placeholder card
const placeholderCard = document.querySelector('#card-placeholder');
if (placeholderCard) {
  placeholderCard.remove();
}


// ==========================================
// Verification Log
// ==========================================
console.log("=== Exercise 02 DOM Manipulation Solution Loaded ===");
console.log("Dashboard title:", titleElement?.textContent);
console.log("Banner status:", statusBanner?.getAttribute('data-status'));
console.log("First card found:", firstCard?.id);
console.log("Next sibling card found:", nextCard?.id);
