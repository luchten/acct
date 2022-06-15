const faturamentoPopup = document.querySelector('.orcamento-popup');
const faturamentoInput = document.getElementById('faturamento');
const firstId = document.getElementById('first');
const secondId = document.getElementById('second');
const thirdId = document.getElementById('third');
const fourthId = document.getElementById('fourth');
const eletrodomesticosButton = document.getElementById('eletrodomesticos');
const eletrodomesticosInfo = document.querySelector('.eletrodomesticos');
const bensButton = document.getElementById('bens');
const bensInfo = document.querySelector('.bens');
const eletronicosButton = document.getElementById('eletronicos');
const eletronicosInfo = document.querySelector('.eletronicos');
const modaButton = document.getElementById('moda');
const modaInfo = document.querySelector('.moda');
const casaButton = document.getElementById('casa');
const casaInfo = document.querySelector('.casa');
const mercadosButton = document.getElementById('mercados');
const mercadosInfo = document.querySelector('.mercados');
const farmaciaButton = document.getElementById('farmacia');
const farmaciaInfo = document.querySelector('.farmacia');
const categorias = document.querySelectorAll('.categorias li');
var isEletrodomesticosDown = false;
var isBensDown = false;
var isEletronicosDown = false;
var isModaDown = false;
var isCasaDown = false;
var isMercadosDown = false;
var isFarmaciaDown = false;
const menuHeader = document.getElementsByClassName('header')[0];
const toggleButton = document.getElementById('toggle');
const mainMenuMobile = document.getElementsByClassName('main-menu-mobile')[0];
var isBelow = false;

faturamentoInput.addEventListener('click', () => {
    faturamentoPopup.style.display = 'block';
});

firstId.addEventListener('click', () => {
    faturamentoInput.placeholder = 'R$ 1mi a 2mi';
    faturamentoPopup.style.display = 'none';
});

secondId.addEventListener('click', () => {
    faturamentoInput.placeholder = 'R$ 5mi a 10mi';
    faturamentoPopup.style.display = 'none';
});

thirdId.addEventListener('click', () => {
    faturamentoInput.placeholder = 'R$ 50mi a 100mi';
    faturamentoPopup.style.display = 'none';
});

fourthId.addEventListener('click', () => {
    faturamentoInput.placeholder = '+ R$ 100mi';
    faturamentoPopup.style.display = 'none';
});

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

toggleButton.addEventListener('click', () => {
    mainMenuMobile.classList.toggle('main-menu-mobile-active');
});

document.addEventListener('click', (event) => {
    if (event.target != toggleButton.firstChild) {
        mainMenuMobile.classList.remove('main-menu-mobile-active');        
    }    
});

eletrodomesticosButton.addEventListener('click', () => {
    if (!isEletrodomesticosDown) {
        isBensDown = false;
        isEletronicosDown = false;
        isModaDown = false;
        isCasaDown = false;
        isMercadosDown = false;
        isFarmaciaDown = false;
        upMenu(bensInfo);
        upMenu(eletronicosInfo);
        upMenu(modaInfo);
        upMenu(casaInfo);
        upMenu(mercadosInfo);
        upMenu(farmaciaInfo);
        dropMenu(eletrodomesticosInfo);
        isEletrodomesticosDown = true;        
        for (var i = 0; i < categorias.length; i++) {
            categorias[i].firstElementChild.classList.remove('fa-minus');            
            categorias[i].firstElementChild.classList.add('fa-plus');            
        }
        eletrodomesticosButton.firstElementChild.classList.add('fa-minus');
        eletrodomesticosButton.firstElementChild.classList.remove('fa-plus');        
    } else {
        upMenu(eletrodomesticosInfo);
        eletrodomesticosButton.firstElementChild.classList.remove('fa-minus');
        eletrodomesticosButton.firstElementChild.classList.add('fa-plus');
        isEletrodomesticosDown = false;
    }
});

bensButton.addEventListener('click', () => {
    if (!isBensDown) {
        isEletrodomesticosDown = false;
        isEletronicosDown = false;
        isModaDown = false;
        isCasaDown = false;
        isMercadosDown = false;
        isFarmaciaDown = false;
        upMenu(eletrodomesticosInfo);
        upMenu(eletronicosInfo);
        upMenu(modaInfo);
        upMenu(casaInfo);
        upMenu(mercadosInfo);
        upMenu(farmaciaInfo);
        dropMenu(bensInfo);
        isBensDown = true;
        for (var i = 0; i < categorias.length; i++) {
            categorias[i].firstElementChild.classList.remove('fa-minus');
            categorias[i].firstElementChild.classList.add('fa-plus');
        }
        bensButton.firstElementChild.classList.add('fa-minus');
        bensButton.firstElementChild.classList.remove('fa-plus');
    } else {
        upMenu(bensInfo);
        bensButton.firstElementChild.classList.remove('fa-minus');
        bensButton.firstElementChild.classList.add('fa-plus');
        isBensDown = false;
    }
});

