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

/* LOGIN */
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

/* SCREEN CONTROL */
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

/* MODULE HANDLER */
document.querySelectorAll(".emoji").forEach(emoji => {
  emoji.addEventListener("click", () => {
    const module = emoji.dataset.module;
    openModule(module);
  });
});

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

  else if (module === "sad") {
    sadFlow(content);
  }

  else if (module === "diary") {
    diaryModule(content);
  }

  else {
    content.innerHTML = `
      <h2>${module.toUpperCase()}</h2>
      <p>Coming Soon...</p>
    `;
  }

  showScreen(moduleScreen);
}

/* 😔 SAD FLOW */
function sadFlow(content) {
  let step = 0;

  function nextStep() {
    const messages = [
      "Tum theek ho na…?",
      "Tum chup-chup se lag rahe ho… theek ho na?",
      "Tum theek nahi ho, mujhe pata hai."
    ];

    if (step < 3) {
      content.innerHTML = `
        <h2>😔</h2>
        <p>${messages[step]}</p>
        <button id="next-btn">Pakka na</button>
      `;
      document.getElementById("next-btn").addEventListener("click", () => {
        step++;
        nextStep();
      });
    } else {
      content.innerHTML = `
        <h3>Meri kasam, batao mujhe.</h3>
        <textarea id="sad-text"></textarea>
        <button id="send-sad">Send</button>
      `;

      document.getElementById("send-sad").addEventListener("click", () => {
        const text = document.getElementById("sad-text").value;
        if (!text.trim()) return;

        saveData("sadMessages", text);
        alert("Saved 💙");
        showScreen(dashboardScreen);
      });
    }
  }

  nextStep();
}

/* 💌 DIARY */
function diaryModule(content) {
  content.innerHTML = `
    <h2>💌 Diary</h2>
    <textarea id="diary-text"></textarea>
    <button id="save-diary">Save</button>
    <div id="diary-history"></div>
  `;

  document.getElementById("save-diary").addEventListener("click", () => {
    const text = document.getElementById("diary-text").value;
    if (!text.trim()) return;

    saveData("diaryEntries", text);
    loadDiary();
  });

  loadDiary();
}

function loadDiary() {
  const historyDiv = document.getElementById("diary-history");
  const entries = JSON.parse(localStorage.getItem("diaryEntries") || "[]");

  historyDiv.innerHTML = entries
    .map(entry => `<p>${entry.time} - ${entry.text}</p>`)
    .join("");
}

/* SAVE FUNCTION */
function saveData(key, text) {
  const entries = JSON.parse(localStorage.getItem(key) || "[]");
  entries.push({
    text: text,
    time: new Date().toLocaleString()
  });
  localStorage.setItem(key, JSON.stringify(entries));
                                                         }
