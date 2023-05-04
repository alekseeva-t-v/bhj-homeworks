const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
const cookie = document.getElementById('cookie');
let width = cookie.width;

let count = Number(clickerCounter.textContent);
let clickTime = 0;
let lastClickTime = 0;

cookie.addEventListener('click', () => {
  clickTime = new Date();
  if (lastClickTime) {
    let diff = (clickTime.getTime() - lastClickTime.getTime()) / 1000;
    clickerSpeed.textContent = Number((1 / diff).toFixed(2));
  }
  lastClickTime = clickTime;
  count = count + 1;
  clickerCounter.textContent = count;
  width = width === '220' ? '200' : '220';
  cookie.width = width;
});
