const images = document.querySelectorAll(".certificates-list img");
let index = 0;

const currentSpan = document.getElementById("current");
const totalSpan = document.getElementById("total");
totalSpan.textContent = images.length;

function showImage() {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");

    currentSpan.textContent = index + 1;
}

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage();
});

showImage();

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header .right-header ul li a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`header .right-header ul li a[href="#${entry.target.id}"]`)
                .classList.add("active");
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

