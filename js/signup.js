// signup.js

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const errorMsg = document.getElementById("error-msg");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const username = document.getElementById("username").value;

        errorMsg.textContent = ""; // Clear previous error messages

        // Firebase Authentication - Sign Up
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await userCredential.user.updateProfile({ displayName: username });

            // Redirect to dashboard
            window.location.href = "dashboard.html";
        } catch (error) {
            errorMsg.textContent = error.message; // Display error message
            errorMsg.style.color = "red";
        }
    });
});