eletronicosButton.addEventListener('click', () => {
    if (!isEletronicosDown) {
        isBensDown = false;
        isEletrodomesticosDown = false;
        isModaDown = false;
        isCasaDown = false;
        isMercadosDown = false;
        isFarmaciaDown = false;
        upMenu(eletrodomesticosInfo);
        upMenu(bensInfo);
        upMenu(modaInfo);
        upMenu(casaInfo);
        upMenu(mercadosInfo);
        upMenu(farmaciaInfo);
        dropMenu(eletronicosInfo);
        isEletronicosDown = true;
        for (var i = 0; i < categorias.length; i++) {
            categorias[i].firstElementChild.classList.remove('fa-minus');
            categorias[i].firstElementChild.classList.add('fa-plus');
        }
        eletronicosButton.firstElementChild.classList.add('fa-minus');
        eletronicosButton.firstElementChild.classList.remove('fa-plus');
    } else {
        upMenu(eletronicosInfo);
        isEletronicosDown = false;
        eletronicosButton.firstElementChild.classList.remove('fa-minus');
        eletronicosButton.firstElementChild.classList.add('fa-plus');
    }
});

modaButton.addEventListener('click', () => {
    if (!isModaDown) {
        isBensDown = false;
        isEletronicosDown = false;
        isEletrodomesticosDown = false;
        isCasaDown = false;
        isMercadosDown = false;
        isFarmaciaDown = false;
        upMenu(eletrodomesticosInfo);
        upMenu(eletronicosInfo);
        upMenu(bensInfo);
        upMenu(casaInfo);
        upMenu(mercadosInfo);
        upMenu(farmaciaInfo);
        dropMenu(modaInfo);
        isModaDown = true;
        for (var i = 0; i < categorias.length; i++) {
            categorias[i].firstElementChild.classList.remove('fa-minus');
            categorias[i].firstElementChild.classList.add('fa-plus');
        }
        modaButton.firstElementChild.classList.add('fa-minus');
        modaButton.firstElementChild.classList.remove('fa-plus');
    } else {
        upMenu(modaInfo);
        isModaDown = false;
        modaButton.firstElementChild.classList.remove('fa-minus');
        modaButton.firstElementChild.classList.add('fa-plus');
    }
});

casaButton.addEventListener('click', () => {
    if (!isCasaDown) {
        isBensDown = false;
        isEletronicosDown = false;
        isModaDown = false;
        isEletrodomesticosDown = false;
        isMercadosDown = false;
        isFarmaciaDown = false;
        upMenu(eletrodomesticosInfo);
        upMenu(eletronicosInfo);
        upMenu(modaInfo);
        upMenu(bensInfo);
        upMenu(mercadosInfo);
        upMenu(farmaciaInfo);
        dropMenu(casaInfo);
        isCasaDown = true;
        for (var i = 0; i < categorias.length; i++) {
            categorias[i].firstElementChild.classList.remove('fa-minus');
            categorias[i].firstElementChild.classList.add('fa-plus');
        }
        casaButton.firstElementChild.classList.add('fa-minus');
        casaButton.firstElementChild.classList.remove('fa-plus');
    } else {
        upMenu(casaInfo);
        isCasaDown = false;
        casaButton.firstElementChild.classList.remove('fa-minus');
        casaButton.firstElementChild.classList.add('fa-plus');
    }
});

mercadosButton.addEventListener('click', () => {
    if (!isMercadosDown) {
        isBensDown = false;
        isEletronicosDown = false;
        isModaDown = false;
        isCasaDown = false;
        isEletrodomesticosDown = false;
        isFarmaciaDown = false;
        upMenu(eletrodomesticosInfo);
        upMenu(eletronicosInfo);
        upMenu(modaInfo);
        upMenu(casaInfo);
        upMenu(bensInfo);
        upMenu(farmaciaInfo);
        dropMenu(mercadosInfo);
        isMercadosDown = true;
        for (var i = 0; i < categorias.length; i++) {
            categorias[i].firstElementChild.classList.remove('fa-minus');
            categorias[i].firstElementChild.classList.add('fa-plus');
        }
        mercadosButton.firstElementChild.classList.add('fa-minus');
        mercadosButton.firstElementChild.classList.remove('fa-plus');
    } else {
        upMenu(mercadosInfo);
        isMercadosDown = false;
        mercadosButton.firstElementChild.classList.remove('fa-minus');
        mercadosButton.firstElementChild.classList.add('fa-plus');
    }
});

farmaciaButton.addEventListener('click', () => {
    if (!isFarmaciaDown) {
        isBensDown = false;
        isEletronicosDown = false;
        isModaDown = false;
        isCasaDown = false;
        isMercadosDown = false;
        isEletrodomesticosDown = false;
        upMenu(eletrodomesticosInfo);
        upMenu(eletronicosInfo);
        upMenu(modaInfo);
        upMenu(casaInfo);
        upMenu(mercadosInfo);
        upMenu(bensInfo);
        dropMenu(farmaciaInfo);
        isFarmaciaDown = true;
        for (var i = 0; i < categorias.length; i++) {
            categorias[i].firstElementChild.classList.remove('fa-minus');
            categorias[i].firstElementChild.classList.add('fa-plus');
        }
        farmaciaButton.firstElementChild.classList.add('fa-minus');
        farmaciaButton.firstElementChild.classList.remove('fa-plus');
    } else {
        upMenu(farmaciaInfo);
        isFarmaciaDown = false;
        farmaciaButton.firstElementChild.classList.remove('fa-minus');
        farmaciaButton.firstElementChild.classList.add('fa-plus');
    }
});

function dropMenu(menu) {
    menu.style.height = '100%';
    var height = menu.clientHeight;
    menu.style.height = '0';
    setTimeout(() => {
        menu.style.height = height + 'px';
    }, 1);    
}

function upMenu(menu) {
    menu.style.height = '0px';
}