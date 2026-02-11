function openNightModule(content) {

  content.innerHTML = `
    <h2>😴 3 Options</h2>

    <button onclick="nightOption1()">1️⃣ Abhi sona hai kya?</button>
    <button onclick="nightOption2()">2️⃣ Kuch der mai</button>
    <button onclick="nightOption3()">3️⃣ Tum natak kar rahe ho</button>

    <div id="night-area"></div>
  `;
}

/* ================= OPTION 1 ================= */

function nightOption1() {

  const area = document.getElementById("night-area");

  area.innerHTML = `
    <p>Good night dodo</p>
    <p>Jai mata di bhai</p>
    <p style="cursor:pointer;color:#ff6f91;" onclick="showHugGif()">Theek ←</p>
  `;
}

function showHugGif() {

  const area = document.getElementById("night-area");

  area.innerHTML += `
    <div style="margin-top:20px;">
      <img src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
           width="220"
           style="border-radius:15px;">
      <p style="margin-top:10px;">Virtual Hug 🤗💙</p>
    </div>
  `;
}

/* ================= OPTION 2 ================= */

function nightOption2() {
  window.open(
    "https://drive.google.com/drive/folders/1u72thFavkKF4OfK32Zrf59ZTlh7KyQFC",
    "_blank"
  );
}

/* ================= OPTION 3 ================= */

function nightOption3() {

  const area = document.getElementById("night-area");

  area.innerHTML = `
    <h3>Choose:</h3>

    <button onclick="window.open('https://drive.google.com/drive/folders/1oCGYkJis3Zvs3J0_UPB3AsYjb7CAM0YS','_blank')">
      Moh
    </button>

    <button onclick="window.open('https://www.youtube.com/playlist?list=PLkjVJ5tr6PKwGAiyHro2_eKkoOcaPXXJc','_blank')">
      Maya
    </button>
  `;
}
