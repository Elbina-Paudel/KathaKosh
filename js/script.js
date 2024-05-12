
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('imageSlider');
    const imagesFolder = '../images/'; 

    const imageFilenames = ['janakpur.jpg', 'kumari.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg','5.jpg', '6.jpg', '7.jpg', '8.jpg'];

    imageFilenames.forEach(function(filename) {
        const img = document.createElement('img');
        img.src = imagesFolder + filename;
        img.alt = filename; 
        slider.appendChild(img); 
    });
});


