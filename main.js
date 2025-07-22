document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
// Close navbar when a nav-link is clicked (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', () => {
  document.querySelector('.navbar').classList.remove('active');
  document.querySelector('.hamburger').classList.remove('active');
});
});

  document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
      strings: [
        "Medical Sales Representative",
    "Healthcare Advocate",
    "Pharmaceutical Product Specialist",
    "Pharmaceutical Sales Manager",
    "Good Partner with Doctors & Pharmacies",
    "Health Enthusiast",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });
  });
  const counters = document.querySelectorAll('.count');
  let counterStarted = false;
  
  function runCounters() {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / 100);
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
  
  window.addEventListener('scroll', () => {
    const expSection = document.querySelector('.experience-section');
    const sectionTop = expSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100 && !counterStarted) {
      counterStarted = true;
      runCounters();
    }
  });
  // === AOS (Animate on Scroll) Initialization ===
AOS.init({
  duration: 800,     // animation duration
  once: true,        // animate only once
  offset: 120,       // offset from the trigger point
});

// === Particles.js Background Effect ===
particlesJS("particles-js", {
  particles: {
    number: { value: 40 },
    color: { value: "#1e40af" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1e3a8a",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});

// === (Optional) Dark Mode Toggle Support ===
// Uncomment this if you want a dark mode toggle
/*
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn?.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme', 'dark');
});
*/
