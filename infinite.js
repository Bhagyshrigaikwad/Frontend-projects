// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 10, // Space between slide
    loop: true, // Infinite loop
    autoplay: {
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },
    // breakpoints: {
    768: {
        slidesPerView: 1, // 2 slides visible on tablets
    },
    1024: {
        slidesPerView: 1, // 3 slides visible on desktops
    },
},
);

// Set Christmas offer end date (December 25, 2024 at midnight)
const newYearOfferEnd = new Date("2025-01-01T00:00:00").getTime();

// Countdown Timer
const updateCountdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = newYearOfferEnd - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        // Clear the timer and display a message when the offer ends
        clearInterval(updateCountdown);
        document.getElementById("countdown").innerHTML = "🎆 Happy New Year! The offer has ended. 🎇"
    }
}, 1000);


// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     stagePadding: 40,
//     responsiveClass: true,
//     dots: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true
//         },
//         400: {
//             items: 2,
//             nav: true
//         },
//         600: {
//             items: 3,
//             nav: true
//         },
//         1000: {
//             items: 5,
//             nav: true,
//             loop: false
//         }
//     }
// })


var header = document.querySelector('header');
window.addEventListener("scroll", () => {
    header.classList.toggle('show', scrollY > 80);
})




const text = "Step in, Step out, Leave Footprints";
const highlightText = " Leave Footprints";
const typewriterElement = document.getElementById("moving-typewriter");

let index = 0;
let isDeleting = false;

function typewriterEffect() {
    const currentText = isDeleting
        ? text.substring(0, index--)
        : text.substring(0, index++);

    // Replace "Footprints" with highlighted version dynamically
    const highlightedText = currentText.replace(
        highlightText,
        `<span class="highlight">${highlightText}</span>`
    );

    typewriterElement.innerHTML = highlightedText;

    // Logic for typing and deleting
    if (!isDeleting && index === text.length + 1) {
        isDeleting = true;
        setTimeout(typewriterEffect, 1000); // Pause before deleting
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(typewriterEffect, 1000); // Pause before retyping
    } else {
        setTimeout(typewriterEffect, isDeleting ? 100 : 150); // Smooth typing/deleting speed
    }
}

// Start the typewriter effect
typewriterEffect();