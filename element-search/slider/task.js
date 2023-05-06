const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderList = document.querySelectorAll('.slider__item');
const dotList = document.querySelectorAll('.slider__dot');

let sliderItemActive = 0;

function changeActiveSlide() {
  sliderList.forEach((sliderItem, index) => {
    sliderItem.classList.remove('slider__item_active');
    if (index === sliderItemActive) {
      sliderItem.classList.add('slider__item_active');
    }
  });
}

function changeActiveDote() {
  dotList.forEach((dotItem, index) => {
    dotItem.classList.remove('slider__dot_active');
    if (index === sliderItemActive) {
      dotItem.classList.add('slider__dot_active');
    }
  });
}

sliderList.forEach((sliderItem, index) => {
  if (sliderItem.classList.contains('slider__item_active')) {
    sliderItemActive = index;
  }
});

dotList.forEach((dotItem, index) => {
  if (index === sliderItemActive) {
    dotItem.classList.add('slider__dot_active');
  }

  dotItem.addEventListener('click', function (event) {
    dotList.forEach((dotItem) => {
      dotItem.classList.remove('slider__dot_active');
    });
    event.target.classList.add('slider__dot_active');
    dotList.forEach((dotItem, index) => {
      if (dotItem.classList.contains('slider__dot_active')) {
        sliderItemActive = index;
        changeActiveSlide();
      }
    });
  });
});

arrowNext.addEventListener('click', () => {
  sliderItemActive =
    sliderItemActive === sliderList.length - 1 ? 0 : sliderItemActive + 1;
  changeActiveSlide();
  changeActiveDote();
});

arrowPrev.addEventListener('click', () => {
  sliderItemActive =
    sliderItemActive === 0 ? sliderList.length - 1 : sliderItemActive - 1;
  changeActiveSlide();
  changeActiveDote();
});
