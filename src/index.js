// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");


burgerIcon.addEventListener('click', (e) => {
    navbarMenu.classList.toggle('is-active');
    e.preventDefault();
});

console.log("hello")