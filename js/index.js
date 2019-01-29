// Your code goes here

// Nav Hover 


// Color

const navAnimate = document.querySelector("nav");

navAnimate.addEventListener("mouseenter", function (event) {

    // highlight the mouseenter target
    event.target.style.color = "#17A2B8";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "#212529";
    }, 500);
}, false);

// this handler will be executed every time the cursor is moved over a different list item
navAnimate.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = "#17A2B8";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);