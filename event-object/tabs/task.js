const tabList = document.querySelectorAll('.tab');
const tabContentsList = document.querySelectorAll('.tab__content');

tabList.forEach((tabItem, index) => {
  tabItem.addEventListener('click', () => {
    tabList.forEach((tabItem) => {
      tabItem.classList.remove('tab_active');
    });
    tabItem.classList.add('tab_active');
    tabContentsList.forEach((tabContentItem) => {
      tabContentItem.classList.remove('tab__content_active');
    });
    tabContentsList[index].classList.add('tab__content_active');
  });
});
