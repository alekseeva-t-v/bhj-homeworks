# Слайдер

Домашнее задание к занятию 1.2 «Способы поиска нужного HTML-элемента».

## **Задача**

Необходимо реализовать слайдер изображений с бесконечной сменой слайдов.

![Demo](./demo.gif)

## **Исходные данные**

1. Основная HTML-разметка
2. Базовые CSS-стили

Все слайды представлены следующей структурой:

```html
<div class="slider__item">
  <img class="slider__image" src="https://i.postimg.cc/rwj7v9BC/8ea2eb98-6cce-4f9f-96f0-60652623cf8e-large16x9-MGNgraphic-UFO-7.jpg" alt="">
</div>
```

Для того, чтобы конкретный слайд был активен, у него должен быть класс
*slider__item_active*:

```html
<div class="slider__item slider__item_active">
    <!-- ... -->
</div>
```

Навигация с помощью боковых кнопок представлена разметкой:

```html
<div class="slider__arrows">
  <div class="slider__arrow slider__arrow_prev">&lt;</div>
  <div class="slider__arrow slider__arrow_next">&gt;</div>
</div>
```

## **Реализация проекта**

1. Установлен обработчики события *click* на элементах «Влево» и «Вправо»
2. При смене слайдов учтено, что навигация должна быть бесконечной. То есть, смена крайнего левого слайда перекидывает к крайнему правому и наоборот.
3. К слайдеру добавлено управление с помощью точек.

![Extended Demo](./extended-demo.gif)

## **Стек технологий**
![HTML](./html.svg)
![CSS](./css.svg)
![JS](./js.svg)
![GIT](./git.svg)

## **[Демо](https://alekseeva-t-v.github.io/bhj-homeworks/element-search/slider/task)**

![Демо](./demo.jpg)