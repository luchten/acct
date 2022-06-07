const menuHeader = document.getElementsByClassName('header')[0];
const toggleButton = document.getElementById('toggle');
const mainMenuMobile = document.getElementsByClassName('main-menu-mobile')[0];
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const coluna1 = document.getElementsByClassName('coluna-1')[0];
const coluna2 = document.getElementsByClassName('coluna-2')[0];
const coluna3 = document.getElementsByClassName('coluna-3')[0];
const coluna4 = document.getElementsByClassName('coluna-4')[0];
const coluna5 = document.getElementsByClassName('coluna-5')[0];
const coluna6 = document.getElementsByClassName('coluna-6')[0];
const firstTitle = document.querySelector('.coluna-1 h2');
const secondTitle = document.querySelector('.coluna-1 h1');
const paragraph = document.querySelector('.coluna-1 p');
const saibaButton = document.getElementsByClassName('saiba-mais')[0];
const carousel = document.querySelector('.my-carousel');
const carouselInner = document.querySelector('.my-carousel-inner');
var isBelow = false;
var position = 0;
var pressed = false;
var startOffset;
var currentOffset;

carousel.addEventListener('mouseenter', () => {
    carousel.style.cursor = 'grab';    
});

carousel.addEventListener('mousedown', (event) => {
    carousel.style.cursor = 'grabbing'; 
    event.preventDefault();
    pressed = true;
    startOffset = event.offsetX - carouselInner.offsetLeft;
});

window.addEventListener('mouseup', () => {
    carousel.style.cursor = 'grab';
    pressed = false;
});

carousel.addEventListener('mousemove', (event) => {
    if (!pressed) return;
    currentOffset = event.offsetX;    
    carouselInner.style.left = currentOffset - startOffset + 'px';
    checkBoundary();
});

function checkBoundary() {
    var inSlider = carouselInner.getBoundingClientRect();
    var outSlider = carousel.getBoundingClientRect();
    if (parseInt(carouselInner.style.left) > 0) {
        carouselInner.style.left = '0';
    }
    if (inSlider.right < outSlider.right) {
        carouselInner.style.left = '-' + (inSlider.width - outSlider.width) + 'px';    
    }
}

document.addEventListener('scroll', () => {
    if (window.scrollY > 77 && isBelow == false) {
        setTimeout(() => {
            menuHeader.classList.add('sticky');
        }, 250);
        isBelow = true;
    }
    if (window.scrollY < 77 && isBelow == true) {
        menuHeader.classList.remove('sticky');
        isBelow = false;
    }
});

prevButton.addEventListener('click', () => {
    position--;
    if (position == 0) {
        prevButton.style.display = 'none';
        if (window.innerWidth > 1200) {
            coluna2.style.display = 'flex';
        }
        coluna1.style.display = 'flex';
        setTimeout(() => {
            coluna2.classList.add('coluna-2-up1');
        }, 1);
        setTimeout(() => {
            coluna2.classList.add('coluna-2-down1');
            coluna1.children[0].classList.remove('element-hidden');
        }, 500);
        setTimeout(() => {
            coluna2.classList.add('coluna-2-up2');
            coluna1.children[1].classList.remove('element-hidden');
        }, 750);
        setTimeout(() => {
            coluna1.children[2].classList.remove('element-hidden');
        }, 1000);
        setTimeout(() => {
            coluna1.children[3].classList.remove('element-hidden');
        }, 1250);
        coluna3.children[0].classList.add('element-hidden');
        coluna3.children[1].classList.add('element-hidden');
        coluna3.children[2].classList.add('element-hidden');
        coluna3.children[3].classList.add('element-hidden');
        coluna4.classList.add('coluna-4-hidden');
        coluna3.style.display = 'none';
        coluna4.style.display = 'none';
    }
    if (position == 1) {
        nextButton.style.display = 'block';
        coluna3.style.display = 'flex';
        setTimeout(() => {
            coluna3.children[0].classList.remove('element-hidden');
        }, 500);
        setTimeout(() => {
            coluna3.children[1].classList.remove('element-hidden');
        }, 750);
        setTimeout(() => {
            coluna3.children[2].classList.remove('element-hidden');
        }, 1000);
        setTimeout(() => {
            coluna3.children[3].classList.remove('element-hidden');
        }, 1250);
        if (window.innerWidth > 1200) {
            coluna4.style.display = 'flex';
        }        
        setTimeout(() => {
            coluna4.classList.remove('coluna-4-hidden');
        }, 1);
        coluna5.style.display = 'none';
        coluna5.children[0].classList.add('element-hidden');
        coluna5.children[1].classList.add('element-hidden');
        coluna5.children[2].classList.add('element-hidden');
        coluna5.children[3].classList.add('element-hidden');
        coluna6.style.display = 'none';
        coluna6.classList.add('coluna-6-hidden');            
    }
});

nextButton.addEventListener('click', () => {
    prevButton.style.display = 'block';
    position++;
    if (position == 1) {        
        coluna2.style.display = 'none';
        coluna2.classList.add('coluna-2-hidden');
        coluna2.classList.remove('coluna-2-up1');
        coluna2.classList.remove('coluna-2-up2');
        coluna2.classList.remove('coluna-2-down1');

        coluna1.style.display = 'none';
        coluna1.children[0].classList.add('element-hidden');
        coluna1.children[1].classList.add('element-hidden');
        coluna1.children[2].classList.add('element-hidden');
        coluna1.children[3].classList.add('element-hidden');

        coluna3.style.display = 'flex';
        setTimeout(() => {
            coluna3.children[0].classList.remove('element-hidden');
        }, 500);
        setTimeout(() => {
            coluna3.children[1].classList.remove('element-hidden');
        }, 750);
        setTimeout(() => {
            coluna3.children[2].classList.remove('element-hidden');
        }, 1000);
        setTimeout(() => {
            coluna3.children[3].classList.remove('element-hidden');
        }, 1250);
        if (window.innerWidth > 1200) {
            coluna4.style.display = 'flex';
        }        
        setTimeout(() => {
            coluna4.classList.remove('coluna-4-hidden');
        }, 1);
    }
    if (position == 2) {
        nextButton.style.display = 'none';
        coluna3.style.display = 'none';
        coluna3.children[0].classList.add('element-hidden');
        coluna3.children[1].classList.add('element-hidden');
        coluna3.children[2].classList.add('element-hidden');
        coluna3.children[3].classList.add('element-hidden');
        coluna4.style.display = 'none';
        coluna4.classList.add('coluna-4-hidden');

        coluna5.style.display = 'flex';
        setTimeout(() => {
            coluna5.children[0].classList.remove('element-hidden');
        }, 500);
        setTimeout(() => {
            coluna5.children[1].classList.remove('element-hidden');
        }, 750);
        setTimeout(() => {
            coluna5.children[2].classList.remove('element-hidden');
        }, 1000);
        setTimeout(() => {
            coluna5.children[3].classList.remove('element-hidden');
        }, 1250);
        if (window.innerWidth > 1200) {
            coluna6.style.display = 'flex';
        }        
        setTimeout(() => {
            coluna6.classList.remove('coluna-6-hidden');            
        }, 1);
    }
});

toggleButton.addEventListener('click', () => {
    mainMenuMobile.classList.toggle('main-menu-mobile-active');
});

document.addEventListener('click', (event) => {
    if (event.target != toggleButton.firstChild) {
        mainMenuMobile.classList.remove('main-menu-mobile-active');
    }
});