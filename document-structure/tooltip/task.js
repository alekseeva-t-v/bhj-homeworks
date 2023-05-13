const elementsHasTooltipList = document.querySelectorAll('.has-tooltip');
const body = document.getElementsByTagName('body')[0];

function createTooltip(element) {
  const { left, bottom } = element.getBoundingClientRect();
  const leftPosition = Math.ceil(left);
  const topPosition = Math.ceil(bottom);

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip tooltip_active';
  tooltip.textContent = element.title;
  tooltip.style.cssText = `left: ${leftPosition}px; top: ${topPosition}px`;
  body.prepend(tooltip);
}

elementsHasTooltipList.forEach((elementHasTooltip) => {
  elementHasTooltip.addEventListener('click', (event) => {
    event.preventDefault();
    const elementTooltip = document.querySelector('.tooltip');
    if (
      elementTooltip &&
      elementTooltip.textContent === elementHasTooltip.title
    ) {
      elementTooltip.classList.toggle('tooltip_active');
    } else if (
      elementTooltip &&
      elementTooltip.textContent !== elementHasTooltip.title
    ) {
      elementTooltip.remove();
      createTooltip(elementHasTooltip);
    } else {
      createTooltip(elementHasTooltip);
    }
  });
});
