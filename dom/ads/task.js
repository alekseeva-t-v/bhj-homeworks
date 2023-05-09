const rotatorsList = document.querySelectorAll('.rotator');

rotatorsList.forEach((rotator) => {
  const childrenItemsRotator = Array.from(rotator.children);

  let activeElem = 1;
  let speedChangeElem = childrenItemsRotator[0].getAttribute('data-speed');

  function changeElem() {
    childrenItemsRotator.forEach((childrenItem) => {
      childrenItem.classList.remove('rotator__case_active');
    });

    childrenItemsRotator[activeElem].classList.add('rotator__case_active');

    let colorActiveElem =
      childrenItemsRotator[activeElem].getAttribute('data-color');

    childrenItemsRotator[activeElem].style.color = `${colorActiveElem}`;

    speedChangeElem = childrenItemsRotator[activeElem].getAttribute('data-speed');

    if (activeElem < childrenItemsRotator.length - 1) {
      activeElem++;
    } else {
      activeElem = 0;
    }
    setTimeout(changeElem, `${speedChangeElem}`);
  }
  setTimeout(changeElem, `${speedChangeElem}`);
});
