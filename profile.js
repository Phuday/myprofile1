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




// about click

const aboutIntroBtn = document.getElementById("about__introBtn");
const aboutIntroList = document.getElementById("about__introList");


about__introList.style.display = "block";

aboutIntroBtn.addEventListener("click", function() {
    if(about__introList.style.display == "none") {        
        about__skillList.style.display = "none"
        about__introList.style.display = "block"
    }
    else {
    }
})

const aboutSkillBtn = document.getElementById("about__skillBtn");
const aboutSkillList = document.getElementById("about__skillList");


about__skillList.style.display = "none";

aboutSkillBtn.addEventListener("click", function() {
    if(about__skillList.style.display == "none") {
        about__introList.style.display = "none"
        about__skillList.style.display= "block"
    }
    else {
    }

});


ScrollReveal({ 
    reset: true,
    distance: '10px',
    duration: 2500,
    delay: 400
 });

 ScrollReveal().reveal('.content__header, .about__img', { delay: 500, origin: 'left' });
 ScrollReveal().reveal('', { delay: 600, origin: 'bottom' });
 ScrollReveal().reveal('.about__info-item, .intro__text, .contact__form, .header__slider-img', { delay: 700, origin: 'right' });
 ScrollReveal().reveal('.service__box-container, .intro__icon-list-item, input[type="submit"]', { delay: 500, origin: 'bottom', interval: 200});
 ScrollReveal().reveal('', { delay: 500, origin: 'top'});
 ScrollReveal().reveal('.header__slider-namepr, .contact__info', { delay: 500, origin: 'left', interval: 200});