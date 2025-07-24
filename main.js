document.addEventListener("DOMContentLoaded", function () {
  // === Hamburger Menu Toggle ===
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

  // === Typed.js Animation ===
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

  // === Counter Animation on Scroll ===
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

    // === Back to Top Button Show/Hide ===
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // === Back to Top Button Click ===
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Clock Function ===
  function updateClock() {
    const now = new Date();
    const options = {
      timeZone: 'Africa/Nairobi',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const time = now.toLocaleTimeString('en-KE', options);
    document.getElementById("clock").textContent = time;
  }
  setInterval(updateClock, 1000);
  updateClock();
});

// === AOS Init (doesn't need to wait for DOM) ===
AOS.init({
  duration: 800,
  once: true,
  offset: 120,
});

// === particles.js Init (doesn’t need DOMContentLoaded either) ===
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
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false },
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

document.querySelectorAll('[data-bs-toggle="modal"]').forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetId = btn.getAttribute("data-bs-target").replace("#", "");
    const modalEl = document.getElementById(targetId);
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  });
});