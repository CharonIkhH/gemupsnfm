// src/js/modules/modals.js

/**
 * МОДУЛЬ РАБОТЫ С МОДАЛКАМИ И СИСТЕМНЫМИ СООБЩЕНИЯМИ
 * ===========================================================
 * - Инициализация HystModal
 * - Глобальные уведомления (успех, ошибка, инфо)
 * - Легко расширяем для любых кастомных модалок
 */

// Инициализация HystModal (библиотека должна быть подключена на странице)
let myModal = null;

export function init() {
  if (!window.HystModal) {
    console.warn('HystModal library not found!');
    return;
  }
  myModal = new window.HystModal({
    linkAttributeName: "data-hystmodal",
    // Можно добавить дополнительные опции здесь
  });
}

/**
 * ГЛОБАЛЬНОЕ СИСТЕМНОЕ СООБЩЕНИЕ
 * @param {string} msg - Текст сообщения
 * @param {string} type - Тип ('success', 'error', 'info', 'warning')
 */
export function showSystemMessage(msg, type = 'info') {
  // Создаём контейнер для сообщения
  const el = document.createElement('div');
  el.className = `system-message system-message--${type}`;
  el.textContent = msg;

  // Стилизация (можно вынести в CSS)
  el.style.position = 'fixed';
  el.style.top = '30px';
  el.style.right = '30px';
  el.style.zIndex = '9999';
  el.style.padding = '1em 1.5em';
  el.style.borderRadius = '8px';
  el.style.background = {
    success: '#e6ffe6',
    error: '#ffe6e6',
    info: '#e6f0ff',
    warning: '#fffbe6'
  }[type] || '#f0f0f0';
  el.style.color = {
    success: '#1a7f37',
    error: '#b91c1c',
    info: '#2563eb',
    warning: '#b45309'
  }[type] || '#222';
  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.1)';
  el.style.fontSize = '1rem';

  document.body.appendChild(el);

  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s';
    setTimeout(() => el.remove(), 300);
  }, 4000);
}

/**
 * ОТКРЫТИЕ КАСТОМНОЙ МОДАЛКИ ПО ID
 * @param {string} modalId - ID модального окна (например, '#myModal')
 */
export function openModal(modalId) {
  if (myModal && typeof myModal.open === 'function') {
    myModal.open(modalId);
  }
}

/**
 * ЗАКРЫТИЕ МОДАЛКИ
 */
export function closeModal() {
  if (myModal && typeof myModal.close === 'function') {
    myModal.close();
  }
}
