const dropdownValueList = document.querySelectorAll('.dropdown__value');
const dropdownItemsList = document.querySelectorAll('.dropdown__item');

dropdownValueList.forEach((dropdownValueItem) => {
  dropdownValueItem.addEventListener('click', function() {
    const dropdown = dropdownValueItem.closest('.dropdown');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    dropdownList.classList.toggle('dropdown__list_active');
  });
});

dropdownItemsList.forEach((dropdownItem) => {
  dropdownItem.addEventListener('click', function (event) {
    event.preventDefault();
    const dropdown = dropdownItem.closest('.dropdown');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    dropdownList.classList.remove('dropdown__list_active');
    dropdownValue.textContent = dropdownItem.textContent;
  });
});
