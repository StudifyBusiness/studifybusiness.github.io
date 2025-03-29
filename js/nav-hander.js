document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const dashboardBtn = document.getElementById("dashboard-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Get the current page filename
    const currentPage = window.location.pathname.split("/").pop();

    // Hide the "Sign Up" button on the sign-up page
    if (currentPage === "signup.html" && signupBtn) {
        signupBtn.style.display = "none";
    }

    // Hide the "Log In" button on the login page
    if (currentPage === "login.html" && loginBtn) {
        loginBtn.style.display = "none";
    }

    // Initialize Firebase
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // If logged in, show Dashboard & Logout, hide Login/Sign Up
            if (dashboardBtn) dashboardBtn.style.display = "inline-block";
            if (logoutBtn) logoutBtn.style.display = "inline-block";
            if (loginBtn) loginBtn.style.display = "none";
            if (signupBtn) signupBtn.style.display = "none";
        } else {
            // If not logged in, hide Dashboard & Logout
            if (dashboardBtn) dashboardBtn.style.display = "none";
            if (logoutBtn) logoutBtn.style.display = "none";
            if (loginBtn) loginBtn.style.display = "inline-block";
            if (signupBtn) signupBtn.style.display = "inline-block";
        }
    });

    // Logout Functionality
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            firebase.auth().signOut().then(() => {
                window.location.href = "index.html"; // Redirect to home page after logout
            }).catch((error) => {
                console.error("Logout error:", error);
            });
        });
    }
});
