/* =========================
   😔 SAD MODULE (LOCKED FLOW)
========================= */

function openSadModule(content) {

  let step = 0;

  const messages = [
    "Tum theek ho na…?",
    "Tum chup-chup se lag rahe ho…",
    "Tum theek nahi ho, mujhe pata hai."
  ];

  function showStep() {

    if (step < messages.length) {

      content.innerHTML = `
        <h2>😔</h2>
        <p>${messages[step]}</p>
        <button id="sad-next-btn">Pakka na</button>
      `;

      document.getElementById("sad-next-btn")
        .addEventListener("click", () => {
          step++;
          showStep();
        });

    } else {

      content.innerHTML = `
        <h3>Meri kasam, batao mujhe.</h3>
        <textarea id="sad-text" placeholder="Yaha likho..."></textarea>
        <button id="sad-send-btn">Send</button>
      `;

      document.getElementById("sad-send-btn")
        .addEventListener("click", saveSadMessage);
    }
  }

  function saveSadMessage() {

    const text = document.getElementById("sad-text").value.trim();

    if (!text) return;

    const entries = JSON.parse(localStorage.getItem("sadMessages") || "[]");

    entries.push({
      text: text,
      time: new Date().toLocaleString()
    });

    localStorage.setItem("sadMessages", JSON.stringify(entries));

    content.innerHTML = `
      <h2>💙</h2>
      <p>Message saved.</p>
      <p>Main yahin hoon.</p>
    `;
  }

  showStep();
}
