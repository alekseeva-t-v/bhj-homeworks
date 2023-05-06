const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((menuLinkElem) => {
  const menuItem = menuLinkElem.closest('.menu__item');
  const menuMain = menuLinkElem.closest('.menu_main');
  const menuElem = menuItem.querySelector('.menu')

  if (menuElem) {
    menuLinkElem.addEventListener('click', function (event) {
      if (menuElem.classList.contains('menu_active')) {
        menuElem.classList.remove('menu_active');
        return;
      }
      const menuList = menuMain.querySelectorAll('.menu');
      menuList.forEach((menu) => {
        menu.classList.remove('menu_active');
      });
      event.preventDefault();
      menuElem.classList.add('menu_active');
    });
  }
});
