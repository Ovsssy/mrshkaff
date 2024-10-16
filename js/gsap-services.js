gsap.registerPlugin(ScrollTrigger);

function setAnimation() {
  const windowWidth = window.innerWidth;

  let xPercent;
  let endValue;

  if (windowWidth >= 1200) {
    xPercent = -73;
    endValue = "+=2000";
  } else if (windowWidth >= 768) {
    xPercent = -200;
    endValue = "+=2000";
  } else if (windowWidth >= 480){
    xPercent = -160;
    endValue = "+=2000";
  } else {
    xPercent = -372;
    endValue = "+=1500";
  }

  gsap.to(".services-list", {
    xPercent: xPercent,  // Динамически устанавливаемое значение
    ease: "none",        // Без плавного замедления, синхронное движение
    scrollTrigger: {
      trigger: ".services",          // Триггер — весь блок услуг
      start: "center center",              // Начало анимации — когда верх блока услуг достигает верхней границы экрана
      end: endValue,                 // Продолжительность анимации (в зависимости от ширины экрана)
      scrub: true,                   // Синхронизация с прокруткой
      pin: true,                     // Пинним весь блок
      markers: false                  // Включить маркеры для отладки (можно убрать после настройки)
    }
  });
}

setAnimation();
window.addEventListener("resize", setAnimation);
