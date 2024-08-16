const buttons = document.querySelectorAll('.carousel-button');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const totalSlides = buttons.length;

function activateSlide(index) {
    document.querySelectorAll('input[name="carousel"]').forEach(radio => {
        radio.checked = false;
    });
    document.getElementById(`slide${index + 1}`).checked = true;

    buttons.forEach(button => {
        button.classList.remove('hovered');
    });
    buttons[index].classList.add('hovered');
}

function autoScroll() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        activateSlide(currentIndex);
    }, 2000);
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        activateSlide(index);
        currentIndex = index;
    });
});

slides.forEach((slide, index) => {
    slide.addEventListener('mouseover', () => {
        activateSlide(index);
        currentIndex = index;
    });
});

autoScroll();

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Check if the window width is less than or equal to 768px (mobile view)
if (window.innerWidth <= 768) {
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = '-90px'; // Hides the navbar (adjust based on navbar height)
        } else {
            // Scrolling up
            navbar.style.top = '0';
        }

        lastScrollTop = scrollTop;
    });
}



document.querySelectorAll('.dropdown-menu ul li a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu ul li a').forEach(link => {
            link.classList.remove('clicked');
        });
        this.classList.add('clicked');
    });
});
