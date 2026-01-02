/* =========================
   NAVBAR ACTIVE LINK
========================= */
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    });
});


/* =========================
   SMOOTH SCROLLING
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100, // fixed header space
                behavior: "smooth"
            });
        }
    });
});


/* =========================
   HEADER SHADOW ON SCROLL
========================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.boxShadow = "none";
    }
});


/* =========================
   CONTACT FORM HANDLING
========================= */
const form = document.querySelector(".contact-form form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    alert("Message sent successfully! 😊");

    form.reset(); // clear form
});
