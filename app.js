const navSlide = () => {
const mainMenu = document.querySelector('.menu-wrapper');
const closeMenu = document.querySelector('.hamburger-close');
const openMenu = document.querySelector('.hamburger-menu');
const menu_items = document.querySelector('.menu');



openMenu.addEventListener('click',() =>{
    mainMenu.classList.toggle('nav-active');
    menu_items.classList.toggle('nav-active');
    openMenu.classList.toggle('dis2');
    closeMenu.classList.toggle('dis');
    
    

});
closeMenu.addEventListener('click', () =>{
    mainMenu.classList.remove('nav-active')
    menu_items.classList.remove('nav-active');
    closeMenu.classList.remove('dis');
    openMenu.classList.remove('dis2');
})

}
navSlide();