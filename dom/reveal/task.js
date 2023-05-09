const revealList = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  revealList.forEach((revealElem) => {
    const { top, bottom } = revealElem.getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
      revealElem.classList.add('reveal_active')
    } else {
      revealElem.classList.remove('reveal_active')
    }
  });
});
