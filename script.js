// Simple click event for the menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (event) => {
        alert(`Navigating to ${event.target.innerText}`);
        // Here you could add page navigation logic (e.g., window.location or smooth scroll)
    });
});

// Flashing "Press Start" - stop blinking when clicked
const startText = document.querySelector('.start-text');
startText.addEventListener('click', () => {
    startText.style.animation = 'none'; // Stop the blinking when "Press Start" is clicked
});
