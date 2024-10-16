window.addEventListener('scroll', function () {
  var header = document.getElementById('headerScroll'); // Получаем элемент header по id
  var headerContainer = document.querySelector('.header-container'); // Получаем элемент контейнера

  // Проверяем, прокрутили ли мы страницу ниже высоты header
  if (window.scrollY > header.offsetTop) {
    headerContainer.classList.add('header-container--fixed'); // Добавляем класс для фиксации
  } else {
    headerContainer.classList.remove('header-container--fixed'); // Убираем класс, если вернулись наверх
  }
});
