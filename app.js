let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle navbar on menu icon click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Update "Contact Me" button with dynamic email content
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector('.btn-box a[href^="mailto:"]');
  contactButton.addEventListener("click", function (event) {
    // Set subject and body dynamically for the email
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent(
      "Hi Rachana,\n\nI came across your portfolio and would love to discuss opportunities and collaborations."
    );
    this.href = `mailto:rachana.mahapatra@utdallas.edu?subject=${subject}&body=${body}`;

    // Log or handle the click event as needed
    console.log("Contact Me button was clicked.");
  });
});

// Highlight active section link in the navbar while scrolling
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Remove the menu icon active class on scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll reveal animations configuration
ScrollReveal({
  reset: true,
  distance: "15px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".left", { origin: "left" });
ScrollReveal().reveal(".right", { origin: "right" });
ScrollReveal().reveal(".top", { origin: "top" });
ScrollReveal().reveal(".bottom", { origin: "bottom" });

// Typed.js for typing animation in the home section
const typed = new Typed(".multiple-text", {
  strings: [
    "Data Engineer",
    "Business Analyst",
    "Machine Learning Enthusiast",
    "Data Science Professional",
    "Creative Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
