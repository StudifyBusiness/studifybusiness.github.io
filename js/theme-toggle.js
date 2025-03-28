// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "light-mode") {
        body.classList.add("light-mode");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        
        // Save the theme preference
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light-mode");
        } else {
            localStorage.setItem("theme", "dark-mode");
        }
    });
});
