// Get the elements
const headingBtn = document.getElementById('heading-btn');
const headingSection = document.getElementById('heading-section');
const imageBtn = document.getElementById('image-btn');
const imageSection = document.getElementById('image-section');
const descriptionBtn = document.getElementById('description-btn');
const descriptionSection = document.getElementById('description-section');
const previewContent = document.getElementById('preview-content');
const previewBtn = document.getElementById('preview-btn');
const downloadBtn = document.getElementById('download-btn');

// Add event listeners to the expandable buttons
headingBtn.addEventListener('click', toggleSection);
imageBtn.addEventListener('click', toggleSection);
descriptionBtn.addEventListener('click', toggleSection);

function toggleSection(event) {
    const targetSection = event.target.id.replace('-btn', '-section');
    const sectionElement = document.getElementById(targetSection);
    sectionElement.classList.toggle('hidden');
}

// Add event listener to the preview button
previewBtn.addEventListener('click', updatePreview);

function updatePreview() {
    // Get the values from the input fields
    const heading = headingSection.querySelector('#heading').value;
    const description = descriptionSection.querySelector('#description').value;

    // Clear the preview content
    previewContent.innerHTML = '';

    // Create the elements to show the preview
    const headingElement = document.createElement('h1');
    headingElement.textContent = heading;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    // If an image is uploaded, create an image element and append it to the preview
    if (imageSection.querySelector('#image').files.length > 0) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageSection.querySelector('#image').files[0]);
        image.classList.add('w-full', 'mb-2');
        previewContent.appendChild(image);
    }

    // Append the heading and description elements to the preview
    previewContent.appendChild(headingElement);
    previewContent.appendChild(descriptionElement);

    // Show the download button
    downloadBtn.classList.remove('hidden');
}

// Add event listener to the download button
downloadBtn.addEventListener('click', downloadContent);

function downloadContent() {
    const previewText = previewContent.innerText;
    const fileBlob = new Blob([previewText], { type: 'text/plain' });
    const url = URL.createObjectURL(fileBlob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'preview.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
