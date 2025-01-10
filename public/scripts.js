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

function scrollToContent() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
    });
}