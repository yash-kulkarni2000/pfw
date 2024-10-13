// Simple click event for the menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (event) => {
        const itemName = event.target.innerText.trim();  // Make sure there's no extra space
        
        if (itemName === 'Projects') {
            window.location.href = 'projects.html';  // Example for "Projects" page
        } else if (itemName === 'Resume') {
            window.location.href = 'resume.html';  // Example for "Resume" page
        } else if (itemName === 'Contact') {
            window.location.href = 'contact.html';  // Example for "Contact" page
        } else if (itemName === 'About Me') {
            window.location.href = 'about.html';  // Navigate to "About Me" page
        }
    });
});

// Flashing "Press Start" - stop blinking when clicked
const startText = document.querySelector('.start-text');
startText.addEventListener('click', () => {
    startText.style.animation = 'none'; // Stop the blinking when "Press Start" is clicked
});
