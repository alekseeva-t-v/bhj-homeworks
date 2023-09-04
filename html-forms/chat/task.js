const chatWidget = document.querySelector('.chat-widget');
const chatWidgetContainer = document.querySelector(
  '.chat-widget__messages-container'
);
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.querySelector('.chat-widget__input');

/**
 * Возвращает случайную фразу из массива.
 *
 * @return {string} выбранная из массива фраза
 */
function getAnswers() {
  const robotAnswers = [
      'Кто тут?',
      'Где Ваша совесть?',
      'Мы ничего не будем Вам продавать',
      'Добрый день! До свидания!',
      'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
      'К сожалению все операторы сейчас заняты, не звоните нам больше!',
    ],
    index = Math.floor(Math.random() * robotAnswers.length);

  return robotAnswers[index];
}

/**
 * Возвращает преобразованное в необходимый формат число.
 *
 * @param {number} num исходное число, которое необходимо преобразовать
 * @return {string} число в необходимом формате
 */
function addZero(num) {
  return num >= 0 && num <= 9 ? '0' + num : num;
}

/**
 * Возвращает время в установленном формате
 *
 * @return {string} время
 */
function showTime() {
  let date = new Date();
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}

/**
 * Отслеживает время отсутствия активности (1) Формирует переменную с счетчиком времени (2) Устанавливает сброс счетчика при перезагрузке страницы или наступлении события ввода
 *
 */
function inactivityTime() {
  let time = setTimeout(logout, 30000);
  window.onload = resetTimer;
  document.onkeydown = resetTimer;

  /**
   * Выводит сообщение об отсутствии активности
   *
   */
  function logout() {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${showTime()}</div>
      <div class="message__text">
        Вы ещё здесь?
      </div>
    </div>
  `;
    chatWidgetContainer.scrollTop = chatWidgetContainer.scrollHeight;
  }

  /**
   * Сбрасывает таймер и устанавливет его снова
   *
   */
  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 30000);
  }
}

chatWidget.addEventListener('click', () => {
  if (!chatWidget.classList.contains('chat-widget_active')) {
    inactivityTime();
  }
  chatWidget.classList.add('chat-widget_active');
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && chatWidgetInput.value.trim()) {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${showTime()}</div>
    <div class="message__text">
      ${chatWidgetInput.value}
    </div>
  </div>
`;

    chatWidgetInput.value = '';

    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${showTime()}</div>
    <div class="message__text">
      ${getAnswers()}
    </div>
  </div>
`;

    chatWidgetContainer.scrollTop = chatWidgetContainer.scrollHeight;
  }
});
