 


// ---------------------------------hero carusel start--------------------
const elBtnCompact = document.querySelector(".hero__inner__block-btn-Compact"); 
const elBtnSports = document.querySelector(".hero__inner__block-btn-Sports"); 
const elBtnVans = document.querySelector(".hero__inner__block-btn-Vans"); 
 
const elListCompact = document.querySelector(".hero__inner-list-activ");
const elListPorts = document.querySelector(".hero__inner__list-ports");
const elListVans = document.querySelector(".hero__inner__list-Vans");
 

elBtnCompact.addEventListener("click", function(evt){ 

    evt.preventDefault() 
     
    elListCompact.style.display = "flex";
   elListPorts.style.display = "none"
   elListVans.style.display = "none";
   
})

elBtnSports.addEventListener("click", function(evt){ 

    evt.preventDefault() 
    
   elListPorts.style.display = "flex"
   elListCompact.style.display = "none";
   elListVans.style.display = "none";

}) 

elBtnVans.addEventListener("click", function(evt){ 

    evt.preventDefault() 
    
    elListVans.style.display = "flex";
   elListPorts.style.display = "none"
   elListCompact.style.display = "none";
   

})

// --------------------------------------------hero carusel end------------------------------


