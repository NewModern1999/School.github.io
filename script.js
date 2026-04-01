/* ===== CENTER SLIDER ===== */
(function(){
let slides = document.querySelectorAll(".slider img");
let index = 0;

function run(){
    slides.forEach(img => img.classList.remove("active"));
    slides[index].classList.add("active");

    index = (index + 1) % slides.length;
    setTimeout(run, 2000);
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
    setTimeout(run1, 2500);
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
    setTimeout(runV1, 5000);
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
    setTimeout(run2, 3500);
}
if(imgs2.length) run2();
})();


/* ===== VIDEO SLIDER 2 ===== */
(function(){
let vids2 = document.querySelectorAll(".video-slide1");
let v2 = 0;

function runV2(){
    vids2.forEach(v => { v.classList.remove("active"); v.pause(); });

    vids2[v2].classList.add("active");
    vids2[v2].play();

    v2 = (v2 + 1) % vids2.length;
    setTimeout(runV2, 10000);
}
if(vids2.length) runV2();
})();


/* ===== IMAGE SLIDER 3 ===== */
(function(){
let imgs3 = document.querySelectorAll(".img-slide2");
let i3 = 0;

function run3(){
    imgs3.forEach(img => img.classList.remove("active"));
    imgs3[i3].classList.add("active");

    i3 = (i3 + 1) % imgs3.length;
    setTimeout(run3, 3000);
}
if(imgs3.length) run3();
})();


/* ===== VIDEO SLIDER 3 ===== */
(function(){
let vids3 = document.querySelectorAll(".video-slide2");
let v3 = 0;

function runV3(){
    vids3.forEach(v => { v.classList.remove("active"); v.pause(); });

    vids3[v3].classList.add("active");
    vids3[v3].play();

    v3 = (v3 + 1) % vids3.length;
    setTimeout(runV3, 10000);
}
if(vids3.length) runV3();
})();


