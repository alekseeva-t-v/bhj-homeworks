class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');

    this.reset();

    this.registerEvents();
  }

  /**
   * Сброс игры (1) Запускает новую игру. (2) Сбрасывает счетчики правильно и неправильно введенных слов
   *
   */
  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  /**
   * Регистрирует событие нажатия кнопки на клавиатуре (1) Сохраняет в переменные введенный с клавиатуры символ  и текущий символ строки, предварительно приводит их к нижнему регистру. (2) Сравивает символы, если одинаковы запускает метод success, иначе fail
   *
   */
  registerEvents() {
    document.addEventListener('keypress', (event) => {
      const enteredSymbol = event.key.toLowerCase();
      const currentSymbol = this.currentSymbol.textContent.toLowerCase();
      if (enteredSymbol === currentSymbol) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  /**
   * Следит за таймером игры (1) Уменьшает текстовое отображение таймера на единицу. (2) Если таймер становится равным 0 запускает метод fail
   *
   */
  countTime = () => {
    this.timerElement.textContent--;
    if (Number(this.timerElement.textContent) === 0) {
      this.fail();
    }
  };

  /**
   * Обрабатывает поведение после успешного ввода символа (1) Удаляет у элемента класс, помечающий его, как выбранный (2) Добавляет класс, помечающий элемент, как корректно введенный (3) Переходит к следующему элементу, делая его текущим (3) Если такой символ существкет, присваиваем ему соответствующий класс и выходим из метода (4) Иначе, если счетчик правильно введенных слов + 1 стал равен 10, объявляем победу, вызываем метод reset для сброса игры (5) Вызывем метод setNewWord, отображающий новое слово / фразу
   *
   */
  success() {
    if (this.currentSymbol.classList.contains('symbol_current')) {
      this.currentSymbol.classList.remove('symbol_current');
    }

    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }

    this.setNewWord();
  }

  /**
   * Обрабатывает поведение после неверного ввода символа (1) Если счетчик неправильно введенных слов + 1 стал равен 5, объявляем поражение, вызываем метод reset для сброса игры (2) Вызывем метод setNewWord, отображающий новое слово / фразу
   *
   */
  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  /**
   * Отвечает за сохранение новой фразы / слова (1) Выбирает фразу / слово с помощью метода getWord и сохраняет ее в переменную (2) Передает сохраненную фразу / слово в метод renderWord, формирующий необходимую разметку (3) Указываем в текстовом содержимом таймера длительность равную количеству символов в слове / фразе (4) Очищаем интервал и создаем новый, используя метод countTime, который будет вызываться каждую секунду
   *
   */
  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    this.timerElement.textContent = word.length;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(this.countTime, 1000);
  }

  /**
   * Возвращает выбранное случайным образом из массива слово или фпазу.
   *
   * @return {string} выбранная фраза.
   */
  getWord() {
    const words = [
        'All we need это любовь',
        'Делай что-то со страстью или not it all',
        'Everything you can imagine реально',
        'Любовь is friendship set on fire',
        'Follow your сердцем',
        'Where there is love there is жизнь',
        'Пока дышу, I love and believe',
        'Do not squander time, из него состоит жизнь',
        'Успех сам не приходит, если you go to it',
        'Happiness is not a destination. It is a method of life.',
        'Все, что вы можете представить is real',
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  /**
   * Формирует разметку для выбранной фразы
   *
   * @param {string} word выбранная фраза.
   */
  renderWord(word) {
    const html = [...word]
      .map(
        (simbol, index) =>
          `<span class="symbol ${
            index === 0 ? 'symbol_current' : ''
          }">${simbol}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));
