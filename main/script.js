//MENU VARIABLES
const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const navMenu = document.getElementById('navigation-menu')
const homeLogoButton = document.getElementById('home-logo')
// LIGHT TOGGLE VARIABLES
const sunnyMode = document.querySelector('.sun-mode')
const nightMode = document.querySelector('.night-mode')
const main = document.querySelector('main')
const body = document.querySelector('body')
const header = document.querySelector('header')
const menu = document.querySelector('#open-menu svg path')


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

// =============== ADD EVENT LISTENERS =============

//MENU
openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
// homeLogoButton.addEventListener('click', () => window.scrollTo(0,0))

//LIGHT TOGGLE
sunnyMode.addEventListener('click', () => {
  sunnyMode.style.display = 'none'
  nightMode.style.display = 'flex'
  header.style.backgroundColor = 'var(--color-7)'
  body.style.color = 'var(--color-6)'
  main.style.backgroundColor = 'var(--color-7)'
  menu.style.fill = 'var(--color-6)'
})

nightMode.addEventListener('click', () => {
  nightMode.style.display = 'none'
  sunnyMode.style.display = 'flex'
  header.style.backgroundColor = 'var(--color-6)'
  body.style.backgroundColor = 'var(--color-6)'
  body.style.color = 'var(--color-7)'
  main.style.backgroundColor = 'var(--color-6)'
  menu.style.fill = 'var(--color-7)' 
})


