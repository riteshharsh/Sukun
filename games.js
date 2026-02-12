/* ================= GAME ENGINE ================= */

window.startFocusGame = function(content) {

  let score = 0;
  let timeLeft = 10;

  content.innerHTML = `
    <h2>❤️ Focus Game</h2>
    <h3>Time Left: <span id="time">${timeLeft}</span></h3>
    <h3>Score: <span id="score">0</span></h3>
    <button id="tapBtn">Tap Fast!</button>
  `;

  const timeEl = document.getElementById("time");
  const scoreEl = document.getElementById("score");
  const tapBtn = document.getElementById("tapBtn");

  tapBtn.onclick = () => {
    score++;
    scoreEl.textContent = score;
  };

  const timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      content.innerHTML = `
        <h2>Game Over</h2>
        <h3>Your Score: ${score}</h3>
        <button onclick="startFocusGame(document.getElementById('module-content'))">
          Play Again 🔁
        </button>
      `;
    }
  }, 1000);
};


/* ================= TRUTH DARE ================= */

window.startTruthDare = function(content) {

  const truths = [
    "Sabse bada secret kya hai?",
    "Kis par crush tha?",
    "Kab jhoot bola tha?"
  ];

  const dares = [
    "5 pushups karo 😄",
    "Ek funny face banao",
    "Loud me I love you bolo 😂"
  ];

  const type = Math.random() < 0.5 ? "Truth" : "Dare";

  const question = type === "Truth"
    ? truths[Math.floor(Math.random()*truths.length)]
    : dares[Math.floor(Math.random()*dares.length)];

  content.innerHTML = `
    <h2>🎲 ${type}</h2>
    <p>${question}</p>
    <button onclick="startTruthDare(document.getElementById('module-content'))">
      Next 🔁
    </button>
  `;
};


/* ================= SIMPLE QUIZ ================= */

window.startQuizGame = function(content) {

  if (typeof quizData === "undefined") {
    content.innerHTML = "<p>Quiz data not loaded.</p>";
    return;
  }

  let score = 0;
  let index = 0;

  let shuffled = [...quizData].sort(() => Math.random() - 0.5);

  function next() {

    if (index >= 5) {
      content.innerHTML = `
        <h2>Quiz Finished 🎉</h2>
        <h3>Score: ${score}/5</h3>
        <button onclick="startQuizGame(document.getElementById('module-content'))">
          Play Again 🔁
        </button>
      `;
      return;
    }

    const q = shuffled[index];
    index++;

    content.innerHTML = `
      <h3>Q${index}: ${q.q}</h3>
      <button onclick="window.answer(0)">${q.a}</button>
      <button onclick="window.answer(1)">${q.b}</button>
    `;

    window.answer = function(choice) {
      if (choice === q.correct) score++;
      next();
    };
  }

  next();
};
