/* ================= GLOBAL ROLE ================= */

window.currentRole = null;

/* ================= WAIT FOR DOM ================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ================= ELEMENTS ================= */

  const loginScreen = document.getElementById("login-screen");
  const dashboardScreen = document.getElementById("dashboard-screen");
  const moduleScreen = document.getElementById("module-screen");

  const loginBtn = document.getElementById("login-btn");
  const passInput = document.getElementById("passcode-input");
  const welcomeText = document.getElementById("welcome-text");

  const darkToggle = document.getElementById("dark-toggle");
  const darkToggle2 = document.getElementById("dark-toggle-2");
  const backBtn = document.getElementById("back-btn");

  /* ================= LOGIN ================= */

  loginBtn.addEventListener("click", () => {

    const code = passInput.value.trim();

    if (code === "2016") window.currentRole = "Owner";
    else if (code === "14.25") window.currentRole = "DoDo";
    else if (code === "2002") window.currentRole = "Public";
    else {
      alert("Wrong Passcode");
      return;
    }

    showScreen(dashboardScreen);
    welcomeText.textContent = `Welcome ${window.currentRole}`;

    /* ================= DAILY LOGIN STREAK ================= */

    const today = new Date().toDateString();
    const lastLogin = localStorage.getItem("lastLoginDate");
    let streak = parseInt(localStorage.getItem("loginStreak")) || 0;

    if (lastLogin === today) {
      // same day login, do nothing
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastLogin === yesterday.toDateString()) {
        streak++;
      } else {
        streak = 1;
      }

      localStorage.setItem("lastLoginDate", today);
      localStorage.setItem("loginStreak", streak);
    }

    showStreak();
  });

  /* ================= SHOW STREAK ================= */

  function showStreak() {

    const streak = localStorage.getItem("loginStreak") || 0;

    // remove old streak if already exists
    const old = document.getElementById("streak-box");
    if (old) old.remove();

    const streakBox = document.createElement("div");
    streakBox.id = "streak-box";
    streakBox.innerHTML = `🔥 ${streak} Day Streak`;
    streakBox.style.fontWeight = "bold";
    streakBox.style.marginLeft = "10px";

    document.querySelector(".top-bar").appendChild(streakBox);
  }

  /* ================= SCREEN SWITCH ================= */

  function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s =>
      s.classList.remove("active")
    );
    screen.classList.add("active");
  }

  backBtn.addEventListener("click", () =>
    showScreen(dashboardScreen)
  );

  /* ================= DARK MODE ================= */

  function toggleDark() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  }

  darkToggle.addEventListener("click", toggleDark);
  darkToggle2.addEventListener("click", toggleDark);

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }

  /* ================= EMOJI CLICK ================= */

  document.querySelectorAll(".emoji").forEach(emoji => {
    emoji.addEventListener("click", () => {
      openModule(emoji.dataset.module);
    });
  });

  /* ================= MODULE SWITCH ================= */

  function openModule(module) {

    const content = document.getElementById("module-content");

    if (module === "daily") {
      content.innerHTML = `
        <h2>😊 Daily Sukoon</h2>
        <p>Aaj halka raho.</p>
        <p>Sab dheere hota hai.</p>
        <p>Tum strong ho 💙</p>
      `;
    }

    else if (module === "games") {
      content.innerHTML = `
        <h2>🎮 Game Zone</h2>

        <button onclick="startQuiz('easy')">Easy Quiz 🎯</button>
        <button onclick="startQuiz('medium')">Medium Quiz 🎯</button>
        <button onclick="startQuiz('hard')">Hard Quiz 🎯</button>
        <button onclick="startMixedQuiz()">Challenge Mode 🏆</button>
      `;
    }

    else {
      content.innerHTML = `<h2>Coming Soon...</h2>`;
    }

    showScreen(moduleScreen);
  }

});
