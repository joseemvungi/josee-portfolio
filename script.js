window.addEventListener('DOMContentLoaded', () => {
  // Greeting based on time of day (Home page only)
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

  // Apply dark/light mode on all pages
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
  }

  // Only add toggle functionality if button exists (e.g., on home page)
  const modeToggleButton = document.getElementById('dark-mode-toggle');
  if (modeToggleButton) {
    modeToggleButton.textContent = savedTheme === 'dark' ? 'light' : 'dark';

    modeToggleButton.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
        modeToggleButton.textContent = 'light';
      } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
        modeToggleButton.textContent = 'dark';
      }
    });
  }

  // Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });
  }
});
