const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// shows menu when toggle button is clicked
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
};
// removes menu when close button is clicked
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
};

// removes menu when link is click
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
};
navLink.forEach(n => n.addEventListener('click', linkAction));



// accordian Skills
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
};

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
});

// Qual tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// Modal buttons
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtns, i) =>{
    modalBtns.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove('active-modal')
        })
    })
})

// Swiper

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    let swiper = new Swiper(".portfolio__container", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        loop: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });