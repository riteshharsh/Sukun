/* ================= PRIVATE DIARY SYSTEM ================= */

function diaryModule(content, currentRole) {

  content.innerHTML = `
    <h2>💌 Private Diary</h2>

    <input type="text" id="diary-heading" placeholder="Enter Heading..." />
    <br><br>

    <textarea id="diary-text" placeholder="Write something..."></textarea>
    <br><br>

    <button onclick="saveDiary()">Save</button>

    <hr>

    <div id="diary-history"></div>
  `;

  loadDiary();
}

function saveDiary() {

  const heading = document.getElementById("diary-heading").value.trim();
  const text = document.getElementById("diary-text").value.trim();

  if (!heading || !text) {
    alert("Heading aur Text dono likho");
    return;
  }

  const key = "diary_" + window.currentRole;

  const entries = JSON.parse(localStorage.getItem(key) || "[]");

  entries.push({
    heading,
    text,
    time: new Date().toLocaleString()
  });

  localStorage.setItem(key, JSON.stringify(entries));

  document.getElementById("diary-heading").value = "";
  document.getElementById("diary-text").value = "";

  loadDiary();
}

function loadDiary() {

  const historyDiv = document.getElementById("diary-history");
  const key = "diary_" + window.currentRole;

  const entries = JSON.parse(localStorage.getItem(key) || "[]");

  historyDiv.innerHTML = entries.map(e => `
    <div class="diary-entry">
      <h3>${e.heading}</h3>
      <small>${e.time}</small>
      <p style="white-space: pre-line;">${e.text}</p>
      <hr>
    </div>
  `).join("");
}

/* make global */
window.diaryModule = diaryModule;
window.saveDiary = saveDiary;
