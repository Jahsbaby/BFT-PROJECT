document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-btn");
  const mainContent = document.getElementById("main-content");
  const authContainer = document.getElementById("auth-container");

  loginButton.addEventListener("click", function () {
    mainContent.style.display = "none"; // Hide main content
    authContainer.style.display = "block"; // Show login/signup page
  });
});
