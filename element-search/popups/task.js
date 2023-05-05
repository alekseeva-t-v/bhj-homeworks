const modalMain = document.getElementById('modal_main');
const modalCloses = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

modalCloses.forEach((modalCloseElem) => {
  modalCloseElem.addEventListener('click', () => {
    modalCloseElem.closest('.modal_active').classList.remove('modal_active');
  });
});

showSuccess.addEventListener('click', () => {
  modalSuccess.classList.add('modal_active');
});
