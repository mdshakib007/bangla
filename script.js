const menuIcon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('navbar-open-animation');
    menuIcon.classList.add('fa-times');
    menuIcon.classList.remove('fa-bars');
    menu.classList.remove('navbar-close-animation');
  } else {
    menu.classList.add('navbar-close-animation');
    menu.classList.remove('navbar-open-animation');
    menu.classList.add('hidden');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  }
});

// JavaScript to show and hide the popup
const showPopupButton = document.getElementById('showPopup');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

showPopupButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Stop the click event from propagating to the parent element
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
