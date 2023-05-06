const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((menuLinkElem) => {
  const menuItem = menuLinkElem.closest('.menu__item');
  const menuMain = menuLinkElem.closest('.menu_main');

  if (menuItem.querySelector('.menu')) {
    menuLinkElem.addEventListener('click', function (event) {
      const menuList = menuMain.querySelectorAll('.menu');
      menuList.forEach((menu) => {
        menu.classList.remove('menu_active');
      });
      event.preventDefault();
      menuItem.querySelector('.menu').classList.add('menu_active');
    });
  }
});
