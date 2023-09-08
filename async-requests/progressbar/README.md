# Загрузка больших файлов

Домашнее задание к занятию 3.1 «Асинхронные запросы» курса [«JavaScript-программирование для начинающих»](https://cat.2035.university/rall/course/18787/?project_id=48).

## **Задача**

Необходимо разработать индикатор загрузки большого файла, отправленного через AJAX.

![Demo](./demo.gif)

## **Исходные данные**

1. Основная HTML-разметка

Для индикации прогресса предназначен тег *progress*, находящимся в разметке:

```html
<progress value="0.0" id="progress"></progress>
```

Для манипуляции тегом используется свойство *value*:

```js
const progress = document.getElementById( 'progress' );
progress.value = 0.7;
```

## **Реализация проекта**

1. Реализована загрузка формы через AJAX по адресу *https://students.netoservices.ru/nestjs-backend/upload*
2. Отслеживается событие изменения загрузки и в соответствии
с ним корректируется прогресс
3. Если отправка формы будет реализована неверно, можно получить ошибку от сервера.

## **Стек технологий**
![HTML](./html.svg)
![CSS](./css.svg)
![JS](./js.svg)
![GIT](./git.svg)

## **[Демо](https://alekseeva-t-v.github.io/bhj-homeworks/async-requests/progressbar/task)**

![Демо](./demo.jpg)
