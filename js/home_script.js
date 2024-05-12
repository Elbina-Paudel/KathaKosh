function goToKathaPage() {
    window.location.href = 'katha.html';
}

function goToKoshPage() {
    window.location.href = 'kosh.html';
}

document.getElementById('kathaButton').addEventListener('click', goToKathaPage);
document.getElementById('koshButton').addEventListener('click', goToKoshPage);

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

    // Function to check scroll direction
    let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        revealText("down");
    } else {
        // Scrolling up
        revealText("up");
    }

    lastScrollTop = currentScroll;
});

function revealText(direction) {
    let texts = document.querySelectorAll(".scroll-card");

    texts.forEach(function (text) {
        let rect = text.getBoundingClientRect();

        // Check if text is in viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (direction === "down") {
                text.classList.add("show");
            } else {
                text.classList.remove("show");
            }
        }
    });
}
