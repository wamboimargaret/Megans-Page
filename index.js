// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    const target = document.querySelector(this.getAttribute('href')); // Get target section

    target.scrollIntoView({
      behavior: 'smooth' // Enable smooth scrolling
    });
  });
});
