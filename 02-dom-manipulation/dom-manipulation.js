/**
 * Exercise 02: DOM Traversal & Manipulation
 * Complete each numbered TODO step below.
 */

// ==========================================
// TODO: Step 1 - Selecting Elements
// ==========================================
// 1a. Select the element with the ID 'dashboard-title' using document.querySelector.
//     Store it in a variable named 'titleElement'.
const titleElement = null; // Replace with document.querySelector('#dashboard-title')

// 1b. Select ALL elements with the class 'stat-card' using document.querySelectorAll.
//     Store them in a variable named 'statCards'.
const statCards = null; // Replace with document.querySelectorAll('.stat-card')



// ==========================================
// TODO: Step 2 - Navigating DOM Nodes (Parent, Child, Sibling)
// ==========================================
// 2a. Select '#card-users'. Then find and store its parent container using the .parentElement property.
//     Store the parent in a variable named 'metricsContainer'.
const usersCard = document.querySelector('#card-users');
const metricsContainer = null; // Replace with usersCard.parentElement

// 2b. From 'metricsContainer' (or '#metrics-grid'), access its first child card element using .firstElementChild.
//     Store it in a variable named 'firstCard'.
const firstCard = null; // Replace with your navigation code

// 2c. From 'usersCard', access its next sibling card element using .nextElementSibling.
//     Store it in a variable named 'nextCard'.
const nextCard = null; // Replace with usersCard.nextElementSibling



// ==========================================
// TODO: Step 3 - Modifying Content & Attributes
// ==========================================
// 3a. Update the textContent of 'titleElement' to "Production Cloud Dashboard".
if (titleElement) {
  // Set titleElement.textContent here:
}

// 3b. Select the '#status-banner' element.
//     Update its innerHTML to include strong text:
//     "<strong>All Systems Operational</strong> &mdash; 99.98% Uptime"
const statusBanner = document.querySelector('#status-banner');
if (statusBanner) {
  // Set statusBanner.innerHTML here:
}

// 3c. Update the 'data-status' attribute on 'statusBanner' from "pending" to "active" using setAttribute.
if (statusBanner) {
  // Call statusBanner.setAttribute('data-status', 'active') here:
}

// 3d. Update the textContent of '#primary-announcement' to:
//     "Scheduled maintenance completed successfully."
const announcement = document.querySelector('#primary-announcement');
if (announcement) {
  // Set announcement.textContent here:
}



// ==========================================
// TODO: Step 4 - Styling & CSS Classes (classList)
// ==========================================
// 4a. Update inline styles on 'usersCard':
//     Set borderLeftColor to '#10b981' and borderLeftWidth to '4px'.
if (usersCard) {
  // usersCard.style.borderLeftColor = ...
  // usersCard.style.borderLeftWidth = ...
}

// 4b. Select '#card-latency'. Add the class 'highlight' using classList.add().
const latencyCard = document.querySelector('#card-latency');
if (latencyCard) {
  // latencyCard.classList.add('highlight');
}

// 4c. Select '#metrics-badge'. Toggle the class 'badge-active' using classList.toggle().
const metricsBadge = document.querySelector('#metrics-badge');
if (metricsBadge) {
  // metricsBadge.classList.toggle('badge-active');
}



// ==========================================
// TODO: Step 5 - Creating, Appending & Removing Elements
// ==========================================
// 5a. Create a brand new 'div' element using document.createElement('div').
//     Store it in a variable named 'newCard'.
const newCard = null; // Replace with document.createElement('div')

if (newCard) {
  // 5b. Give 'newCard' the class name 'stat-card'.
  // newCard.className = 'stat-card';

  // 5c. Set the innerHTML of 'newCard' to:
  // `<h3>Error Rate</h3>
  //  <div class="stat-value">0.01%</div>
  //  <span class="stat-status">Well below threshold</span>`

  // 5d. Append 'newCard' to '#metrics-grid' using appendChild() or append().
}

// 5e. Select the placeholder card with ID '#card-placeholder' and remove it from the DOM using .remove().
const placeholderCard = document.querySelector('#card-placeholder');
if (placeholderCard) {
  // placeholderCard.remove();
}



// ==========================================
// Verification Log
// ==========================================
console.log("=== Exercise 02 DOM Manipulation loaded ===");
if (titleElement) console.log("Dashboard title updated:", titleElement.textContent);
if (statusBanner) console.log("Banner data-status:", statusBanner.getAttribute('data-status'));
