const book = document.querySelector('.book');
const fontSizeButtonsList = book.querySelectorAll('.font-size');
const bookControlColor = book.querySelector('.book__control_color')
const colorButtonsList = bookControlColor.querySelectorAll('.color');
const bookControlBackground = book.querySelector('.book__control_background')
const backgroundColorButtonsList = bookControlBackground.querySelectorAll('.color');

/**
 * Удаляет класс у основного элемента
 *
 * @param {string} className Класс, который необходимо удалить
 */
function removeClass(className) {
  if (book.classList.contains(className)) {
    book.classList.remove(className);
  }
}

/**
 * Добавляет класс основному элементу
 *
 * @param {string} className Класс, который необходимо добавить
 */
function addClass(className) {
  book.classList.add(className);
}

fontSizeButtonsList.forEach((fontSizeButton) => {
  fontSizeButton.addEventListener('click', function (event) {
    event.preventDefault();
    fontSizeButtonsList.forEach((fontSizeButton) => {
      fontSizeButton.classList.remove('font-size_active');
    });

    fontSizeButton.classList.add('font-size_active');

    if (fontSizeButton.classList.contains('font-size_small')) {
      removeClass('book_fs-big');
      addClass('book_fs-small');
    }

    if (fontSizeButton.classList.contains('font-size_big')) {
      removeClass('book_fs-small');
      addClass('book_fs-big');
    }

    if (
      !fontSizeButton.classList.contains('font-size_big') &&
      !fontSizeButton.classList.contains('font-size_small')
    ) {
      removeClass('book_fs-small');
      removeClass('book_fs-big');
    }
  });
});

colorButtonsList.forEach((colorButton) => {
  colorButton.addEventListener('click', function (event) {
    event.preventDefault();
    colorButtonsList.forEach((colorButton) => {
      colorButton.classList.remove('color_active');
    });

    colorButton.classList.add('color_active');

    if (colorButton.classList.contains('text_color_black')) {
      removeClass('book_color-gray');
      removeClass('book_color-whitesmoke');
      addClass('book_color-black');
    }

    if (colorButton.classList.contains('text_color_gray')) {
      removeClass('book_color-black');
      removeClass('book_color-whitesmoke');
      addClass('book_color-gray');
    }

    if (colorButton.classList.contains('text_color_whitesmoke')) {
      removeClass('book_color-black');
      removeClass('book_color-gray');
      addClass('book_color-whitesmoke');
    }
  });
});

backgroundColorButtonsList.forEach((backgroundColorButton) => {
  backgroundColorButton.addEventListener('click', function (event) {
    event.preventDefault();
    backgroundColorButtonsList.forEach((backgroundColorButton) => {
      backgroundColorButton.classList.remove('color_active');
    });

    backgroundColorButton.classList.add('color_active');

    if (backgroundColorButton.classList.contains('bg_color_gray')) {
      removeClass('book_bg-black');
      removeClass('book_bg-white');
      addClass('book_bg-gray');
    }

    if (backgroundColorButton.classList.contains('bg_color_black')) {
      removeClass('book_bg-white');
      removeClass('book_bg-gray');
      addClass('book_bg-black');
    }

    if (backgroundColorButton.classList.contains('bg_color_white')) {
      removeClass('book_color-black');
      removeClass('book_color-gray');
      addClass('book_bg-white');
    }
  });
});
