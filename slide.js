let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carouselInner');
    const totalItems = document.querySelectorAll('.carouselItem').length;
    const maxIndex = totalItems - 1;

    if (index < 0) {
        currentIndex = maxIndex;
    } else if (index > maxIndex) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

showSlide(currentIndex);
