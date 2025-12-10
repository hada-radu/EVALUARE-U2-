let slideIndex = 1; 
let slideshowInterval = null; 
let transitionTime = 3000; 

function showSlides(n) {
    let slides = document.querySelectorAll('#slideshow-container .resource-img');
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    stopSlideshow(); 
    showSlides(slideIndex += n);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    
    const button = document.getElementById('toggle-slideshow');
    if (button) {
        button.textContent = 'START Slideshow';
        button.style.backgroundColor = '#28a745';
    }
}

function startSlideshow() {
    const slides = document.querySelectorAll('#slideshow-container .resource-img');
    
    if (slides.length > 1 && !slideshowInterval) {
        const autoAdvance = () => {
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            showSlides(slideIndex);
        };
        
        slideshowInterval = setInterval(autoAdvance, transitionTime);

        const button = document.getElementById('toggle-slideshow');
        if (button) {
            button.textContent = 'STOP Slideshow';
            button.style.backgroundColor = '#dc3545';
        }
    }
}

function toggleSlideshow() {
    if (slideshowInterval) {
        stopSlideshow(); 
    } else {
        startSlideshow(); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});