const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderList = Array.from(document.querySelectorAll('.slider__item'));
const dotList = Array.from(document.querySelectorAll('.slider__dot'));

function changeActiveSlide(activeIndex) {
  sliderList.forEach((sliderItem, index) => {
    sliderItem.classList.remove('slider__item_active');
    if (index === activeIndex) {
      sliderItem.classList.add('slider__item_active');
    }
  });
}

function changeActiveDote(activeIndex) {
  dotList.forEach((dotItem, index) => {
    dotItem.classList.remove('slider__dot_active');
    if (index === activeIndex) {
      dotItem.classList.add('slider__dot_active');
    }
  });
}

function findActiveIndex() {
  const searchIndex = sliderList.findIndex((sliderItem) => {
    return sliderItem.classList.contains('slider__item_active');
  });

  return searchIndex;
}

dotList.forEach((dotItem, index) => {
  let sliderItemActiveIndex = findActiveIndex();

  if (index === sliderItemActiveIndex) {
    dotItem.classList.add('slider__dot_active');
  }

  dotItem.addEventListener('click', function (event) {
    dotList.forEach((dotItem) => {
      dotItem.classList.remove('slider__dot_active');
    });
    event.target.classList.add('slider__dot_active');
    dotList.forEach((dotItem, index) => {
      if (dotItem.classList.contains('slider__dot_active')) {
        changeActiveSlide(index);
      }
    });
  });
});

arrowNext.addEventListener('click', () => {
  let sliderItemActiveIndex = findActiveIndex();
  sliderItemActiveIndex =
    sliderItemActiveIndex === sliderList.length - 1
      ? 0
      : sliderItemActiveIndex + 1;
  changeActiveSlide(sliderItemActiveIndex);
  changeActiveDote(sliderItemActiveIndex);
});

arrowPrev.addEventListener('click', () => {
  let sliderItemActiveIndex = findActiveIndex();
  sliderItemActiveIndex =
    sliderItemActiveIndex === 0
      ? sliderList.length - 1
      : sliderItemActiveIndex - 1;
  changeActiveSlide(sliderItemActiveIndex);
  changeActiveDote(sliderItemActiveIndex);
});
