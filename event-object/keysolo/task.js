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

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

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

  countTime = () => {
    this.timerElement.textContent--;
    if (Number(this.timerElement.textContent) === 0) {
      this.fail();
    }
  };

  success() {
    if (this.currentSymbol.classList.contains('symbol_current'))
      this.currentSymbol.classList.remove('symbol_current');
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

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    this.timerElement.textContent = word.length;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(this.countTime, 1000);
  }

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

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));
