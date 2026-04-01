let slides = document.querySelectorAll(".slider img");
let index = 0;

function showSlide() {
    slides.forEach(img => img.classList.remove("active"));

    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) index = 0;

    setTimeout(showSlide, 2000);
}

showSlide();

 

/* IMAGE SLIDER */
let imgs = document.querySelectorAll(".img-slide");
let i = 0;

function imageSlider() {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[i].classList.add("active");

    i++;
    if (i >= imgs.length) i = 0;

    setTimeout(imageSlider, 2500);
}
imageSlider();

/* VIDEO SLIDER */
let videos = document.querySelectorAll(".video-slide");
let v = 0;

function videoSlider() {
    videos.forEach(video => {
        video.classList.remove("active");
        video.pause();
    });

    videos[v].classList.add("active");
    videos[v].play();

    v++;
    if (v >= videos.length) v = 0;

    setTimeout(videoSlider, 5000);
}
videoSlider();


/* IMAGE SLIDER */
let imgs = document.querySelectorAll(".img-slide1");
let i = 0;

function imageSlider() {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[i].classList.add("active");

    i++;
    if (i >= imgs.length) i = 0;

    setTimeout(imageSlider, 3500);
}
imageSlider();

/* VIDEO SLIDER */
let videos = document.querySelectorAll(".video-slide1");
let v = 0;

function videoSlider() {
    videos.forEach(video => {
        video.classList.remove("active");
        video.pause();
    });

    videos[v].classList.add("active");
    videos[v].play();

    v++;
    if (v >= videos.length) v = 0;

    setTimeout(videoSlider, 10000);
}
videoSlider();

/* IMAGE SLIDER */
let imgs = document.querySelectorAll(".img-slide2");
let i = 0;

function imageSlider() {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[i].classList.add("active");

    i++;
    if (i >= imgs.length) i = 0;

    setTimeout(imageSlider, 3000);
}
imageSlider();

/* VIDEO SLIDER */
let videos = document.querySelectorAll(".video-slide2");
let v = 0;

function videoSlider() {
    videos.forEach(video => {
        video.classList.remove("active");
        video.pause();
    });

    videos[v].classList.add("active");
    videos[v].play();

    v++;
    if (v >= videos.length) v = 0;

    setTimeout(videoSlider, 10000);
}
videoSlider();

