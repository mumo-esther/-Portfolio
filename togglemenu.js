function openNav() {
    document.getElementById('myNav').style.width = '100%';
  }
  
  function closeNav() {
    document.getElementById('myNav').style.width = '0%';
  }
  
  openNav();
  closeNav();

  const navLinks = document.querySelectorAll('.overlay-item');
  const navMenu = document.getElementById('.overlay-content');

function linkshandler() {
  navMenu.classList.remove('show');
}
navLinks.forEach((n) => n.addEventListener('click', linkshandler)); 
navLinks.forEach((n) => n.addEventListener('click', linkshandler));