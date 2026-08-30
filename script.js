/* =========================================
   INITIALIZE LUCIDE ICONS
========================================= */

lucide.createIcons();


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuButton.querySelector("svg");

    if (nav.classList.contains("active")) {

        menuButton.innerHTML = '<i data-lucide="x"></i>';

    } else {

        menuButton.innerHTML = '<i data-lucide="menu"></i>';

    }

    lucide.createIcons();

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuButton.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});


/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".info-card, .service-card, .process-step, .formation-item, .contact-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================
   BUTTON HOVER EFFECT
========================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "all 0.3s ease";

    });

});


/* =========================================
   UPDATE YEAR AUTOMATICALLY
========================================= */

const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Luiz Felippe Veríssimo. Todos os direitos reservados.`;

}

/* =========================================
   MODAL HANDLER
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("trajetoriaModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModal");

    if (openModalBtn && modal) {
        openModalBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
            document.body.style.overflow = "hidden"; // Stop background scroll
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });
    }
});