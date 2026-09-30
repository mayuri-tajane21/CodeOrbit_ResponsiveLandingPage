// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");

    menuBtn.textContent =
        navLinks.classList.contains("mobile-open") ? "✕" : "☰";
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        menuBtn.textContent = "☰";
    });
});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


// ================= WORKFLOW INTERACTION =================

const steps = document.querySelectorAll(".step");

steps.forEach((step) => {

    step.addEventListener("click", () => {

        steps.forEach((item) => {
            item.classList.remove("active");
        });

        step.classList.add("active");
    });

});


// ================= FEATURE CARD INTERACTION =================

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-7px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});


// ================= TASK CHECKBOX INTERACTION =================

const taskChecks = document.querySelectorAll(".task .check");

taskChecks.forEach((check) => {

    check.addEventListener("click", () => {

        check.classList.toggle("done");

        if (check.classList.contains("done")) {
            check.textContent = "✓";
        } else {
            check.textContent = "";
        }

    });

});


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.style.boxShadow = "0 4px 20px rgba(23, 33, 43, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// ================= PAGE LOAD =================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
