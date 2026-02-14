/* ===============================
   😘 PHOTOS MODULE (Direct Drive Open)
================================= */

/* Drive Links (SET) */
const DRIVE_LINKS = {
  folder1: "https://drive.google.com/drive/folders/152KBJtdTNdmhqZ_wbQsGn6HyBkE6DpOf",
  folder2: "https://drive.google.com/drive/folders/1J9WT6DMdGUdO1oDVKeULHOCAnBC1odw0",
  folder3: "https://drive.google.com/drive/folders/1J9WT6DMdGUdO1oDVKeULHOCAnBC1odw0"
};

/* Open Photos Main Screen */
function openPhotosModule(content) {
  content.innerHTML = `
    <h2>😘 Choose Folder</h2>

    <div class="photo-buttons">
      <button onclick="openDrive('folder1')">😚</button>
      <button onclick="openDrive('folder2')">😙</button>
      <button onclick="openDrive('folder3')">😗</button>
    </div>
  `;
}

/* Open Drive Folder */
function openDrive(folderKey) {

  const link = DRIVE_LINKS[folderKey];

  if (!link) {
    alert("Folder not found");
    return;
  }

  // open drive in new tab
  window.open(link, "_blank");
}
