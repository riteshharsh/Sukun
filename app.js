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

/* ================= LOGIN ================= */

loginBtn.addEventListener("click", () => {
  const code = passInput.value.trim();

  if (code === "2016") currentRole = "Owner";
  else if (code === "14.25") currentRole = "Visitor";
  else if (code === "2002") currentRole = "Public";
  else {
    alert("Wrong Passcode");
    return;
  }

  showScreen(dashboardScreen);
  welcomeText.textContent = `Welcome ${currentRole}`;
});

/* ================= SCREEN ================= */

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
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
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

  /* 😊 DAILY */
  if (module === "daily") {
    content.innerHTML = `
      <h2>😊 Daily Sukoon</h2>
      <p>Aaj halka raho.</p>
      <p>Sab dheere hota hai.</p>
      <p>Tum strong ho 💙</p>
    `;
  }

  /* 😔 SAD */
  else if (module === "sad") {
    sadFlow(content);
  }

  /* 😘 PHOTOS */
  else if (module === "photos") {
    if (typeof openPhotosModule === "function") {
      openPhotosModule(content);
    } else {
      content.innerHTML = "<p>Photos module not loaded.</p>";
    }
  }

  /* 😂 JOKES ENGINE */
  else if (module === "jokes") {
    if (typeof startJokesEngine === "function") {
      startJokesEngine();
    } else {
      content.innerHTML = "<p>Jokes engine not loaded.</p>";
    }
  }

  /* 😡 GUSSA (MODULAR) */
  else if (module === "gussa") {
    if (typeof openGussaModule === "function") {
      openGussaModule(content);
    } else {
      content.innerHTML = "<p>Gussa module not loaded.</p>";
    }
  }

  /* 😴 NIGHT */
  else if (module === "night") {
    content.innerHTML = `
      <h2>😴 Good Night</h2>
      <p>Good night dodo</p>
      <p>Jai mata di bhai</p>
      <button onclick="showHug()">Theek</button>
      <div id="night-result"></div>
    `;

    window.showHug = function () {
      document.getElementById("night-result").innerHTML = `
        <img src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif" width="200">
        <p>Virtual Hug 🤗💙</p>
      `;
    };
  }

  /* 🎮 GAMES */
  else if (module === "games") {
    content.innerHTML = `
      <h2>🎮 Game Zone</h2>
      <button onclick="alert('Game logic yaha aayega')">Start</button>
    `;
  }

  /* 🎡 WHEEL */
  else if (module === "wheel") {
    const options = ["Hug 🤗", "Kiss 😘", "Secret 🤫", "Compliment 💙"];
    const random = options[Math.floor(Math.random() * options.length)];

    content.innerHTML = `
      <h2>🎡 Spin Result</h2>
      <p>${random}</p>
      <button onclick="openModule('wheel')">Spin Again 🔁</button>
    `;
  }

  /* 💌 DIARY */
  else if (module === "diary") {
    diaryModule(content);
  }

  else {
    content.innerHTML = `<h2>Coming Soon...</h2>`;
  }

  showScreen(moduleScreen);
}

/* ================= SAD FLOW ================= */

function sadFlow(content) {
  content.innerHTML = `
    <h2>😔</h2>
    <p>Tum theek ho na?</p>
  `;
}

/* ================= DIARY ================= */

function diaryModule(content) {
  content.innerHTML = `
    <h2>💌 Diary</h2>
    <textarea id="diary-text"></textarea>
    <button onclick="saveDiary()">Save</button>
    <div id="diary-history"></div>
  `;
  loadDiary();
}

function saveDiary() {
  const text = document.getElementById("diary-text").value;
  if (!text.trim()) return;
  saveData("diaryEntries", text);
  loadDiary();
}

function loadDiary() {
  const historyDiv = document.getElementById("diary-history");
  const entries = JSON.parse(localStorage.getItem("diaryEntries") || "[]");
  historyDiv.innerHTML = entries.map(e =>
    `<p>${e.time} - ${e.text}</p>`
  ).join("");
}

function saveData(key, text) {
  const entries = JSON.parse(localStorage.getItem(key) || "[]");
  entries.push({ text, time: new Date().toLocaleString() });
  localStorage.setItem(key, JSON.stringify(entries));
}
