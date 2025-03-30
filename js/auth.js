document.addEventListener("DOMContentLoaded", () => {
  const auth = firebase.auth();

  // Handle Sign Up
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMessage = document.getElementById("signup-error");

      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("User signed up:", userCredential.user);
          window.location.href = "dashboard.html"; // Redirect to dashboard on success
        })
        .catch((error) => {
          errorMessage.textContent = error.message; // Display error message
        });
    });
  }

  // Handle Log Out
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.signOut().then(() => {
        console.log("User logged out");
        window.location.href = "index.html";
      });
    });
  }

  // Detect Login State
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User logged in:", user);
      document.getElementById("login-btn")?.setAttribute("style", "display: none;");
      document.getElementById("signup-btn")?.setAttribute("style", "display: none;");
      document.getElementById("dashboard-btn")?.setAttribute("style", "display: block;");
      document.getElementById("logout-btn")?.setAttribute("style", "display: block;");
    } else {
      console.log("No user logged in");
      document.getElementById("login-btn")?.setAttribute("style", "display: block;");
      document.getElementById("signup-btn")?.setAttribute("style", "display: block;");
      document.getElementById("dashboard-btn")?.setAttribute("style", "display: none;");
      document.getElementById("logout-btn")?.setAttribute("style", "display: none;");
    }
  });
});
