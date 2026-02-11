function openNightModule(content) {

  content.innerHTML = `
    <h2>😴 Tum so rahe ho?</h2>

    <button onclick="nightOption1()">1️⃣ Abhi sona hai kya?</button>
    <button onclick="nightOption2()">2️⃣ Kuch der mai</button>
    <button onclick="nightOption3()">3️⃣ Tum natak kar rahe ho</button>

    <div id="night-area" style="margin-top:20px;"></div>
  `;
}


/* ================= OPTION 1 ================= */
/* Abhi sona hai kya */

function nightOption1() {

  const area = document.getElementById("night-area");

  area.innerHTML = `
    <p>Good night dodo 🌙</p>
    <p>Jai mata di bhai 🙏</p>
    <button onclick="showNightHug()">Theek</button>
  `;
}

function showNightHug() {

  const area = document.getElementById("night-area");

  area.innerHTML = `
    <img src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif" width="220" style="border-radius:12px;">
    <p>Virtual Hug 🤗💙</p>
  `;
}


/* ================= OPTION 2 ================= */
/* Direct Drive Open */

function nightOption2() {

  window.open(
    "https://drive.google.com/drive/folders/1u72tnFaVqkF4OfK32Zrf5gZThj7kyQFC",
    "_blank"
  );
}


/* ================= OPTION 3 ================= */
/* Moh / Maya */

function nightOption3() {

  const area = document.getElementById("night-area");

  area.innerHTML = `
    <h3>Choose:</h3>

    <button onclick="openMoh()">Moh</button>
    <button onclick="openMaya()">Maya</button>
  `;
}

function openMoh() {

  window.open(
    "https://drive.google.com/drive/folders/1oCGYkJis3Zvs3JO_UPB3AsYjb7CAM0YS",
    "_blank"
  );
}

function openMaya() {

  window.open(
    "https://youtube.com/playlist?list=PLkjvU5nkS6RKwGAiyHro2_eKkoOcaPXXJ",
    "_blank"
  );
}
