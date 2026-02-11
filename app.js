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
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

backBtn.addEventListener("click", () => showScreen(dashboardScreen));

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
    sadFlow(content);
  }

  /* 💌 DIARY */
  else if (module === "diary") {
    diaryModule(content);
  }

  /* 🎮 GAMES */
  else if (module === "games") {
    content.innerHTML = `
      <h2>🎮 Game Zone</h2>
      <button onclick="focusGame()">Focus Game</button>
      <button onclick="truthDareGame()">Truth & Dare</button>
      <button onclick="startQuiz()">Movie Quiz</button>
      <button onclick="spinWheelGame()">Spin Wheel</button>
    `;
  }

  /* 😘 DRIVE GALLERY */
  else if (module === "kiss") {
    content.innerHTML = `
      <h2>😘 Choose Folder</h2>
      <button onclick="loadDriveFolder('1B4KxNZh0ziq4BgUIQKflcht7Yaz4IWao')">😚</button>
      <button onclick="loadDriveFolder('1J9WT6DMdGUdO1oDVKeULHOCAnBC1odw0')">😙</button>
      <button onclick="loadDriveFolder('152KBJtdTNdmhqZ_wbQsGn6HyBkE6DpOf')">😗</button>
      <div id="drive-gallery"></div>
    `;
  }

  else {
    content.innerHTML = `<h2>Coming Soon...</h2>`;
  }

  showScreen(moduleScreen);
}

/* ================= DRIVE LOADER ================= */

function loadDriveFolder(folderId) {
  const gallery = document.getElementById("drive-gallery");
  gallery.innerHTML = "Loading...";

  fetch("https://script.google.com/macros/s/AKfycbz8IvH2Zb_tSalN7ov5xO65JWdX2_FwuVevWMuKJrjFyCVCrPO9hhVD1bJBsAAAmUIX/exec?folder=" + folderId)
    .then(res => res.json())
    .then(data => {

      if (!data.files || data.files.length === 0) {
        gallery.innerHTML = "<p>No images found.</p>";
        return;
      }

      gallery.innerHTML = data.files.map(file =>
        `<img src="${file.url}" style="width:120px;margin:10px;border-radius:12px;">`
      ).join("");

    })
    .catch(() => {
      gallery.innerHTML = "<p>Error loading images.</p>";
    });
}

/* ================= SAD FLOW ================= */

function sadFlow(content) {
  let step = 0;
  const messages = [
    "Tum theek ho na…?",
    "Tum chup-chup se lag rahe ho… theek ho na?",
    "Tum theek nahi ho, mujhe pata hai."
  ];

  function next() {
    if (step < 3) {
      content.innerHTML = `
        <h2>😔</h2>
        <p>${messages[step]}</p>
        <button onclick="nextSad()">Pakka na</button>
      `;
      step++;
    } else {
      content.innerHTML = `
        <h3>Meri kasam, batao mujhe.</h3>
        <textarea id="sad-text"></textarea>
        <button onclick="saveSad()">Send</button>
      `;
    }
  }

  window.nextSad = next;

  window.saveSad = function () {
    const text = document.getElementById("sad-text").value;
    if (!text.trim()) return;
    saveData("sadMessages", text);
    alert("Saved 💙");
    showScreen(dashboardScreen);
  };

  next();
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
  historyDiv.innerHTML = entries.map(e => `<p>${e.time} - ${e.text}</p>`).join("");
}

function saveData(key, text) {
  const entries = JSON.parse(localStorage.getItem(key) || "[]");
  entries.push({ text, time: new Date().toLocaleString() });
  localStorage.setItem(key, JSON.stringify(entries));
}
