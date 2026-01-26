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

    // --- Animation Observer ---
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .instructor-card, .card, .hero-content > *').forEach(el => {
        if (!el.closest('.hero')) { 
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        }
        animObserver.observe(el);
    });

    // --- Scroll Spy Observer ---
    const spySections = document.querySelectorAll('header.hero, section, footer');
    const navLinksList = document.querySelectorAll('.nav-link');

    const updateNav = (id) => {
        navLinksList.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (id === 'home' && (href === 'index.html' || href === '#' || href.endsWith('index.html'))) {
                link.classList.add('active');
            } else if (id && (href === '#' + id || href.endsWith('#' + id))) {
                link.classList.add('active');
            }
        });
    };

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let id = entry.target.getAttribute('id');
                if (entry.target.tagName === 'HEADER' || entry.target.classList.contains('hero')) {
                    id = 'home';
                }
                if (id) updateNav(id);
            }
        });
    }, { 
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    });

    spySections.forEach(section => spyObserver.observe(section));
});
