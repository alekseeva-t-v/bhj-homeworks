const interestCheckList = document.querySelectorAll('.interest__check');

interestCheckList.forEach((interestCheck) => {
  interestCheck.addEventListener('change', () => {
    const currentInterestElem = interestCheck.closest('.interest');
    const parrentInterestElem =
      currentInterestElem.parentElement.closest('.interest');
    const childElemList = Array.from(currentInterestElem.childNodes);

    if (childElemList.length > 3) {
      const interestsActive =
        currentInterestElem.querySelector('.interests_active');
      const currentInterestCheckList =
        interestsActive.querySelectorAll('.interest__check');
      currentInterestCheckList.forEach((currentInterestCheck) => {
        currentInterestCheck.checked = interestCheck.checked ? true : false;
      });
    }

    if (parrentInterestElem) {
      const list = parrentInterestElem.getElementsByTagName('ul')[0];
      const interestCheckList = Array.from(
        list.querySelectorAll('.interest__check')
      );
      const parrentElem = parrentInterestElem.querySelector('.interest__check');
      let isAllElementsActive = [];

      interestCheckList.forEach((interestCheck) => {
        if (interestCheck.checked) {
          isAllElementsActive.push('true');
        } else {
          isAllElementsActive.push('false');
        }
      });

      const everyTrue = isAllElementsActive.every((value) => {
        return value === 'true';
      });
      parrentElem.checked = everyTrue ? true : false;
      parrentElem.indeterminate = everyTrue ? false : true;
    }
  });
});
