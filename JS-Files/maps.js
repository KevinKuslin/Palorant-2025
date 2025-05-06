document.addEventListener("DOMContentLoaded", function(){
    const mapChoices = document.querySelectorAll(".containerIndividualMaps");
    const mapContents = document.querySelectorAll("#mapsContentList > div");
    const androidMapChoices = document.querySelectorAll(".androidMapImage"); 

    function mapSelection(mapIdx) {
        mapContents.forEach(content => content.style.display = "none");

        if (mapContents[mapIdx]) {
            mapContents[mapIdx].style.display = "flex";
        } 
    }

    mapChoices.forEach((map, index) => {
        map.addEventListener("click", () => mapSelection(index));
    });

    androidMapChoices.forEach((mapAndroid, indexAndroid) => {
        mapAndroid.addEventListener("click", () => mapSelection(indexAndroid)); 
    });

    mapContents.forEach(content => content.style.display = "none"); 

    mapContents.forEach((content, index) => {
        content.style.display = index === 2 ? "flex" : "none"; 
    });


    const scrollContainer = document.getElementById("androidMapsChoice");
    scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
})

window.onload = function() {
    const metroStockImages = ["/Images/PalorantMetro3.jpg", "/Images/PalorantMetro4.jpg"]; 
    let metroIdxDesktop = 0; 
    let metroIdxAndroid = 0; 

    window.changeMetroDesktopImage = function() {
        metroIdxDesktop = (metroIdxDesktop + 1) % metroStockImages.length; 
        metroIdxAndroid = metroIdxDesktop; 
        document.getElementById("metroDesktopImage").src = metroStockImages[metroIdxDesktop];  
        document.getElementById("metroAndroidImage").src = metroStockImages[metroIdxDesktop];  
    }

    window.changeMetroAndroidImage = function() {
        metroIdxAndroid = (metroIdxAndroid + 1) % metroStockImages.length; 
        document.getElementById("metroAndroidImage").src = metroStockImages[metroIdxAndroid];  
        document.getElementById("metroDesktopImage").src = metroStockImages[metroIdxAndroid]; 
    }

    const suburbStockImages = ["/Images/PalorantSuburb2.webp", "/Images/PalorantSuburb5.jpg"]; 
    let suburbIdxDesktop = 0; 
    let suburbIdxAndroid = 0; 

    window.changeSuburbDesktopImage = function() {
        suburbIdxDesktop = (suburbIdxDesktop + 1) % suburbStockImages.length; 
        suburbIdxAndroid = suburbIdxDesktop; 
        document.getElementById("suburbDesktopImage").src = suburbStockImages[suburbIdxDesktop];  
        document.getElementById("suburbAndroidImage").src = suburbStockImages[suburbIdxDesktop];  
    }

    window.changeSuburbAndroidImage = function() {
        suburbIdxAndroid = (suburbIdxAndroid + 1) % suburbStockImages.length; 
        document.getElementById("suburbAndroidImage").src = suburbStockImages[suburbIdxAndroid];  
        document.getElementById("suburbDesktopImage").src = suburbStockImages[suburbIdxAndroid]; 
    }

    const templeStockImages = ["/Images/PalorantTemple1.jpg", "/Images/PalorantTemple2.webp"]; 
    let templeIdxDesktop = 0; 
    let templeIdxAndroid = 0; 

    window.changeTempleDesktopImage = function() {
        templeIdxDesktop = (templeIdxDesktop + 1) % templeStockImages.length; 
        templeIdxAndroid = templeIdxDesktop; 
        document.getElementById("templeDesktopImage").src = templeStockImages[templeIdxDesktop];  
        document.getElementById("templeAndroidImage").src = templeStockImages[templeIdxDesktop];  
    }

    window.changeTempleAndroidImage = function() {
        templeIdxAndroid = (templeIdxAndroid + 1) % templeStockImages.length; 
        document.getElementById("templeAndroidImage").src = templeStockImages[templeIdxAndroid];  
        document.getElementById("templeDesktopImage").src = templeStockImages[templeIdxAndroid]; 
    }

    const dockStockImages = ["/Images/PalorantDock2.jpg", "/Images/PalorantDock3.jpg"]; 
    let dockIdxDesktop = 0; 
    let dockIdxAndroid = 0; 

    window.changeDockDesktopImage = function() {
        dockIdxDesktop = (dockIdxDesktop + 1) % dockStockImages.length; 
        dockIdxAndroid = dockIdxDesktop; 
        document.getElementById("dockDesktopImage").src = dockStockImages[dockIdxDesktop];  
        document.getElementById("dockAndroidImage").src = dockStockImages[dockIdxDesktop];  
    }

    window.changeDockAndroidImage = function() {
        dockIdxAndroid = (dockIdxAndroid + 1) % dockStockImages.length; 
        document.getElementById("dockAndroidImage").src = dockStockImages[dockIdxAndroid];  
        document.getElementById("dockDesktopImage").src = dockStockImages[dockIdxAndroid]; 
    }

    const ruinsStockImages = ["/Images/PalorantRuins2.webp", "/Images/PalorantRuins3.jpg"]; 
    let ruinsIdxDesktop = 0; 
    let ruinsIdxAndroid = 0; 

    window.changeRuinsDesktopImage = function() {
        ruinsIdxDesktop = (ruinsIdxDesktop + 1) % ruinsStockImages.length; 
        ruinsIdxAndroid = ruinsIdxDesktop; 
        document.getElementById("ruinsDesktopImage").src = ruinsStockImages[ruinsIdxDesktop];  
        document.getElementById("ruinsAndroidImage").src = ruinsStockImages[ruinsIdxDesktop];  
    }

    window.changeRuinsAndroidImage = function() {
        ruinsIdxAndroid = (ruinsIdxAndroid + 1) % ruinsStockImages.length; 
        document.getElementById("ruinsAndroidImage").src = ruinsStockImages[ruinsIdxAndroid];  
        document.getElementById("ruinsDesktopImage").src = ruinsStockImages[ruinsIdxAndroid]; 
    }
};