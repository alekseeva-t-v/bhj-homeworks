const rotatorCaseList = document.querySelectorAll('.rotator__case');

rotatorCaseList.forEach((rotatorCaseItem) => {
  const rotator = rotatorCaseItem.closest('.rotator');
  const rotatorCaseCarrentList = Array.from(
    rotator.querySelectorAll('.rotator__case')
  );
  let activeElementIndex = rotatorCaseCarrentList.findIndex((element) => {
    return element.classList.contains('rotator__case_active');
  });

  let colorActiveElement =
    rotatorCaseCarrentList[activeElementIndex].dataset.color;

  setInterval(() => {
    rotatorCaseCarrentList.forEach((rotatorCaseItem) => {
      rotatorCaseItem.classList.remove('rotator__case_active');
    });

    activeElementIndex =
      activeElementIndex === rotatorCaseCarrentList.length - 1
        ? 0
        : activeElementIndex + 1;

    rotatorCaseCarrentList[activeElementIndex].classList.add(
      'rotator__case_active'
    );

    colorActiveElement =
      rotatorCaseCarrentList[activeElementIndex].dataset.color;

    speedActiveElement =
      rotatorCaseCarrentList[activeElementIndex].dataset.speed;

    rotatorCaseCarrentList[activeElementIndex].style.color = colorActiveElement;
  }, 1000);
});
