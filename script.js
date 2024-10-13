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


// Function to open a specific tab
function openTab(tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    tabbuttons = document.getElementsByClassName("tab-button");
    
    // Hide all tab content
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove the active class from all buttons
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    
    // Show the specific tab and make the button active
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Set the default tab to open
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("summary").style.display = "block";
    document.querySelector(".tab-button").classList.add("active");
});
