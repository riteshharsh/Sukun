/* ================= 😡 GUSSA MODULE ================= */

function openGussaModule(content) {

  content.innerHTML = `
    <h2>😡 Gussa Ho?</h2>
    <p>Ab main kya kar diya ki tum gussa ho?</p>

    <div style="margin-top:20px;">
      <button id="tell-btn">1️⃣ Batao mujhe</button>
      <button id="notell-btn">2️⃣ Nahi batana</button>
    </div>

    <div id="gussa-box" style="margin-top:20px;"></div>
  `;

  /* Option 1 - Batao mujhe */
  document.getElementById("tell-btn").addEventListener("click", () => {

    document.getElementById("gussa-box").innerHTML = `
      <textarea id="gussa-text" placeholder="Apni baat likho..." 
      style="width:100%;padding:10px;border-radius:10px;"></textarea>
      <button id="send-gussa">Send</button>
    `;

    document.getElementById("send-gussa").addEventListener("click", () => {
      const text = document.getElementById("gussa-text").value.trim();

      if (!text) return;

      const entries = JSON.parse(localStorage.getItem("gussaMessages") || "[]");

      entries.push({
        message: text,
        time: new Date().toLocaleString()
      });

      localStorage.setItem("gussaMessages", JSON.stringify(entries));

      document.getElementById("gussa-box").innerHTML = `
        <p style="color:green;">Message save ho gaya ✔</p>
        <p>Main sun raha hoon 💙</p>
      `;
    });

  });

  /* Option 2 - Nahi batana */
  document.getElementById("notell-btn").addEventListener("click", () => {

    const ownerNumber = "9973126307";   // 👈 Yaha apna number daalna

    document.getElementById("gussa-box").innerHTML = `
      <p>Theek hai... direct baat karte hain 📞</p>
      <a href="tel:+${ownerNumber}">
        <button>Call Now</button>
      </a>
    `;
  });

}
