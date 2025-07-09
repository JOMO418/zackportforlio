document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
  
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
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
   