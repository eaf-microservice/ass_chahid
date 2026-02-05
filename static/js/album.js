document.addEventListener("DOMContentLoaded", () => {
    const albumScroll = document.getElementById("album-scroll");
    const albumContainer = document.getElementById("album-container");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    if (!albumScroll) return;

    const images = Array.from(albumScroll.children);
    
    // Duplicate images for a seamless loop
    images.forEach(image => {
        const clone = image.cloneNode(true);
        albumScroll.appendChild(clone);
    });

    let scrollInterval;
    const scrollSpeed = 1; // Adjust for faster or slower scrolling

    function autoScroll() {
        scrollInterval = setInterval(() => {
            albumScroll.scrollLeft += scrollSpeed;

            // If scrolled to the end of the original set, reset to the beginning
            if (albumScroll.scrollLeft >= albumScroll.scrollWidth / 2) {
                albumScroll.scrollLeft = 0;
            }
        }, 30); // Adjust interval for smoother animation
    }

    function stopAutoScroll() {
        clearInterval(scrollInterval);
    }

    albumContainer.addEventListener("mouseover", stopAutoScroll);
    albumContainer.addEventListener("mouseout", autoScroll);

    prevButton.addEventListener("click", () => {
        albumScroll.scrollLeft -= 300; // Adjust scroll amount
    });

    nextButton.addEventListener("click", () => {
        albumScroll.scrollLeft += 300; // Adjust scroll amount
    });

    autoScroll(); // Start the auto-scroll
});
