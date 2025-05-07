// Greeting based on time of day
window.addEventListener('DOMContentLoaded', () => {
  const greeting = document.getElementById('greeting');
  if (greeting) {
    const hour = new Date().getHours();
    let message = "Hello!";
    if (hour < 12) {
      message = "Good Morning!";
    } else if (hour < 18) {
      message = "Good Afternoon!";
    } else {
      message = "Good Evening!";
    }
    greeting.textContent = message;
  }
});

// Contact form validation using regex
function validateContactForm() {
  // Get form elements
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const formMsg = document.getElementById("formMsg");

  // Regular expression for name (only letters and spaces allowed)
  const nameRegex = /^[A-Za-z\s]+$/;
  // Regular expression for email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  // Regular expression for phone number (basic format + country code)
  const phoneRegex = /^\+?[0-9]{1,4}?[-.\s]?[0-9]{1,3}[-.\s]?[0-9]{3,4}[-.\s]?[0-9]{3,4}$/;
  
  // Validate full name
  if (!nameRegex.test(fullname)) {
    formMsg.textContent = "Please enter a valid full name (letters and spaces only).";
    return false;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    return false;
  }

  // Validate phone number (optional)
  if (phone && !phoneRegex.test(phone)) {
    formMsg.textContent = "Please enter a valid phone number.";
    return false;
  }

  // Validate message
  if (message.trim() === "") {
    formMsg.textContent = "Please enter a message.";
    return false;
  }

  // If everything is valid
  formMsg.textContent = "Thank you for your message! I'll get back to you soon.";
  formMsg.style.color = "green"; // Display success message
  return true; // Allow form submission
}


// Toggle light/dark mode
// Get the toggle button and body element
const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

// Check for saved user preference in localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggleButton.textContent = "Switch to Light Mode"; // Update button text
} else {
  body.classList.add("light-mode");
  themeToggleButton.textContent = "Switch to Dark Mode"; // Update button text
}

// Toggle between dark and light mode
function toggleTheme() {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeToggleButton.textContent = "Switch to Light Mode"; // Update button text
    localStorage.setItem("theme", "dark"); // Save theme preference
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    themeToggleButton.textContent = "Switch to Dark Mode"; // Update button text
    localStorage.setItem("theme", "light"); // Save theme preference
  }
}


// Show/hide project details
function toggleDetails(button) {
  const details = button.nextElementSibling;
  if (details.style.display === 'none') {
    details.style.display = 'block';
    button.textContent = 'Hide Details';
  } else {
    details.style.display = 'none';
    button.textContent = 'Show Details';
  }
}
