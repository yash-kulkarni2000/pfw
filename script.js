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
    document.getElementById("skills").style.display = "block";
    document.querySelector(".tab-button").classList.add("active");
});

// Function to toggle experience items
function toggleExperience(expId) {
    var i, experienceItems, toggleButtons;
    experienceItems = document.getElementsByClassName("experience-item");
    toggleButtons = document.getElementsByClassName("toggle-button");
    
    // Hide all experience items
    for (i = 0; i < experienceItems.length; i++) {
        experienceItems[i].style.display = "none";
        toggleButtons[i].classList.remove("active");
    }
    
    // Show the selected experience item
    document.getElementById(expId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Function to toggle between Master's and Undergraduate education
function toggleEducation(educationLevel) {
    var i, educationContent, educationButtons;
    educationContent = document.getElementsByClassName("education-content");
    educationButtons = document.getElementsByClassName("education-button");

    // Hide all education content
    for (i = 0; i < educationContent.length; i++) {
        educationContent[i].style.display = "none";
    }

    // Remove the active class from all buttons
    for (i = 0; i < educationButtons.length; i++) {
        educationButtons[i].className = educationButtons[i].className.replace(" active", "");
    }

    // Show the selected education content and add the active class to the button
    document.getElementById(educationLevel).style.display = "block";
    event.currentTarget.className += " active";
}

// Set default education to Master's on page load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("masters").style.display = "block";  // Show Master's content
    document.querySelector(".education-button").classList.add("active");  // Set Master's button as active
});




