const interestCheckList = document.querySelectorAll('.interest__check');

interestCheckList.forEach((interestCheck) => {
  interestCheck.addEventListener('change', (event) => {
    if (!interestCheck.closest('.interests_active')) {
      const interest = interestCheck.closest('.interest');
      const interestsActive = interest.querySelector('.interests_active');
      const currentInterestCheckList =
        interestsActive.querySelectorAll('.interest__check');
      if (interestCheck.checked) {
        currentInterestCheckList.forEach((currentInterestCheck) => {
          currentInterestCheck.checked = true;
        });
      } else {
        currentInterestCheckList.forEach((currentInterestCheck) => {
          currentInterestCheck.checked = false;
        });
      }
    }
  });
});

interestCheckList.forEach((interestCheck) => {
  interestCheck.addEventListener('change', (event) => {
    
  });
});
