(() => {
  const accTab = document.querySelectorAll('#es-rc #es-rc-content .es-acc-tab');

  for (let i = 0; i < accTab.length; i++) {
    accTab[i].addEventListener('click', function () {
      this.classList.add('es-active');
      const accTabContent = this.querySelector(
        '#es-rc #es-rc-content .es-accordion__element-content',
      );
      const arrow = this.querySelector(
        '#es-rc #es-rc-content .es-acc-tab__image',
      );

      const hideContent = () => {
        accTabContent.style.maxHeight = null;
        this.classList.remove('es-active');
        arrow.classList.remove('es-active');
      };

      const showContent = () => {
        accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
        this.classList.add('es-active');
        arrow.classList.add('es-active');
      };

      if (accTabContent.style.maxHeight) {
        hideContent();
      } else {
        showContent();
      }
    });
  }
})();
