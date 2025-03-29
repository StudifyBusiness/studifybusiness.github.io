// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Function to update the button icon
    function updateButtonImage() {
        if (body.classList.contains("light-mode")) {
            themeToggle.style.backgroundImage = "url('buttonimages/dark-mode.png')";
        } else {
            themeToggle.style.backgroundImage = "url('buttonimages/light-mode.png')";
        }
    }

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "light-mode") {
        body.classList.add("light-mode");
    }

    // Update the button image on page load
    updateButtonImage();

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Save the theme preference
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light-mode");
        } else {
            localStorage.setItem("theme", "dark-mode");
        }

        // Update the button image after toggling
        updateButtonImage();
    });
});
