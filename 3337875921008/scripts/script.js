(() => {
  const accTab = document.querySelectorAll('#es-rc #es-rc-content .es-acc-tab');

  for (let i = 0; i < accTab.length; i++) {
    accTab[i].addEventListener('click', function () {
      this.classList.add('es-active');
      let accTabContent = this.nextElementSibling;

      const hideContent = () => {
        accTabContent.style.maxHeight = null;
        this.classList.remove('es-active');
      };

      const showContent = () => {
        accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
        this.classList.add('es-active');
      };

      if (accTabContent.style.maxHeight) {
        hideContent();
      } else {
        showContent();
      }
    });
  }
})();
