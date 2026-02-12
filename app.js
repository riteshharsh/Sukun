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
    if (typeof openSadModule === "function") {
      openSadModule(content);
    } else {
      content.innerHTML = "<p>Sad module not loaded.</p>";
    }
  }

  /* 😘 PHOTOS */
  else if (module === "photos") {
    if (typeof openPhotosModule === "function") {
      openPhotosModule(content);
    } else {
      content.innerHTML = "<p>Photos module not loaded.</p>";
    }
  }

  /* 😂 JOKES */
  else if (module === "jokes") {
    if (typeof startJokesEngine === "function") {
      startJokesEngine(content);
    } else {
      content.innerHTML = "<p>Jokes engine not loaded.</p>";
    }
  }

  /* 😡 GUSSA */
  else if (module === "gussa") {
    if (typeof openGussaModule === "function") {
      openGussaModule(content);
    } else {
      content.innerHTML = "<p>Gussa module not loaded.</p>";
    }
  }

  /* 😴 NIGHT */
  else if (module === "night") {
    if (typeof openNightModule === "function") {
      openNightModule(content);
    } else {
      content.innerHTML = "<p>Night module not loaded.</p>";
    }
  }

  /* 🎮 GAMES (FIXED) */
  else if (module === "games") {
    content.innerHTML = `
      <h2>🎮 Game Zone</h2>

      <button onclick="startQuiz('easy')">
        Easy Quiz 🎯
      </button>

      <button onclick="startQuiz('medium')">
        Medium Quiz 🎯
      </button>

      <button onclick="startQuiz('hard')">
        Hard Quiz 🎯
      </button>
    `;
  }

  /* 🎡 WHEEL */
  else if (module === "wheel") {
    if (typeof openWheelModule === "function") {
      openWheelModule(content);
    } else {
      content.innerHTML = "<p>Wheel module not loaded.</p>";
    }
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

/* ================= DIARY ================= */

function diaryModule(content) {
  content.innerHTML = `
    <h2>💌 Diary</h2>
    <textarea id="diary-text" placeholder="Write something..."></textarea>
    <br><br>
    <button onclick="saveDiary()">Save</button>
    <div id="diary-history"></div>
  `;
  loadDiary();
}

function saveDiary() {
  const text = document.getElementById("diary-text").value;
  if (!text.trim()) return;
  saveData("diaryEntries", text);
  document.getElementById("diary-text").value = "";
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
