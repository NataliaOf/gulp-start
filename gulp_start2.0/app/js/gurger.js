const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click',()=>{
   menu.classList.add('activ')
})
closeMenu.addEventListener('click',()=>{
   menu.classList.remove('activ')
})