// Your code goes here

// Nav Hover 

const navAnimate = document.querySelector("nav");

// Color

navAnimate.addEventListener("mouseover", event => {
    event.target.style.color = "#17A2B8";

    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// Size 

navAnimate.addEventListener("mouseover", event => {

    event.target.style["font-size"] = "30px";
    setTimeout(function () {
        event.target.style["font-size"] = "20px";
    }, 500);
}, false);


// Fun Bus Animations

const funBus = document.querySelector(".fun-bus");

// Movement

funBus.addEventListener("click", event => {
    TweenLite.to(funBus, 2.5, { ease: Back.easeInOut, x: 900 });
    setTimeout(function () {
        TweenLite.to(funBus, 2.5, { ease: Back.easeInOut, x: 0 });
    }, 2000);
}, false);

// Image animations

const imageAnimation1 = document.querySelector(".image-animate1");
imageAnimation1.addEventListener("mouseover", event => {
    TweenMax.to(".image-animate1", 4, { rotationY: 360 });
});

const imageAnimation2 = document.querySelector(".image-animate2");
imageAnimation2.addEventListener("mouseover", event => {
});

