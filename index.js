'use strict';
const arrows = document.querySelectorAll(".courses-title");
arrows.forEach(function (arrow) {
    arrow.addEventListener("click", function (event) {
        if (event.target.classList.contains("expanded")) {
            event.currentTarget.nextElementSibling.style.height = "0";
            event.currentTarget.nextElementSibling.style.visibility = "hidden";
            event.currentTarget.nextElementSibling.style.animationName = "null";
            event.target.src = "Images/Arr6.png";
            event.target.classList.remove("expanded");
        } else {
            event.currentTarget.nextElementSibling.style.height = "auto";
            event.currentTarget.nextElementSibling.style.visibility = "visible";
            event.currentTarget.nextElementSibling.style.animationDuration = "1.0s";
            event.currentTarget.nextElementSibling.style.animationName = "changeHeight";
            event.currentTarget.nextElementSibling.style.transition = "height 1.0s";
            event.target.src = "Images/cancel.png";
            event.target.classList.add("expanded");
        }
    })
});