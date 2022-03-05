let navbar = document.querySelector('.nav-header-2');
let modal = document.querySelector('#close-nav');
let closeNav = document.querySelector('.close');
let openNav = document.querySelector('#menu-btn');
let openMenuItem = document.querySelector('.indicator')
let subMenu = document.querySelector('.submenu')

function showMenu() {
    navbar.classList.add('active');
    modal.classList.add('active');
};
function showMenuItem() {
    subMenu.classList.add('submenu-open');
};
function hideMenu() {
    navbar.classList.remove('active');
    modal.classList.remove('active');
}
openNav.addEventListener('click', showMenu);
closeNav.addEventListener('click', hideMenu);
openMenuItem.addEventListener('click', showMenuItem);

window.addEventListener("scroll", function() {
    var menu = document.querySelector(".nav");
    menu.classList.toggle("sticky", window.scrollY > 120);
})
$('.menu-btn').click(function() {
    $('.nav-header-2 .menu-header-2 .submenu').toggleClass("show");
    $('.nav-header-2 .menu-header-2 .first').toggleClass("rotate");
})
$('.nav-header-2 ul li').click(function() {
    $(this).addClass("active").siblings().removeClass("active");
});