const elCarsLinks = document.querySelectorAll(".cars__link");
const elCarsItems = document.querySelectorAll(".cars__item");
const elPanelItems = document.querySelectorAll(".cars__panel");


elCarsLinks.forEach(link => {
    
    link.addEventListener("click" , evt =>{
        evt.preventDefault();

        elCarsItems.forEach(item => {
            item.classList.remove("cars__item--active");
        });

        link.parentElement.classList.add("cars__item--active");

        elPanelItems.forEach(panel => {
            panel.classList.remove("cars__panel--active")
        });

        document.querySelector(link.getAttribute("href")).classList.add("cars__panel--active");

    }); 
})

// Header burger js start


const elBody = document.querySelector("body");
const elDark = document.querySelector(".header__dark");
const elDarkSon = document.querySelector(".header__dark-btn");
const elBurger = document.querySelector(".header__burger");
const elClose = document.querySelector(".header__close-btn");
const elHeader = document.querySelector(".header__info");
const elLogin = document.querySelector(".header__login-regis");
const elModal = document.querySelector(".modal");
const elModalClose = document.querySelector(".modal__close");
const elModalOverlay = document.querySelector(".overlay__modal")
const elOverlay = document.querySelector(".overlay");

// Burger star

elBurger.addEventListener("click" , ()=> {
    elHeader.classList.add("shownav");
    elOverlay.classList.add("shownav");
    elBody.classList.add("body-js");
    
});

elClose.addEventListener("click" , ()=> {
    elHeader.classList.remove("shownav");
    elOverlay.classList.remove("shownav");
    elBody.classList.remove("body-js");
});

// Dark start

elDark.addEventListener("click", ()=> {
    elBody.classList.toggle("dark");
    elDarkSon.classList.toggle("shownav");
    elClose.classList.toggle("shownav")
})

// Modal start

elLogin.addEventListener("click" , ()=> {
    elModal.classList.add("modal-js");
    elModalOverlay.classList.add("overlay__modal-js");
})

elModalClose.addEventListener("click" , ()=> {
    elModal.classList.remove("modal-js");
    elModalOverlay.classList.remove("overlay__modal-js");
})

// Scroll start

const scrollBtn = document.querySelector(".scroll__top");
window.addEventListener("scroll" , ()=> {
    scrollBtn.classList.toggle("active" , window.scrollY > 500)
})

scrollBtn.addEventListener("click" , ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// Slick start

// Community slick js


