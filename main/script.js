//MENU VARIABLES
const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const navMenu = document.getElementById('navigation-menu')
const homeLogoButton = document.getElementById('home-logo')
const projectbtn = document.getElementById('projectbtn')
const aboutbtn = document.getElementById('aboutbtn')
const contactbtn = document.getElementById('contactbtn')
// THEME TOGGLER VARIABLE
let themeToggler = document.querySelector('#theme-toggler')


// ============= FUNCTIONS ===========

//MENU
function openMenu() {
  navMenu.style.display = 'flex'
  navMenu.style.height = `${window.innerHeight}px`
}

function closeMenu() {
    navMenu.classList.toggle('close')
   setTimeout(() => {
   navMenu.classList.toggle('close')
    navMenu.style.display = 'none'
   }, 340)

}


//HOMEBUTTON


// =============== ADD EVENT LISTENERS =============

//MENU
openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
projectbtn.addEventListener('click', closeMenu)
aboutbtn.addEventListener('click', closeMenu)
contactbtn.addEventListener('click', closeMenu)
homeLogoButton.addEventListener('click', () => window.scrollTo(0,0))

//THEME TOGGLE

themeToggler.onclick=()=> {
    themeToggler.classList.toggle('switch:checked')
    if(themeToggler.classList.contains('switch:checked')) {
        document.querySelector('body').classList.add('active')
    }

    else {
        document.querySelector('body').classList.remove('active')
    }
}


// ====== CONTACT: PLANE PATH ==========

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#plane", {duration: 5, motionPath: "#path"});


gsap.registerPlugin(ScrollTrigger);

gsap.from ("#projects", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top center"
    },
    opacity: 0,
    duration: 2
});

gsap.from ("#about", {
    scrollTrigger: {
        trigger: "#about",
        start: "top center"
    },
    opacity: 0,
    duration: 1
});
gsap.from ("#contact", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top center"
    },
    opacity: 0,
    duration: 1
});


// =========== PROJECT CARDS SLIDING ANIMATION ========= 

const blocks = document.querySelectorAll('.block')

blocks.forEach(block => {
    block.addEventListener('click', function card() {
        
    }
    )
})





