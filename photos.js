/* ===============================
   😘 PHOTOS MODULE (Drive Gallery)
================================= */

/* Drive Folder Mapping (LOCKED) */
const DRIVE_FOLDERS = {
  folder1: "1B4KxNZh0ziq4BgUIQKflcht7Yaz4IWao",
  folder2: "1J9WT6DMdGUdO1oDVKeULHOCAnBC1odw0",
  folder3: "152KBJtdTNdmhqZ_wbQsGn6HyBkE6DpOf"
};

/* Open Photos Main Screen */
function openPhotosModule(content) {
  content.innerHTML = `
    <h2>😘 Choose Folder</h2>
    <div class="photo-buttons">
      <button onclick="loadDriveFolder('folder1')">😚</button>
      <button onclick="loadDriveFolder('folder2')">😙</button>
      <button onclick="loadDriveFolder('folder3')">😗</button>
    </div>
    <div id="drive-gallery"></div>
  `;
}

/* Load Images From Google Apps Script */
function loadDriveFolder(folderKey) {

  const gallery = document.getElementById("drive-gallery");
  gallery.innerHTML = "<p>Loading...</p>";

  const folderId = DRIVE_FOLDERS[folderKey];

  fetch("https://script.google.com/macros/s/AKfycbz8IvH2Zb_tSalN7ov5xO65JWdX2_FwuVevWMuKJrjFyCVCrPO9hhVD1bJBsAAAmUIX/exec?folder=" + folderId)
    .then(res => res.json())
    .then(data => {

      if (!data.files || data.files.length === 0) {
        gallery.innerHTML = "<p>No images found.</p>";
        return;
      }

      gallery.innerHTML = data.files.map(file =>
        `<img src="${file.url}" class="drive-img">`
      ).join("");

    })
    .catch(() => {
      gallery.innerHTML = "<p>Error loading images.</p>";
    });
}
