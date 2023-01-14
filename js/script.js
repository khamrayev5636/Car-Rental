
 


// ---------------------------------hero carusel start--------------------
const elBtnCompact = document.querySelector(".hero__inner__block-btn-Compact"); 
const elBtnSports = document.querySelector(".hero__inner__block-btn-Sports"); 
const elBtnVans = document.querySelector(".hero__inner__block-btn-Vans"); 
 
const elListCompact = document.querySelector(".hero__inner-list-activ");
const elListPorts = document.querySelector(".hero__inner__list-ports");
const elListVans = document.querySelector(".hero__inner__list-Vans");
 

elBtnCompact.addEventListener("click", function(evt){ 

    evt.preventDefault() 
      
    elBtnCompact.style.background = "#299764";
    elBtnCompact.style.color = "#FFFFFF"; 

    elBtnSports.style.background = "#ffffff";
    elBtnSports.style.color = "#333333";

    elBtnVans.style.background = "#ffffff";
    elBtnVans.style.color = "#333333"; 


    elListCompact.style.display = "flex";
   elListPorts.style.display = "none"
   elListVans.style.display = "none";
   
})

elBtnSports.addEventListener("click", function(evt){ 

    evt.preventDefault() 
    elBtnSports.style.background = "#299764";
    elBtnSports.style.color = "#FFFFFF";

    elBtnCompact.style.background = "#ffffff";
    elBtnCompact.style.color = "#333333"; 

    elBtnVans.style.background = "#ffffff";
    elBtnVans.style.color = "#333333";

   elListPorts.style.display = "flex"
   elListCompact.style.display = "none";
   elListVans.style.display = "none";

}) 

elBtnVans.addEventListener("click", function(evt){ 

    evt.preventDefault() 
    elBtnVans.style.background = "#299764";
    elBtnVans.style.color = "#FFFFFF"; 

    elBtnCompact.style.background = "#ffffff";
    elBtnCompact.style.color = "#333333";

    elBtnSports.style.background = "#ffffff";
    elBtnSports.style.color = "#333333";
    
    elListVans.style.display = "flex";
   elListPorts.style.display = "none"
   elListCompact.style.display = "none";
   

}) 
//--------------------------------------hero carusel end-----------------------------------------------


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

