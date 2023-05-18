const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let res = JSON.parse(xhr.responseText);
    let data = res['data'];

    pollTitle.innerHTML = data['title'];

    let answersOutput = '';
    data['answers'].forEach((answer) => {
      answersOutput += `
      <button class="poll__answer">
        ${answer}
      </button>`;
    });

    pollAnswers.innerHTML = answersOutput;

    const pollAnswerList = document.querySelectorAll('.poll__answer');
    pollAnswerList.forEach((pollAnswer) => {
      pollAnswer.addEventListener('click', () => {
        modal.classList.add('modal_active');
        overlay.classList.add('overlay_active');
      });
    });
  }
};

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  overlay.classList.remove('overlay_active');
});
