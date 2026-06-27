// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// Form alert
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message Sent Successfully 🎬");
});  e.preventDefault();

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
