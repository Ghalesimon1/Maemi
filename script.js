// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Clickable Cards → Contact Section
document.querySelectorAll(".clickable-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelector("#contact-section")
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Hero Slideshow
const slides = document.querySelectorAll(".hero-bg img");
let currentSlide = 0;

function changeSlide(){
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);
