let slideIdx = 1; 

function changeSlides(page) {
    displaySlides(slideIdx += page);
}

function currSlide(page) {
    displaySlides(slideIdx = page);
}

function displaySlides(page) {
    let j; 
    let k; 
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (page < 1){
        slideIdx = slides.length; 
    }
    if (page > slides.length){
        slideIdx = 1; 
    }
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    for (k = 0; k < dots.length; k++) {
        dots[k].className = dots[k].className.replace(" active", "");
    }
    slides[slideIdx-1].style.display = "block"; 
    dots[slideIdx-1].className += " active"; 
}