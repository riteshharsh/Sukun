function openSadModule(content) {

  let step = 0;

  const messages = [
    "Tum theek ho na…?",
    "Tum chup-chup se lag rahe ho… theek ho na?",
    "Tum theek nahi ho, mujhe pata hai."
  ];

  function nextStep() {

    if (step < 3) {
      content.innerHTML = `
        <h2>😔</h2>
        <p>${messages[step]}</p>
        <button id="sad-next">Pakka na</button>
      `;

      document.getElementById("sad-next").onclick = function() {
        step++;
        nextStep();
      };

    } else {

      content.innerHTML = `
        <h3>Meri kasam, batao mujhe.</h3>
        <textarea id="sad-text" maxlength="1000" placeholder="Yahan likho..."></textarea>
        <br>
        <button id="sad-send">Send</button>
      `;

      document.getElementById("sad-send").onclick = function() {

        const text = document.getElementById("sad-text").value.trim();

        if (!text) return;

        let entries = JSON.parse(localStorage.getItem("sadMessages") || "[]");

        entries.push({
          text: text,
          time: new Date().toLocaleString()
        });

        localStorage.setItem("sadMessages", JSON.stringify(entries));

        alert("Saved 💙");

        content.innerHTML = `
          <h3>Thank you for telling me 💙</h3>
          <p>Main hoon na.</p>
        `;
      };
    }
  }

  nextStep();
}
