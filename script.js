let slides = document.querySelectorAll(".slides img");
let index = 0;

function showSlide() {
    slides.forEach(img => img.classList.remove("active"));

    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }

    setTimeout(showSlide, 2000);
}

showSlide();
