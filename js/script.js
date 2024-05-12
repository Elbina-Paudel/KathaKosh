document.addEventListener('DOMContentLoaded'), function () {
    const storyForm = document.getElementById('story-form');
    const storyContainer = document.getElementById('story-container')
};

// Handle form submission
storyForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const storyTitle = document.getElementById('story-title').value;
    const mediaType = document.getElementById('media-type').value;
    let mediaContent = '';

    // Determine media content based on selected type
    if (mediaType === 'image') {
        const imageFile = document.getElementById('media-input').files[0];
        mediaContent = URL.createObjectURL(imageFile);
    } else if (mediaType === 'video') {
        mediaContent = document.getElementById('media-input').value;
    } else if (mediaType === 'url') {
        mediaContent = document.getElementById('media-input').value;
    }

    const storyContent = document.getElementById('story-content').value;

    // Create new story element
    const storyElement = document.createElement('div');
    storyElement.classList.add('story-container');

    // Construct story HTML based on media type
    if (mediaType === 'image') {
        storyElement.innerHTML = `
                <div class="header">
                    <h1>${storyTitle}</h1>
                </div>
                <div class="main-content">
                    <div class="video-container">
                        <img src="${mediaContent}" alt="Story Image">
                    </div>
                    <div class="story-text">
                        <p>${storyContent}</p>
                    </div>
                </div>
            `;
    } else if (mediaType === 'video') {
        storyElement.innerHTML = `
                <div class="header">
                    <h1>${storyTitle}</h1>
                </div>
                <div class="main-content">
                    <div class="video-container">
                        <iframe src="${mediaContent}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="story-text">
                        <p>${storyContent}</p>
                    </div>
                </div>
            `;
    } else if (mediaType === 'url') {
        storyElement.innerHTML = `
                <div class="header">
                    <h1>${storyTitle}</h1>
                </div>
                <div class="main-content">
                    <div class="video-container">
                        <img src="${mediaContent}" alt="Story Media">
                    </div>
                    <div class="story-text">
                        <p>${storyContent}</p>
                    </div>
                </div>
            `;
    }

    // Append new story to story container
    storyContainer.appendChild(storyElement);

    // Reset form fields after submission
    storyForm.reset();
});

// Update media input based on selected type
const mediaTypeSelect = document.getElementById('media-type');
const mediaInputContainer = document.getElementById('media-input-container');

mediaTypeSelect.addEventListener('change'), function () {
    const selectedType = mediaTypeSelect.value;

    // Clear existing input fields
    mediaInputContainer.innerHTML = '';

    if (selectedType === 'image') {
        mediaInputContainer.innerHTML = `
                <input type="file" id="media-input" accept="image/*" required>
            `;
    }
}


