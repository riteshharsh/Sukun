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
/* ===========================
   🎮 GAMES MODULE
=========================== */

function openModule(module) {
  const content = document.getElementById("module-content");

  if (module === "games") {
    content.innerHTML = `
      <h2>🎮 Game Zone</h2>
      <button id="focus-game">Focus Game</button>
      <button id="truth-dare-game">Truth & Dare</button>
      <button id="quiz-game">Movie Quiz</button>
    `;

    document.getElementById("focus-game").addEventListener("click", focusGame);
    document.getElementById("truth-dare-game").addEventListener("click", truthDareGame);
    document.getElementById("quiz-game").addEventListener("click", startQuiz);
  }

  else if (module === "daily") {
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
    content.innerHTML = `<h2>${module.toUpperCase()}</h2><p>Coming Soon...</p>`;
  }

  showScreen(moduleScreen);
}

/* 1️⃣ Focus Game */
function focusGame() {
  const content = document.getElementById("module-content");
  let score = 0;
  let timeLeft = 30;

  content.innerHTML = `
    <h3>❤️ Tap Fast for 30 Seconds!</h3>
    <h4 id="timer">Time: 30</h4>
    <button id="tap-btn">❤️ TAP</button>
    <h4 id="score">Score: 0</h4>
  `;

  const timerEl = document.getElementById("timer");
  const scoreEl = document.getElementById("score");
  const tapBtn = document.getElementById("tap-btn");

  tapBtn.addEventListener("click", () => {
    score++;
    scoreEl.textContent = "Score: " + score;
  });

  const timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      content.innerHTML = `
        <h3>Time Over!</h3>
        <p>Your Score: ${score}</p>
        <p>${score > 50 ? "Lagta hai tum serious ho 😄" : "Thoda aur focus karo 😉"}</p>
      `;
    }
  }, 1000);
}

/* 2️⃣ Truth & Dare */
function truthDareGame() {
  const truths = [
    "Tumne kabhi mujhe miss kiya?",
    "Sabse romantic moment kya tha?",
    "Tum jealous hote ho kabhi?",
    "Mera kaunsa habit cute lagta hai?",
    "Secret crush kab tha last?",
    "Tumhara biggest fear?",
    "Agar ek wish mile toh kya maangoge?",
    "Mujhe 3 words me describe karo",
    "Kab last time roye the?",
    "Mere bina reh sakte ho?"
  ];

  const dares = [
    "Abhi ek cute selfie bhejo 😜",
    "5 minute sirf mujhe yaad karo 💙",
    "Voice note me 'I miss you' bolo 😏",
    "Apni favorite romantic line bolo",
    "Ek honest compliment do",
    "Mujhe ek funny nickname do",
    "Mujhe good night message likho",
    "Dil se ek line bolo",
    "Ek emoji me mood batao",
    "Abhi hug emoji bhejo 🤗"
  ];

  let usedTruth = [];
  let usedDare = [];

  const content = document.getElementById("module-content");

  content.innerHTML = `
    <h3>Truth or Dare?</h3>
    <button id="truth-btn">Truth</button>
    <button id="dare-btn">Dare</button>
    <div id="td-result"></div>
  `;

  function getRandom(arr, used) {
    if (used.length === arr.length) used.length = 0;
    let index;
    do {
      index = Math.floor(Math.random() * arr.length);
    } while (used.includes(index));
    used.push(index);
    return arr[index];
  }

  document.getElementById("truth-btn").addEventListener("click", () => {
    const q = getRandom(truths, usedTruth);
    document.getElementById("td-result").innerHTML = `
      <p>${q}</p>
      <button onclick="truthDareGame()">Again 🔁</button>
    `;
  });

  document.getElementById("dare-btn").addEventListener("click", () => {
    const q = getRandom(dares, usedDare);
    document.getElementById("td-result").innerHTML = `
      <p>${q}</p>
      <button onclick="truthDareGame()">Again 🔁</button>
    `;
  });
}

/* 3️⃣ Movie Quiz Engine */
let quizQuestions = [
  { q: "Varun Dhawan debut film?", a: "Student of the Year", b: "ABCD 2", correct: 0 },
  { q: "SRK known as?", a: "King Khan", b: "Sultan Khan", correct: 0 },
  { q: "Badrinath Ki Dulhania actor?", a: "Varun", b: "Ranveer", correct: 0 }
];

function startQuiz() {
  const content = document.getElementById("module-content");
  let score = 0;
  let round = 0;

  function nextQuestion() {
   if (round >= 5) {
  content.innerHTML = `
    <h3>Quiz Finished!</h3>
    <p>Your Score: ${score}/5</p>
    <p>
    ${score === 5 ? "Perfect Fan 💙🔥" :
      score >= 3 ? "You Won 🎉" :
      "Thoda aur dhyaan do 😉"}
    </p>
    <button id="restart-quiz">Tap Again 🔁</button>
  `;

  document.getElementById("restart-quiz").addEventListener("click", () => {
    startQuiz();
  });

  return;
}

    const q = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    round++;

    content.innerHTML = `
      <h4>${q.q}</h4>
      <button id="opt1">${q.a}</button>
      <button id="opt2">${q.b}</button>
    `;

    document.getElementById("opt1").addEventListener("click", () => {
      if (q.correct === 0) score++;
      nextQuestion();
    });

    document.getElementById("opt2").addEventListener("click", () => {
      if (q.correct === 1) score++;
      nextQuestion();
    });
  }

  nextQuestion();
}
