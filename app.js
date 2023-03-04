// select
const menu = document.querySelector('#mobileMenu')
const menuLinks = document.querySelector('.navbarMenu')

// kalo di click
menu.addEventListener('click', () => {
  menu.classList.toggle('isActive') // lambang bar 3 ganti x
  menuLinks.classList.toggle('isActive') // navbar dropdown
})
