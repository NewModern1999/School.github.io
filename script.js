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
let imgs1 = document.querySelectorAll(".img-slide1");
let i = 0;

function imageSlider1() {
    imgs1.forEach(img1 => img1.classList.remove("active"));
    imgs1[i].classList.add("active");

    i++;
    if (i >= imgs1.length) i = 0;

    setTimeout(imageSlider1, 3500);
}
imageSlider1();

/* VIDEO SLIDER */
let videos1 = document.querySelectorAll(".video-slide1");
let v = 0;

function videoSlider1() {
    videos1.forEach(video1 => {
        video1.classList.remove("active");
        video1.pause();
    });

    videos1[v].classList.add("active");
    videos1[v].play();

    v++;
    if (v >= videos1.length) v = 0;

    setTimeout(videoSlider1, 10000);
}
videoSlider1();

/* IMAGE SLIDER */
let imgs2 = document.querySelectorAll(".img-slide2");
let i = 0;

function imageSlider2() {
    imgs2.forEach(img2 => img2.classList.remove("active"));
    imgs2[i].classList.add("active");

    i++;
    if (i >= imgs2.length) i = 0;

    setTimeout(imageSlider2, 3000);
}
imageSlider2();

/* VIDEO SLIDER */
let videos2 = document.querySelectorAll(".video-slide2");
let v = 0;

function videoSlider2() {
    videos2.forEach(video2 => {
        video2.classList.remove("active");
        video2.pause();
    });

    videos2[v].classList.add("active");
    videos2[v].play();

    v++;
    if (v >= videos2.length) v = 0;

    setTimeout(videoSlider2, 10000);
}
videoSlider2();

