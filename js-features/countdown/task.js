const timer = document.getElementById('timer');
let remainingTime = timer.textContent;

function showConvertedTime() {
  const hoursLeft = Math.floor(remainingTime / 60 / 60);
  const hoursLeftText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  const minutesLeft = Math.floor(remainingTime / 60) % 60;
  const minutesLeftText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  const secondsLeft = remainingTime % 60;
  const secondsLeftText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  timer.textContent = `${hoursLeftText}:${minutesLeftText}:${secondsLeftText}`;
}

showConvertedTime();

let timerId = setInterval(() => {
  if (remainingTime === 0) {
    alert('Вы победили в конкурсе!');
    location = './sertificate.ai';
    clearInterval(timerId);
  } else {
    remainingTime = remainingTime - 1;
    showConvertedTime();
  }
}, 1000);
