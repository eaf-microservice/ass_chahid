// Achievements Video Modal Functionality

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".video-modal-close");
  const youtubePlayer = document.getElementById("youtubePlayer");

  // Function to open modal with YouTube video
  function openVideoModal(videoId) {
    if (
      !videoId ||
      videoId === "YOUR_VIDEO_ID_1" ||
      videoId.includes("YOUR_VIDEO_ID")
    ) {
      alert(
        "يرجى إضافة معرف فيديو اليوتيوب لهذه البطاقة\nPlease add YouTube video ID for this card",
      );
      return;
    }

    // Set the YouTube embed URL with autoplay
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    youtubePlayer.src = embedUrl;

    // Show the modal
    modal.style.display = "block";

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  }

  // Function to close modal
  function closeVideoModal() {
    // Stop the video by clearing the src
    youtubePlayer.src = "";

    // Hide the modal
    modal.style.display = "none";

    // Restore body scroll
    document.body.style.overflow = "auto";
  }

  // Add click event to all video buttons
  const videoButtons = document.querySelectorAll(".watch-video-btn");
  videoButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      // Prevent event bubbling
      event.stopPropagation();

      // Get the parent card and its video ID
      const card = this.closest(".achievement-card");
      const videoId = card.getAttribute("data-video-id");
      openVideoModal(videoId);
    });
  });

  // Close modal when clicking the close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeVideoModal);
  }

  // Close modal when clicking outside the video
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeVideoModal();
    }
  });

  // Close modal on ESC key press
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeVideoModal();
    }
  });
});
