//slide text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor")
const textArray = ["Developer!", "Designer!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);

    }
}


function erase() {
    if( charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
})


const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  //event.target.matches kiểm tra có khớp hay ko
  //selector.contains kiểm tra element có chứa element khác hay ko
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) // nếu menu ko chứa target mà mình nhấn vào và target mình nhấn vào ko phải là menu-toggle
{
        menu.classList.remove("is-show");
        toggle.classList.remove("fa-times")
        toggle.classList.add("fa-bars")
    }
}



const tabIntroItem = document.querySelectorAll(".about-intro")
const tabContent = document.querySelectorAll(".about-info");
[...tabIntroItem].forEach(item => item.addEventListener("click", handleTabClick));
function handleTabClick(e) {
    [...tabIntroItem].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
    const tabNumber = e.target.dataset.tab;
    [...tabContent].forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-tab") === tabNumber) {
        item.classList.add("active")
        }
    });
  // [...tabContent][tabNumber -1].classList.add("active")
}


















ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.content__header, .about__img, .intro-skill', { delay: 500, origin: 'left' });
ScrollReveal().reveal('', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about__info-item, .intro__text, .contact__form, .header__slider-img', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.service__box-container, .intro__icon-list-item, input[type="submit"]', { delay: 500, origin: 'bottom', interval: 200});
ScrollReveal().reveal('', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.header__slider-namepr, .contact__info', { delay: 500, origin: 'left', interval: 200});