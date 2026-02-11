const loginScreen = document.getElementById("login-screen");
const dashboardScreen = document.getElementById("dashboard-screen");
const moduleScreen = document.getElementById("module-screen");

const loginBtn = document.getElementById("login-btn");
const passInput = document.getElementById("passcode-input");
const welcomeText = document.getElementById("welcome-text");

const darkToggle = document.getElementById("dark-toggle");
const darkToggle2 = document.getElementById("dark-toggle-2");
const backBtn = document.getElementById("back-btn");

let currentRole = null;

/* PASSCODE SYSTEM */
loginBtn.addEventListener("click", () => {
  const code = passInput.value.trim();

  if (code === "2016") currentRole = "Owner";
  else if (code === "14.25") currentRole = "Dodo";
  else if (code === "2002") currentRole = "Limited";
  else {
    alert("Wrong Passcode");
    return;
  }

  showScreen(dashboardScreen);
  welcomeText.textContent = `Welcome ${currentRole}`;
});

/* SCREEN ROUTING */
function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

backBtn.addEventListener("click", () => {
  showScreen(dashboardScreen);
});

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

darkToggle.addEventListener("click", toggleDark);
darkToggle2.addEventListener("click", toggleDark);

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

/* EMOJI CLICK HANDLER (MODULE PLACEHOLDER) */
document.querySelectorAll(".emoji").forEach(emoji => {
  emoji.addEventListener("click", () => {
    const module = emoji.dataset.module;
    document.getElementById("module-content").innerHTML =
      `<h2>${module.toUpperCase()} MODULE</h2><p>Coming in Phase 2...</p>`;
    showScreen(moduleScreen);
  });
});
