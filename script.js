// =========================================
// JANEESHA PORTFOLIO
// JavaScript
// =========================================


// Page loaded animation
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

});


// Reveal sections when scrolling
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
});


// Navigation active effect
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// Current year automatically
const yearElement = document.querySelector("footer p");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} Janeesha Hansaka Silva. All Rights Reserved.`;

}

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeIcon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

//Back to top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", ()=> {

    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// typing animation
const typingText = document.getElementById("typingText");

const roles = [
    "Data Science Undergraduate",
    "Software Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false ;

function typeEffect(){
    
    const currentRole = roles[roleIndex];

    if (isDeleting){
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting? 40: 80;

    if (!isDeleting && charIndex === currentRole.length){
        typingSpeed= 1800;
        isDeleting= true;
    } else if (isDeleting && charIndex === 0){
        isDeleting = false;
        roleIndex = (roleIndex + 1)% roles.length;
        typingSpeed= 300;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();