// Your code goes here

// Nav Hover 

const navAnimate = document.querySelector("nav");

// Color

navAnimate.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = "#17A2B8";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// Size 

navAnimate.addEventListener("mouseover", function (event) {

    // highlight the mouseenter target
    event.target.style["font-size"] = "30px";
    // reset the color after a short delay
    setTimeout(function () {
        event.target.style["font-size"] = "20px";
    }, 500);
}, false);

