window.addEventListener('DOMContentLoaded', () => {
  // Greeting based on time of day
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

  // Dark/Light Mode Toggle
  const modeToggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  if (modeToggleButton) {
    // Apply saved theme
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      modeToggleButton.textContent = 'light';
    } else {
      body.classList.add('light-mode');
      modeToggleButton.textContent = 'dark';
    }

    // Toggle function
    modeToggleButton.addEventListener('click', function () {
      if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        modeToggleButton.textContent = 'light';
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.replace('dark-mode', 'light-mode');
        modeToggleButton.textContent = 'dark';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    window.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });
  }
});
