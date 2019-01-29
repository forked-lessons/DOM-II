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
imageAnimation2.addEventListener("dblclick", event => {
    TweenMax.to(".image-animate2", 4, { rotationX: 360 });
});

// Bottom Image Animations

const btmImg = document.querySelector(".btm-img");
btmImg.addEventListener("mouseover", event => {
    TweenMax.to(".btm-img", 3, { scale: 1, skewX: 0, rotation: 360 });
});

// prevent default
const prevDef = document.querySelector(".btn");
prevDef.addEventListener("click", function (event) {
    prevDef.innerHTML = "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
}, false);

// Drag / drop 
function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dropEffect = "move";
}

function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
}

// Scroll

window.addEventListener('scroll', e => {
    TweenMax.to('.content-section', 1, { rotation: -360 })
})

// Keydown
const navBackground = document.querySelector('.nav-container');
document.addEventListener('keydown', e => {
    navBackground.style.background = getRandomColor();
});

// Stop Propagation
const destination = document.querySelector('.content-destination h2');
destination.addEventListener('copy', e => {
    e.stopPropagation();
    destination.style["font-size"] = 40;
})