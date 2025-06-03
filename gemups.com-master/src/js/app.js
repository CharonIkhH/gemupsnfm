import * as flsFunctions from "./modules/functions.js";
import * as sideBar from "./modules/sideBar.js";
import * as navMenu from "./modules/navMenu.js";
import * as langSwitcher from "./modules/langSwitcher.js";
import { setupProductFilters } from './modules/tagFilters.js';
import * as modals from "./modules/modals.js";
import { AuthManager } from "./modules/auth.js";
import { ProductService } from "./modules/products.js";
import { CartManager } from "./modules/cartManager.js";

// flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Инициализация аутентификации и гостевой сессии
  window.auth = new AuthManager();

  // 2. Инициализация корзины (с поддержкой гостя)
  window.cartManager = new CartManager();

  // 3. Инициализация сервиса товаров
  window.productService = new ProductService();

  // 4. Загрузка и отображение каталога товаров
  const products = await window.productService.loadCatalog();
  if (typeof window.renderProductCatalog === 'function') {
    window.renderProductCatalog(products);
  }

  // 5. Настройка фильтров товаров (теги/категории)
  setupProductFilters();

  // 6. Навешиваем обработчики на кнопки "Добавить в корзину"
  document.body.addEventListener('click', async (e) => {
    const addBtn = e.target.closest('.add-to-cart');
    if (addBtn) {
      const productId = addBtn.dataset.productId;
      const quantity = addBtn.dataset.quantity ? parseInt(addBtn.dataset.quantity) : 1;
      await window.productService.addToCart(productId, quantity);
    }
  });

  // 7. Навешиваем обработчик на отправку отзывов
  document.body.addEventListener('submit', async (e) => {
    if (e.target.matches('.review-form')) {
      e.preventDefault();
      const form = e.target;
      const productId = form.dataset.productId;
      const reviewData = {
        text: form.review.value,
        rating: parseInt(form.rating.value)
      };
      try {
        await window.productService.submitReview(productId, reviewData);
        modals.showSystemMessage('Thank you for your review!', 'success');
      } catch (err) {
        modals.showSystemMessage(err.message || 'Failed to submit review', 'error');
      }
    }
  });

  // 8. Инициализация прочих UI функций
  sideBar.init();
  navMenu.init();
  langSwitcher.init();
  modals.init();
});
