const scrollDownButtons = document.querySelectorAll(".scroll-down");
const scrollUpButton = document.querySelector(".scroll-up");
const sections = document.querySelectorAll("section");

const updateButtonsVisibility = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Mostrar el botón "scroll-up" si está suficientemente abajo
    if (scrollPosition > 200) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }

    // Mostrar solo el botón de "scroll-down" para la sección actual
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            scrollDownButtons[index].style.display = "block";
        } else {
            scrollDownButtons[index].style.display = "none";
        }
    });
};

// Desplazarse hacia abajo al hacer clic en un botón
scrollDownButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const nextSection = sections[index + 1]; // Encuentra la siguiente sección
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Desplazarse hacia arriba al hacer clic en el botón "scroll-up"
scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Actualizar los botones de visibilidad al cargar la página y al desplazarse
window.addEventListener("load", () => {
    updateButtonsVisibility();
});

window.addEventListener("scroll", () => {
    updateButtonsVisibility();
});

const gradient = document.getElementById("gradient");
document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    gradient.style.background = `
        radial-gradient(circle at ${clientX}px ${clientY}px, 
        rgba(255, 255, 255, 0.1) 0%, 
        rgba(255, 255, 255, 0.05) 20%, 
        rgba(0, 0, 0, 0) 60%)
    `;
});