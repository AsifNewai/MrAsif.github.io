/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click',() => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active__modal')
}

modalBtns.forEach((modalBtn, i ) => {
    modalBtn.addEventListener('click',() => {
        modal(i)
    })
})

modalCloses.forEach(modalCloses => {
    modalCloses.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active__modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const icon = document.querySelector('.s-icon i')

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    document.body.classList.contains(darkTheme) ? icon.style.color = "#FFF" : icon.style.color = "#000"
}
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click' , ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// -----------------------------------------------------------------

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler')

styleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open');
})
// 1
var startX, startY, moveX, moveY;
//here clientX, and clientY means X and Y coordinates
function touchStart(e){
    startX = e.touches[0].clientX ;
    startY = e.touches[0].clientY ;
}

function touchMove(e){
    moveX = e.touches[0].clientX ;
    moveY = e.touches[0].clientY ;
}
function touchEnd(){
    if(startX+100 < moveX){
        if(document.querySelector('.style-switcher').classList.toggle('open')){
            document.querySelector('.style-switcher').classList.remove('open')
        }
    }else if(startX-100 > moveX){
        if(document.querySelector('.style-switcher').classList.toggle('open')){
            document.querySelector('.style-switcher').classList.remove('open')
        }
    }
    if(startY+100 < moveY){
        if(document.querySelector('.style-switcher').classList.toggle('open')){
            document.querySelector('.style-switcher').classList.remove('open')
        }
    }else if(startY-100 > moveY){
        if(document.querySelector('.style-switcher').classList.toggle('open')){
            document.querySelector('.style-switcher').classList.remove('open')
        }
    }
}
// 2

window.addEventListener('scroll',()=>{
    if(document.querySelector('.style-switcher').classList.toggle('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})



const setActiveStyle = (val)=>{
    document.documentElement.style.setProperty('--hue-color', val);
}

// ====================================================================

var typed = new Typed('.typing',{
    strings:['Software Engineer','Web Developer','Coder','Web Designer'],
    typeSpeed:130,
    BackSpeed:130,
    loop:true
})


// #37b182