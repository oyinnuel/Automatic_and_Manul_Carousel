const slides = document.getElementsByClassName('carousel-item')
let dots = document.getElementsByClassName("dot")

let slidePosition = 0
const totalSlides = slides.length
const totalDots = dots.length

let timeOut = 2000
let autoOn = true

autoSlides()

function autoSlides() {
    timeOut = timeOut - 20

    if (autoOn == true && timeOut < 0) {
        moveToNextSlide()
    }
    setTimeout(autoSlides, 20)
}

const carouselButtonNext = document.getElementById('carousel-button-next')
const carouselButtonPrev = document.getElementById('carousel-button-prev')

carouselButtonNext.addEventListener('click', moveToNextSlide)
carouselButtonPrev.addEventListener('click', moveToPrevSlide)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function moveToNextSlide() {
    timeOut = 2000

    hideAllSlides()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add("carousel-item-visible")

    dots[slidePosition].classList.remove("active")

    if (slidePosition === totalDots - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    dots[slidePosition].classList.add("active")
}

function moveToPrevSlide() {
    timeOut = 2000

    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }

    slides[slidePosition].classList.add("carousel-item-visible")

    dots[slidePosition].classList.remove("active")

    if (slidePosition === 0) {
        slidePosition = totalDots - 1
    } else {
        slidePosition--
    }

    dots[slidePosition].classList.add("active")
}