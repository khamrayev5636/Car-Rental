const elBody = document.querySelector("body");
const elDark = document.querySelector(".header__dark");
const elDarkSon = document.querySelector(".header__dark-btn");
const elBurger = document.querySelector(".header__burger");
const elClose = document.querySelector(".header__close-btn");
const elHeader = document.querySelector(".header__info");
const elOverlay = document.querySelector(".overlay")

elBurger.addEventListener("click" , ()=> {
    elHeader.classList.add("shownav");
    elOverlay.classList.add("shownav");

});

elClose.addEventListener("click" , ()=> {
    elHeader.classList.remove("shownav");
    elOverlay.classList.remove("shownav");
});

elDark.addEventListener("click", ()=> {
    elBody.classList.toggle("dark");
    elDarkSon.classList.toggle("shownav");
    elClose.classList.toggle("shownav")
})

