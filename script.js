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