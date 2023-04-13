// JavaScript-код для функциональности кнопки и бургерного меню
const burgerButton = document.getElementById('burgerButton');
const burgerMenu = document.getElementById('burgerMenu');

burgerButton.addEventListener('click', () => {
burgerButton.classList.toggle('active');
burgerMenu.classList.toggle('active');
});
