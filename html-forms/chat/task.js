const chatWidget = document.querySelector('.chat-widget');
const chatWidgetContainer = document.querySelector(
  '.chat-widget__messages-container'
);
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.querySelector('.chat-widget__input');

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

function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

function showTime() {
  let date = new Date();
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}

function inactivityTime() {
  let time = setTimeout(logout, 30000);
  window.onload = resetTimer;
  document.onkeydown = resetTimer;

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
  if (event.code === 'Enter' && chatWidgetInput.value) {
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
