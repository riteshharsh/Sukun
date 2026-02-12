/* ================= QUIZ DATA ================= */

const quizData = [
  // ⚠️ Yaha tumhara pura quizData already hai
  // (Maine yaha short kiya hai message limit ke liye — 
  // tum apna full data yahi rakho, kuch change mat karo)

  { q: "Varun Dhawan ki debut film kaun si thi?", a: "Student of the Year", b: "ABCD 2", correct: 0, level: "easy" },
  { q: "Badlapur film ka director kaun tha?", a: "Sriram Raghavan", b: "Rohit Shetty", correct: 0, level: "medium" },
  { q: "Badlapur me Raghu ki wife ka naam kya tha?", a: "Misha", b: "Riya", correct: 0, level: "hard" }

  // 👉 IMPORTANT:
  // Yaha tum apna FULL quizData paste karo
];


/* ================= QUIZ SYSTEM ================= */

let currentLevel = "easy";
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];


/* ================= START QUIZ ================= */

function startQuiz(container) {

  container.innerHTML = `
    <h2>🎯 Movie Quiz</h2>

    <p>Select Level:</p>
    <button onclick="setLevel('easy')">Easy</button>
    <button onclick="setLevel('medium')">Medium</button>
    <button onclick="setLevel('hard')">Hard</button>

    <div id="quiz-area"></div>
  `;
}


/* ================= SET LEVEL ================= */

function setLevel(level) {

  currentLevel = level;
  currentQuestionIndex = 0;
  score = 0;

  selectedQuestions = quizData.filter(q => q.level === level);

  if (selectedQuestions.length === 0) {
    document.getElementById("quiz-area").innerHTML =
      "<p>No questions found for this level.</p>";
    return;
  }

  showQuestion();
}


/* ================= SHOW QUESTION ================= */

function showQuestion() {

  const quizArea = document.getElementById("quiz-area");

  if (currentQuestionIndex >= selectedQuestions.length) {

    quizArea.innerHTML = `
      <h3>Quiz Finished 🎉</h3>
      <p>Your Score: ${score} / ${selectedQuestions.length}</p>

      <button onclick="startQuiz(document.getElementById('module-content'))">
        Play Again 🔁
      </button>
    `;
    return;
  }

  const q = selectedQuestions[currentQuestionIndex];

  quizArea.innerHTML = `
    <p><strong>Q${currentQuestionIndex + 1}:</strong> ${q.q}</p>

    <button onclick="checkAnswer(0)">${q.a}</button>
    <button onclick="checkAnswer(1)">${q.b}</button>
  `;
}


/* ================= CHECK ANSWER ================= */

function checkAnswer(selected) {

  const q = selectedQuestions[currentQuestionIndex];

  if (selected === q.correct) {
    score++;
  }

  currentQuestionIndex++;
  showQuestion();
}
