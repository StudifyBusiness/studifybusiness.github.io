// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "light-mode") {
        body.classList.add("light-mode");
        themeToggle.style.backgroundImage = "url('../buttonimages/dark-mode.png')";
    } else {
        themeToggle.style.backgroundImage = "url('../buttonimages/light-mode.png')";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Update button image based on theme
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light-mode");
            themeToggle.style.backgroundImage = "url('../buttonimages/dark-mode.png')";
        } else {
            localStorage.setItem("theme", "dark-mode");
            themeToggle.style.backgroundImage = "url('../buttonimages/light-mode.png')";
        }
    });
});
