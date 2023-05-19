const editor = document.getElementById('editor');
const button = document.querySelector('.button');

if (localStorage.text) {
  editor.value = JSON.parse(localStorage.getItem('text'));
}

editor.addEventListener('input', () => {
  localStorage.setItem('text', JSON.stringify(editor.value));

  if (editor.value === '') {
    localStorage.removeItem('text');
  }
});

button.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('text');
});
