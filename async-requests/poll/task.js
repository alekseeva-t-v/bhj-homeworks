const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

let voteIndex = 0;
let answerIndex = 0;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let res = JSON.parse(xhr.responseText);
    voteIndex = res.id;
    let data = res.data;

    pollTitle.innerHTML = data.title;

    let answersOutput = '';
    data.answers.forEach((answer) => {
      answersOutput += `
      <button class="poll__answer">
        ${answer}
      </button>`;
    });

    pollAnswers.innerHTML = answersOutput;

    const pollAnswerList = document.querySelectorAll('.poll__answer');
    pollAnswerList.forEach((pollAnswer) => {
      pollAnswer.addEventListener('click', (event) => {
        event.preventDefault();
        answerIndex = data.answers.findIndex((answer) => {
          return event.target.textContent.trim() === answer;
        });

        modal.classList.add('modal_active');
        overlay.classList.add('overlay_active');
      });
    });
  }
};

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  overlay.classList.remove('overlay_active');

  const xhrRes = new XMLHttpRequest();
  xhrRes.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhrRes.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhrRes.send(`vote=${voteIndex}&answer=2`);

  xhrRes.onreadystatechange = function () {
    if (xhrRes.readyState === 4) {
      let votingResults = JSON.parse(xhrRes.responseText).stat;
      console.log(votingResults);
      let resultOutput = '';
      let votesCount = 0;
      votingResults.forEach((result) => {
        votesCount += result.votes;
      });

      votingResults.forEach((result) => {
        percentageRes = ((result.votes / votesCount) * 100).toFixed(2);
        resultOutput += `
                                <p>
                                    ${result.answer}: <b>${percentageRes}%</b>
                                </p>`;
      });

      pollAnswers.innerHTML = resultOutput;
    }
  };
});
