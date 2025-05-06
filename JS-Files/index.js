document.addEventListener("DOMContentLoaded", function(){
    const androidStatsToggle = document.getElementById("toggleButtonAndroid"); 
    const statsBtn = document.getElementById("containerStatsAndroid"); 
    const descBtn = document.getElementById("NamonDescAndroid"); 
    const fadeTransition = document.getElementsByClassName("fade"); 

    androidStatsToggle.addEventListener("click", function () {
        
        if(statsBtn.style.visibility == "hidden"){
            statsBtn.style.visibility = ("visible"); 
            statsBtn.style.opacity = "1"; 
            statsBtn.style.pointerEvents = "auto"; 

            descBtn.style.visibility = "hidden"; 
            descBtn.style.opacity = "0"; 
            descBtn.style.pointerEvents = "none"; 
            
        }
        else{
            statsBtn.style.visibility = ("hidden"); 
            statsBtn.style.opacity = "0"; 
            statsBtn.style.pointerEvents = "none"; 

            descBtn.style.visibility = "visible"; 
            descBtn.style.opacity = "1"; 
            descBtn.style.pointerEvents = "auto"; 
        }

    });
})