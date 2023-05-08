const tabList = document.querySelectorAll('.tab');

tabList.forEach((tabItem) => {
  const tabs = tabItem.closest('.tabs');
  const tabContentsList = tabs.querySelectorAll('.tab__content');
  const tabCarrentList = Array.from(tabs.querySelectorAll('.tab'));
  
  tabItem.addEventListener('click', () => {
    tabCarrentList.forEach((tabItem) => {
      tabItem.classList.remove('tab_active');
    });

    tabItem.classList.add('tab_active');

    const indexActiveElement = tabCarrentList.findIndex((tabItem) => {
      return tabItem.classList.contains('tab_active')
    })

    tabContentsList.forEach((tabContentItem) => {
      tabContentItem.classList.remove('tab__content_active');
    });

    tabContentsList[indexActiveElement].classList.add('tab__content_active');
  });
});
