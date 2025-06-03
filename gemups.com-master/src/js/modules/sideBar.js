// src/js/modules/sideBar.js

/**
 * МОДУЛЬ БОКОВОГО МЕНЮ (Sidebar Navigation)
 * ============================================================
 * - Управление открытием и закрытием бокового меню
 * - Чистый экспорт для использования в app.js
 */

export function init() {
  const navMenu = document.querySelector('.fixedNavmenu');
  const openButton = navMenu?.querySelector('.menuFunction');
  const closeButton = navMenu?.querySelector('.menuMinimal');

  if (!navMenu || !openButton || !closeButton) return;

  openButton.addEventListener('click', () => {
    navMenu.classList.add('closed');
    closeButton.classList.remove('hidden');
  });

  closeButton.addEventListener('click', () => {
    navMenu.classList.remove('closed');
    closeButton.classList.add('hidden');
  });
}
