const body = document.querySelector('body');
const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');
const controlDecList = document.querySelectorAll(
  '.product__quantity-control_dec'
);
const controlIncList = document.querySelectorAll(
  '.product__quantity-control_inc'
);
const productAddButtonList = document.querySelectorAll('.product__add');
let cartArr;

!localStorage.cart
  ? (cartArr = [])
  : (cartArr = JSON.parse(localStorage.getItem('cart')));

showCart();

/**
 * Возвращает элемент в котором произошло изменение количества товаров и количество добавленных товаров на предыдущем шаге
 *
 * @param {object} elem дочерний элемент в котором произошло действие
 * @return {object} Созданный элемент.
 */
function findCurrentAmount(elem) {
  const currentProductQuantity = elem.closest('.product__quantity');
  const currentProductQuantityValue = currentProductQuantity.querySelector(
    '.product__quantity-value'
  );
  let currentValue = Number(currentProductQuantityValue.textContent);
  return [currentValue, currentProductQuantityValue];
}

/**
 * Создает и возвращает элемент согласно заданным параметрам.
 *
 * @param {string} tag Тег формируемого элемента
 * @param {string} className Название класса элемента.
 * @param {object} parentElement Родительский элемент.
 * @return {object} Созданный элемент.
 */
function createNewElement(tag, className, parentElement) {
  const element = document.createElement(tag);
  element.className = className;
  parentElement.append(element);

  return element;
}

/**
 * Создает и возвращает карточку продукта, которая выводится в корзине.
 *
 * @param {string} id идентификатор продукта
 * @param {string} img адрес изображения.
 * @param {number} count Количество товаров.
 * @return {object} Созданная карточка.
 */
function createProductElement(id, img, count) {
  const cartProduct = createNewElement('div', 'cart__product', cartProducts);
  cartProduct.dataset.id = id;
  const imgProduct = createNewElement(
    'img',
    'cart__product-image',
    cartProduct
  );
  imgProduct.src = img;
  const cartProductDelButton = createNewElement(
    'button',
    'cart__product-del',
    cartProduct
  );
  cartProductDelButton.textContent = 'x';

  cartProductDelButton.addEventListener('click', (event) => {
    event.preventDefault();
    cartProduct.remove();
    cartArr.forEach((product, index) => {
      if (product.id === id) {
        cartArr.splice(index, 1);
      }
      showCart();
      updateLocal();
    });
  });
  const cartProductCount = createNewElement(
    'div',
    'cart__product-count',
    cartProduct
  );
  cartProductCount.textContent = count;

  return cartProduct;
}

/**
 * Обновляет созданную ранее карточку.
 *
 * @param {string} id идентификатор продукта
 * @param {number} newCount новое количество элементов.
 */
function updateProductElement(id, newCount) {
  const currentProduct = cartProducts.querySelector(`[data-id="${id}"]`);
  const currentProductCount = currentProduct.querySelector(
    '.cart__product-count'
  );
  currentProductCount.textContent =
    Number(currentProductCount.textContent) + Number(newCount);
}

/**
 * Отображает данные корзины, если она не пуста
 *
 */
function showCart() {
  if (!cartArr.length) {
    cart.classList.add('opacity');
  } else {
    cart.classList.remove('opacity');
  }
}

/**
 * Отвечает за плавное перемещение товара в корзину
 *
 * @param {object} img элемент изображения в списке
 * @param {object} imgCart элемент изображения в корзине
 * @param {boolean} isFirst показывает впервые ли добавляется конкретный элемент
 */
function moveToCart(img, imgCart, isFirst) {
  let imgPos = img.getBoundingClientRect();
  let imgCartPos = imgCart.getBoundingClientRect();

  let imgClone = img.cloneNode();

  imgClone.style.position = 'fixed';
  imgClone.style.left = imgPos['left'] + 'px';
  imgClone.style.top = imgPos['top'] + 'px';
  imgClone.style.border = 'none';
  imgClone.style.zIndex = 100;

  let startX = imgPos['left'] + 0.5 * imgPos['width'];
  let startY = imgPos['top'] + 0.5 * imgPos['height'];
  let deltaX = !isFirst ? imgCartPos['left'] + 0.5 * imgPos['width'] - startX : imgCartPos['left'] + 0.5 * imgCartPos['width'] - startX;
  let deltaY = !isFirst ? imgCartPos['top'] + 0.75 * imgPos['height'] - startY : imgCartPos['top'] + 0.5 * imgCartPos['height']  - startY;

  document.body.appendChild(imgClone);
  void imgClone.offsetWidth;
  imgClone.style.transform = 'translateX(' + deltaX + 'px)';
  imgClone.style.transform += 'translateY(' + deltaY + 'px)';
  imgClone.style.transition = '1s';

  setTimeout(() => document.body.removeChild(imgClone), 1000);
}

/**
 * Обновляет локальное хранилище данных
 *
 */
function updateLocal() {
  localStorage.setItem('cart', JSON.stringify(cartArr));
}

/**
 * Отображает список элементов в корзине
 *
 */
function fillHtmlList() {
  if (cartArr.length > 0) {
    cartArr.forEach((item) => {
      createProductElement(item.id, item.img, item.count);
    });
  }
}

fillHtmlList();

controlDecList.forEach((controlDec) => {
  controlDec.addEventListener('click', () => {
    let [currentValue, currentProductQuantityValue] =
      findCurrentAmount(controlDec);

    if (currentValue >= 2) {
      currentValue--;
      currentProductQuantityValue.textContent = currentValue;
    }
  });
});

controlIncList.forEach((controlInc) => {
  controlInc.addEventListener('click', () => {
    let [currentValue, currentProductQuantityValue] =
      findCurrentAmount(controlInc);

    currentValue++;
    currentProductQuantityValue.textContent = currentValue;
  });
});

productAddButtonList.forEach((productAddButton) => {
  productAddButton.addEventListener('click', () => {
    const currentProduct = productAddButton.closest('.product');
    const currentProductId = currentProduct.dataset.id;
    const productImg = currentProduct.querySelector('.product__image');
    const currentProductImg =
      currentProduct.querySelector('.product__image').src;
    const currentProductCount = Number(
      currentProduct.querySelector('.product__quantity-value').textContent
    );
    let isProductInCurt = false;

    cartArr.forEach((product) => {
      if (product.id === currentProductId) {
        isProductInCurt = true;
        updateProductElement(currentProductId, currentProductCount);
        product.count = product.count + Number(currentProductCount);
        const productCart = cart.querySelector(
          `[data-id="${currentProductId}"]`
        );
        const productCartImg = productCart.querySelector(
          '.cart__product-image'
        );
        moveToCart(productImg, productCartImg, false);
        updateLocal();
      }
    });

    if (!isProductInCurt) {
      const productElement = createProductElement(
        currentProductId,
        currentProductImg,
        currentProductCount
      );
      productElement.classList.add('opacity');
      cartArr.push({
        id: currentProductId,
        img: currentProductImg,
        count: currentProductCount,
      });

      const productCart = cart.querySelector(`[data-id="${currentProductId}"]`);
      const productCartImg = productCart.querySelector('.cart__product-image');
      if (cartArr.length === 1) {
        console.log('message');
        moveToCart(productImg, cart, true);
      } else {
        moveToCart(productImg, productCartImg, false);
      }
      setTimeout(() => {
        productElement.classList.remove('opacity');
      }, 1000);

      showCart();
      updateLocal();
    }

    currentProduct.querySelector('.product__quantity-value').textContent = 1;
  });
});
