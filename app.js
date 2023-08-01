function showHeading() {
  const inputBox = document.getElementById("inputBox");
  const previewBox = document.getElementById("previewBox");
  inputBox.innerHTML = `
    <input type="text" class="border rounded p-2 w-1/2" placeholder="Enter heading...">
  `;
  inputBox.style.display = "block";
  previewBox.innerHTML = inputBox.innerHTML;
}

function showImageUpload() {
  const inputBox = document.getElementById("inputBox");
  const previewBox = document.getElementById("previewBox");
  inputBox.innerHTML = `
    <input type="file" id="imageInput" class="p-2 w-1/2">
  `;
  inputBox.style.display = "block";
  previewBox.innerHTML = inputBox.innerHTML;

  // Handle image preview
  const imageInput = document.getElementById("imageInput");
  imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewBox.innerHTML = `<img src="${e.target.result}" class="max-h-40">`;
      };
      reader.readAsDataURL(file);
    } else {
      previewBox.innerHTML = "";
    }
  });
}

function showDescription() {
  const inputBox = document.getElementById("inputBox");
  const previewBox = document.getElementById("previewBox");
  inputBox.innerHTML = `
    <textarea class="border rounded p-2 w-1/2" placeholder="Enter description..."></textarea>
  `;
  inputBox.style.display = "block";
  previewBox.innerHTML = inputBox.innerHTML;
}

// Handle Download Image button click
const btnDownload = document.getElementById("btnDownload");
btnDownload.addEventListener("click", function () {
  // Get the preview image source
  const previewImageSrc = document.getElementById("previewBox").querySelector("img")?.src;

  if (previewImageSrc) {
    // Create a temporary anchor element to download the image
    const downloadLink = document.createElement("a");
    downloadLink.href = previewImageSrc;
    downloadLink.download = "preview_image.jpg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } else {
    alert("No image to download.");
  }
});
