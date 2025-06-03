// src/js/modules/navMenu.js

/**
 * МОДУЛЬ МОБИЛЬНОГО МЕНЮ (Mobile Navigation)
 * ============================================================
 * - Открытие/закрытие мобильного меню по клику на бургер
 * - Отключение скролла body при открытом меню
 * - Чистый экспорт для использования в app.js
 */

export function init() {
  const burger = document.querySelector('.burger__wrapper');
  const mobileMenu = document.querySelector('.mobileMenu__wrapper');
  const closeBtn = mobileMenu?.querySelector('.closeMenu');
  const body = document.body;

  if (!burger || !mobileMenu || !closeBtn) return;

  // Открыть меню
  burger.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    body.classList.add('bodyScroll'); // Отключаем скролл
  });

  // Закрыть меню
  closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    body.classList.remove('bodyScroll'); // Возвращаем скролл
  });
}
