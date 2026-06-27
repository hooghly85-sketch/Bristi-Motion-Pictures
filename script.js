// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});


// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    header.style.background = "rgba(0,0,0,0.85)";
    header.style.boxShadow = "none";
  }
});


// Contact form alert (demo purpose)
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("🎬 Thank you! Your message has been sent to BRISTI MOTION PICTURES.");

  form.reset();
});


// Simple fade-in animation on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease-out";
  observer.observe(section);
});
