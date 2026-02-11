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

/* EMOJI CLICK HANDLER */
document.querySelectorAll(".emoji").forEach(emoji => {
  emoji.addEventListener("click", () => {
    openModule(emoji.dataset.module);
  });
});

/* ===========================
   MODULE SWITCHER
=========================== */

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

  else if (module === "games") {
    content.innerHTML = `
      <h2>🎮 Game Zone</h2>
      <button onclick="focusGame()">Focus Game</button>
      <button onclick="truthDareGame()">Truth & Dare</button>
      <button onclick="startQuiz()">Movie Quiz</button>
    `;
  }

  else if (module === "wheel") {
    spinWheelGame();
  }

  else {
    content.innerHTML = `<h2>Coming Soon...</h2>`;
  }

  showScreen(moduleScreen);
}

/* ===========================
   😔 SAD FLOW
=========================== */

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
        <button onclick="nextStep()">Pakka na</button>
      `;
    } else {
      content.innerHTML = `
        <h3>Meri kasam, batao mujhe.</h3>
        <textarea id="sad-text"></textarea>
        <button onclick="saveSad()">Send</button>
      `;
    }
  }

  window.nextStep = nextStep;

  window.saveSad = function () {
    const text = document.getElementById("sad-text").value;
    if (!text.trim()) return;
    saveData("sadMessages", text);
    alert("Saved 💙");
    showScreen(dashboardScreen);
  };

  nextStep();
}

/* ===========================
   💌 DIARY
=========================== */

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

  historyDiv.innerHTML = entries
    .map(entry => `<p>${entry.time} - ${entry.text}</p>`)
    .join("");
}

function saveData(key, text) {
  const entries = JSON.parse(localStorage.getItem(key) || "[]");
  entries.push({
    text: text,
    time: new Date().toLocaleString()
  });
  localStorage.setItem(key, JSON.stringify(entries));
}

/* ===========================
   🎡 SPIN WHEEL
=========================== */

function spinWheelGame() {
  const content = document.getElementById("module-content");

  const options = [
    "Hug 🤗",
    "Kiss 😘",
    "Secret Share 🤫",
    "Compliment 💙",
    "Truth Question 😏",
    "Romantic Line 💌"
  ];

  content.innerHTML = `
    <h3>Spin The Wheel 🎡</h3>
    <div style="font-size:80px;margin:20px;">🎡</div>
    <button onclick="spinNow()">Spin</button>
    <div id="wheel-result"></div>
  `;

  window.spinNow = function () {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selected = options[randomIndex];

    document.getElementById("wheel-result").innerHTML = `
      <h4>Result: ${selected}</h4>
      <button onclick="spinWheelGame()">Spin Again 🔁</button>
    `;
  };
}
/* 3️⃣ Movie Quiz Engine */

let quizQuestions = quizQuestions || [
  { q: "Varun Dhawan debut film?", a: "Student of the Year", b: "ABCD 2", correct: 0 },
  { q: "SRK known as?", a: "King Khan", b: "Sultan Khan", correct: 0 },
  { q: "Badrinath Ki Dulhania actor?", a: "Varun", b: "Ranveer", correct: 0 }
];

function startQuiz() {

  const content = document.getElementById("module-content");

  let score = 0;
  let round = 0;
  let timer;
  let timeLeft = 15;

  // shuffle copy
  let shuffled = [...quizQuestions];
  shuffled.sort(() => Math.random() - 0.5);

  function nextQuestion() {

    clearInterval(timer);
    timeLeft = 15;

    if (round >= 5) {
      content.innerHTML = `
        <h3>Quiz Finished!</h3>
        <h2 id="final-score">Score: 0</h2>
        <button onclick="startQuiz()">Tap Again 🔁</button>
      `;

      let displayScore = 0;
      const scoreEl = document.getElementById("final-score");

      const anim = setInterval(() => {
        if (displayScore >= score) {
          clearInterval(anim);
        } else {
          displayScore++;
          scoreEl.textContent = "Score: " + displayScore + "/5";
        }
      }, 200);

      return;
    }

    const q = shuffled[round];
    round++;

    content.innerHTML = `
      <div style="height:6px;background:#ddd;margin-bottom:10px;">
        <div style="height:6px;width:${round*20}%;background:#4caf50;"></div>
      </div>

      <h4>Time Left: <span id="timer">${timeLeft}</span>s</h4>
      <h4>Q${round}: ${q.q}</h4>

      <button id="opt1">${q.a}</button>
      <button id="opt2">${q.b}</button>
    `;

    const timerEl = document.getElementById("timer");

    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);

    document.getElementById("opt1").onclick = function () {
      clearInterval(timer);
      if (q.correct === 0) score++;
      nextQuestion();
    };

    document.getElementById("opt2").onclick = function () {
      clearInterval(timer);
      if (q.correct === 1) score++;
      nextQuestion();
    };
  }

  nextQuestion();
}
