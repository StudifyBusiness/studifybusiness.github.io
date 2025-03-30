document.addEventListener("DOMContentLoaded", () => {
  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("login-btn")?.setAttribute("style", "display: none;");
      document.getElementById("signup-btn")?.setAttribute("style", "display: none;");
      document.getElementById("dashboard-btn")?.setAttribute("style", "display: block;");
      document.getElementById("logout-btn")?.setAttribute("style", "display: block;");
    } else {
      document.getElementById("login-btn")?.setAttribute("style", "display: block;");
      document.getElementById("signup-btn")?.setAttribute("style", "display: block;");
      document.getElementById("dashboard-btn")?.setAttribute("style", "display: none;");
      document.getElementById("logout-btn")?.setAttribute("style", "display: none;");
    }
  });
});
