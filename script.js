window.onscroll = function vverh() {
    document.getElementById('up').style.display = (window.pageYOffset > '300' ? 'block' : 'none');
}


// *******BURGER MENU
const iconMenu = document.querySelector('.menu__burg');
const menuBody = document.querySelector('.header__menu-nav');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-nav');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


const menuLinks = document.querySelectorAll('.menu__link');

if(menuLinks.length>0) {
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink=e.target;
        if (iconMenu.classList.contains('_active')) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    }
  }
}



// *************details Footer

function resizeCheck() {
  const windowWidth = window.screen.width;
  const details = document.querySelectorAll('.det');
  if (windowWidth<1024) {
    details.forEach(elem => elem.open = true);
  } else {
    details.forEach((elem,i)=> elem.open = false );
  }
}
window.addEventListener('resize', (e) => {
  resizeCheck()
})
resizeCheck();
