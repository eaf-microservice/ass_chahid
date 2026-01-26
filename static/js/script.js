document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.createElement("button");
  mobileBtn.classList.add("mobile-menu-btn");
  mobileBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';

  // Style the button briefly here for functionality, though ideally in CSS
  mobileBtn.style.color = "white";
  mobileBtn.style.background = "none";
  mobileBtn.style.border = "none";
  mobileBtn.style.cursor = "pointer";
  mobileBtn.style.display = "none"; // Hidden by default

  // Insert into DOM
  const navbarContainer = document.querySelector(".navbar .container");
  if (navbarContainer) {
    navbarContainer.appendChild(mobileBtn);
  }

  // Media query check for showing button (JS-side fallback)
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      mobileBtn.style.display = "block";
    } else {
      mobileBtn.style.display = "none";
    }
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);

  // Toggle Logic
  const navLinks = document.querySelector(".nav-links");
  mobileBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll("section, h1, h2, .card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
  });
});
