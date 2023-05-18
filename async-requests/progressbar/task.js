const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.upload.addEventListener('progress', (event) => {
    progress.value = event.loaded / event.total;
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});

