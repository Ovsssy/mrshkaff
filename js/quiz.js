let currentQuestion = 1;
const $steps = document.querySelectorAll('[data-step-id]');
const maxSteps = $steps.length;
const progressBarContainer = document.querySelector('.order-quiz__progress-bar');
const progressBarPercent = document.querySelector('.order-quiz__progress-bar-percent');
const discountInput = document.getElementById('persent'); // Инпут для процентов
let currentProgress = 0; // Текущий прогресс (в процентах)
let questionProgress = {}; // Объект для хранения прогресса по вопросам

// Функция для обновления позиции прогресс-бара
function updateProgressBar() {
  const containerWidth = progressBarContainer.clientWidth; // Ширина контейнера прогресс-бара
  const percentWidth = progressBarPercent.clientWidth; // Ширина самого прогресс-бара
  const maxTranslateX = containerWidth - percentWidth; // Максимальная длина передвижения

  // Рассчитываем расстояние для translateX на основе текущего прогресса (0% - 40%)
  const translateX = (currentProgress / 40) * maxTranslateX;

  // Обновляем стиль для прогресс-бара
  progressBarPercent.style.transform = `translateX(${translateX}px)`;
  progressBarPercent.querySelector('span').textContent = `${currentProgress}%`;
}

// Функция для добавления прогресса в зависимости от выбранного ответа
function addProgress(value) {
  currentProgress = Math.min(currentProgress + value, 40); // 40% - максимальное значение
  updateProgressBar();
}

// Функция для уменьшения прогресса при возврате
function subtractProgress(value) {
  currentProgress = Math.max(currentProgress - value, 0);
  updateProgressBar();
}

// Функция для перехода между шагами
function setStep(selector) {
  const $block = document.querySelector(selector);
  const $wrapper = $block.closest('.quiz__content');
  const $tab = $wrapper?.querySelector(selector);

  if (!$tab) {
    console.warn('Следующий шаг не найден');
    return;
  }

  const $prev_steps = $wrapper?.querySelectorAll('.active[data-step-id], .quiz__step.active');
  for (const [index, $prev] of $prev_steps.entries()) {
    $prev.classList.remove('active');
  }
  $tab.classList.add('active');
}

// Функция для установки итогового процента скидки в input
function setFinalDiscount() {
  if (discountInput) {
    discountInput.value = `${currentProgress}%`;
  }
}

const button_next = document.querySelector('[data-button="next"]');
const button_prev = document.querySelector('[data-button="prev"]');

// Обработчик для кнопки "Далее"
button_next.addEventListener('click', function () {
  // Проверка, выбран ли вариант ответа
  const selectedOption = document.querySelector(`#step-${currentQuestion} .order-quiz__content-item input[type="radio"]:checked`);
  if (!selectedOption) {
    alert('Пожалуйста, выберите ответ, прежде чем переходить дальше.');
    return; // Прерываем выполнение, если нет выбора
  }

  if (currentQuestion < maxSteps) {
    const progressValue = parseInt(selectedOption.dataset.progressValue, 10) || 0;

    // Если есть выбор для текущего вопроса, добавляем прогресс и сохраняем значение
    if (!questionProgress[currentQuestion]) {
      addProgress(progressValue);
      questionProgress[currentQuestion] = progressValue;
    }

    if (currentQuestion == maxSteps - 1) {
      button_next.setAttribute('disabled', true);
    }

    if (currentQuestion >= 1 && currentQuestion < maxSteps) {
      button_prev.removeAttribute('disabled');
      currentQuestion++;
      setStep('#step-' + currentQuestion);

      // Если это последний шаг, добавляем скидку в input
      if (currentQuestion == maxSteps) {
        setFinalDiscount();
      }
    }

    if (currentQuestion == maxSteps) {
      document.querySelector('.quiz__bottom').classList.add('hide');
    }
  }
});

// Обработчик для кнопки "Назад"
button_prev.addEventListener('click', function () {
  if (currentQuestion > 1) {
    // Если есть прогресс для текущего шага, уменьшаем его
    if (questionProgress[currentQuestion - 1]) {
      subtractProgress(questionProgress[currentQuestion - 1]);
      delete questionProgress[currentQuestion - 1];
    }

    button_next.removeAttribute('disabled');
    currentQuestion--;
    setStep('#step-' + currentQuestion);
  }

  if (currentQuestion === 1) {
    button_prev.setAttribute('disabled', true);
  }

  $steps[currentQuestion].classList.remove('active');
});

// Начальная инициализация прогресса
updateProgressBar();
