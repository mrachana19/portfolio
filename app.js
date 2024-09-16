document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 100; 

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`header nav a[href*='${section.id}']`).classList.add('active');
      }
    });
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });

  // Typed effect with vintage speed
  const typed = new Typed(".multiple-text", {
    strings: ["Reader", "Developer", "Data Scientist"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    showCursor: false,
  });

  // Scroll Reveal Animation customization for a softer effect
  ScrollReveal({
    distance: '20px',
    duration: 1500,
    easing: 'ease',
    reset: false
  });

  ScrollReveal().reveal('.home', { origin: 'bottom' });
  ScrollReveal().reveal('.about', { origin: 'top' });
  ScrollReveal().reveal('.portfolio-container', { origin: 'bottom', interval: 200 });

  // Add hover sound effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      new Audio('hover-sound.mp3').play(); // Ensure this file exists
    });
  });
});
