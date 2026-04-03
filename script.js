/* ===== CENTER SLIDER ===== */
(function(){
let slides = document.querySelectorAll(".slider img");
let index = 0;

function run(){
    slides.forEach(img => img.classList.remove("active"));
    slides[index].classList.add("active");

    index = (index + 1) % slides.length;
    setTimeout(run, 7000);
}
if(slides.length) run();
})();


/* ===== IMAGE SLIDER 1 ===== */
(function(){
let imgs1 = document.querySelectorAll(".img-slide");
let i1 = 0;

function run1(){
    imgs1.forEach(img => img.classList.remove("active"));
    imgs1[i1].classList.add("active");

    i1 = (i1 + 1) % imgs1.length;
    setTimeout(run1, 4500);
}
if(imgs1.length) run1();
})();


/* ===== VIDEO SLIDER 1 ===== */
(function(){
let vids1 = document.querySelectorAll(".video-slide");
let v1 = 0;

function runV1(){
    vids1.forEach(v => { v.classList.remove("active"); v.pause(); });

    vids1[v1].classList.add("active");
    vids1[v1].play();

    v1 = (v1 + 1) % vids1.length;
    setTimeout(runV1, 20000);
}
if(vids1.length) runV1();
})();


/* ===== IMAGE SLIDER 2 ===== */
(function(){
let imgs2 = document.querySelectorAll(".img-slide1");
let i2 = 0;

function run2(){
    imgs2.forEach(img => img.classList.remove("active"));
    imgs2[i2].classList.add("active");

    i2 = (i2 + 1) % imgs2.length;
    setTimeout(run2, 6500);
}
if(imgs2.length) run2();
})();


 


/* ===== IMAGE SLIDER 3 ===== */
(function(){
let imgs3 = document.querySelectorAll(".img-slide2");
let i3 = 0;

function run3(){
    imgs3.forEach(img => img.classList.remove("active"));
    imgs3[i3].classList.add("active");

    i3 = (i3 + 1) % imgs3.length;
    setTimeout(run3, 9000);
}
if(imgs3.length) run3();
})();


/* ===== IMAGE SLIDER 4 ===== */
(function(){
let imgs4 = document.querySelectorAll(".img-slide3");
let i4 = 0;

function run4(){
    imgs4.forEach(img => img.classList.remove("active"));
    imgs4[i4].classList.add("active");

    i4 = (i4 + 1) % imgs4.length;
    setTimeout(run4, 9000);
}
if(imgs4.length) run4();
})();
