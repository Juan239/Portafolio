const scrollDownButtons = document.querySelectorAll(".scroll-down");
const scrollUpButton = document.querySelector(".scroll-up");
const sections = document.querySelectorAll("section");

const updateButtonsVisibility = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > 200) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }

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

const scrollToNearestSection = () => {
    const isResponsiveView = window.innerWidth <= 768;

    if (isResponsiveView) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    let nearestSection = sections[0];
    let minDistance = Infinity;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionCenter = sectionTop + sectionHeight / 2;
        const distance = Math.abs(sectionCenter - (scrollPosition + windowHeight / 2));

        if (distance < minDistance) {
            minDistance = distance;
            nearestSection = section;
        }
    });

    nearestSection.scrollIntoView({ behavior: "smooth" });
};

let debounceTimeout;
window.addEventListener("scroll", () => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        updateButtonsVisibility();
        scrollToNearestSection();
    }, 50);
});

window.addEventListener("load", () => {
    updateButtonsVisibility();
});

scrollDownButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const nextSection = sections[index + 1];
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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