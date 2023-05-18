let xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let data = JSON.parse(xhr.responseText);
    let valuteList = data['response']['Valute'];
    let output = '';

    const items = document.getElementById('items');
    const loader = document.getElementById('loader');

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
    loader.classList.remove('loader_active');
  }
};
