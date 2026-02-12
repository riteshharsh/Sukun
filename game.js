/* ===============================
   🎮 GAME MODULE
=============================== */

/* 1️⃣ Focus Game */
function startFocusGame(content) {

  let score = 0;
  let timeLeft = 30;
  let timer;

  content.innerHTML = `
    <h2>❤️ Focus Tap</h2>
    <h3>Time: <span id="timer">30</span>s</h3>
    <button id="tap-btn">❤️ TAP FAST</button>
    <h3>Score: <span id="score">0</span></h3>
  `;

  const timerEl = document.getElementById("timer");
  const scoreEl = document.getElementById("score");
  const tapBtn = document.getElementById("tap-btn");

  tapBtn.onclick = () => {
    score++;
    scoreEl.textContent = score;
  };

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);

      content.innerHTML = `
        <h2>Time Over!</h2>
        <h3>Your Score: ${score}</h3>
        <button onclick="startFocusGame(document.getElementById('module-content'))">
          Tap Again 🔁
        </button>
      `;
    }

  }, 1000);
}


/* 2️⃣ Truth & Dare */
function startTruthDare(content) {

  const truths = [
    "Tumne kabhi mujhe miss kiya?",
    "Mera kaunsa habit cute lagta hai?",
    "Tum jealous hote ho kabhi?",
    "Sabse romantic moment?",
    "Kab last time roye the?"
  ];

  const dares = [
    "Ek cute selfie bhejo 😜",
    "5 minute sirf mujhe yaad karo 💙",
    "Ek honest compliment do",
    "Abhi hug emoji bhejo 🤗",
    "Dil se ek line bolo"
  ];

  content.innerHTML = `
    <h2>Truth or Dare?</h2>
    <button id="truth-btn">Truth</button>
    <button id="dare-btn">Dare</button>
    <div id="td-result"></div>
  `;

  document.getElementById("truth-btn").onclick = () => {
    const random = truths[Math.floor(Math.random() * truths.length)];
    document.getElementById("td-result").innerHTML = `
      <p>${random}</p>
      <button onclick="startTruthDare(document.getElementById('module-content'))">
        Again 🔁
      </button>
    `;
  };

  document.getElementById("dare-btn").onclick = () => {
    const random = dares[Math.floor(Math.random() * dares.length)];
    document.getElementById("td-result").innerHTML = `
      <p>${random}</p>
      <button onclick="startTruthDare(document.getElementById('module-content'))">
        Again 🔁
      </button>
    `;
  };
}
