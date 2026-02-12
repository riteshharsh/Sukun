function openWheelModule(container) {

  container.innerHTML = `
    <h2>🎡 Spin Wheel</h2>

    <div class="wheel-wrapper">
      <div id="wheel" class="wheel">
        <div class="slice s1">1</div>
        <div class="slice s2">2</div>
        <div class="slice s3">3</div>
        <div class="slice s4">4</div>
        <div class="slice s5">5</div>
        <div class="slice s6">6</div>
      </div>
    </div>

    <br>
    <button id="spinBtn">SPIN</button>

    <div id="wheel-result"></div>
  `;

  const wheel = document.getElementById("wheel");
  const spinBtn = document.getElementById("spinBtn");
  const resultBox = document.getElementById("wheel-result");

  let currentRotation = 0;

  spinBtn.onclick = function () {

    const randomOption = Math.floor(Math.random() * 6) + 1;

    const extraSpin = 360 * 5;
    const finalRotation = extraSpin + (360 - (randomOption - 1) * 60);

    currentRotation += finalRotation;

    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
      showWheelOption(randomOption);
    }, 4200);

  };
}

function showWheelOption(option) {

  const resultBox = document.getElementById("wheel-result");

  let text = "";

  switch(option) {
    case 1:
      text = "Batao aaj mere baare me kuch (100 words)";
      break;
    case 2:
      text = "Main aaj tumhare baare me kuch likhun? (100 words)";
      break;
    case 3:
      text = "Chalo khul ke bolo... (100 words)";
      break;
    case 4:
      text = "Aaj kahani jaisa plan likho (500 words)";
      break;
    case 5:
      text = "Chalo aaj kisi ke chugli karte hain (100 words)";
      break;
    case 6:
      text = "🔒 Silent Mode – Aaj kuch nahi likh sakte";
      break;
  }

  resultBox.innerHTML = `
    <h3>Option ${option}</h3>
    <p>${text}</p>
  `;
}

window.openWheelModule = openWheelModule;
