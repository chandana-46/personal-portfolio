// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});
