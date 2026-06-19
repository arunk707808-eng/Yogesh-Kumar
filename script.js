
const indicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollTop / docHeight;

    if (window.innerWidth <= 768) {
        indicator.style.transform = `scaleX(${progress})`;
    } else {
        indicator.style.transform = `scaleY(${progress})`;
    }
});

const nav = document.querySelector('nav');
 window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.style.padding = '1rem 3rem';
            } else {
                nav.style.padding = '1.4rem 3rem';
            }
        });

 const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

       const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();