document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.getElementById("menu-toggle");
    const hamburger = document.getElementById("navbarHamburger");
    const closeBtn = document.getElementById("closeLogo");

    menuToggle.addEventListener("click", function () {
        hamburger.classList.add("active"); 
        menuToggle.style.display = "none"; 
    });

    closeBtn.addEventListener("click", function () {
        hamburger.classList.remove("active"); 
        menuToggle.style.display = ("block"); 
    });
})