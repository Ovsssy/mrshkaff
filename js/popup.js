const popup = document.getElementById('popup');
const openPopupBtns = document.querySelectorAll('.open-popup');
const closeBtn = document.querySelector('.popup__close');
const popupTitle = popup.querySelector('.popup__title');
const serviceInput = document.getElementById('service');

openPopupBtns.forEach(button => {
  button.onclick = function () {
    const serviceName = this.querySelector('.services-list__item-title').textContent;
    popupTitle.textContent = `Оставить заявку на "${serviceName}"`;
    serviceInput.value = serviceName;
    popup.classList.add('popup--active');
  }
});

closeBtn.onclick = function () {
  popup.classList.remove('popup--active');
}

window.onclick = function (event) {
  if (event.target === popup) {
    popup.classList.remove('popup--active');
  }
}
