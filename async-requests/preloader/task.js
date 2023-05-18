function createValuteList(dataJSON) {
  let data = JSON.parse(dataJSON);
  let valuteList = data['response']['Valute'];
  let output = '';

  const items = document.getElementById('items');

  for (let key in valuteList) {
    output += `
    <div class="item">
      <div class="item__code">
        ${valuteList[key]['CharCode']}
      </div>
      <div class="item__value">
        ${valuteList[key]['Value']}
      </div>
      <div class="item__currency">
        руб.
      </div>
    </div>
    `;
  }

  items.innerHTML = output;

  const loader = document.getElementById('loader');
  loader.classList.remove('loader_active');
}

const xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
);
xhr.send();

if (localStorage.dataValute) {
  createValuteList(localStorage.getItem('dataValute'));
  localStorage.removeItem('dataValute');
}

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    createValuteList(xhr.responseText);
    localStorage.setItem('dataValute', xhr.responseText);
  }
};
