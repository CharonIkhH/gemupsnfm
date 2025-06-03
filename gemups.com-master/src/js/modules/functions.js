export function isWebp() {
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      }
      
      testWebP(function (support) {
      
      if (support == true) {
      document.querySelector('body').classList.add('webp');
      }else{
      document.querySelector('body').classList.add('no-webp');
      }
      });
}



// Проверка формы -- удаление Disabled

(function enableSubmitWhenAllRequiredFieldsFilled() {
  document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      const requiredFields = form.querySelectorAll('input[required]');
      const submitButton = form.querySelector('button[type="submit"]');

      if (!submitButton || !requiredFields.length) return;

      const checkValidity = () => {
        const allFilled = Array.from(requiredFields).every(
          input => input.value.trim() !== ''
        );
        submitButton.disabled = !allFilled;
      };

      // Слушаем ввод в каждом required-поле
      requiredFields.forEach(input => {
        input.addEventListener('input', checkValidity);
      });

      // Проверим при загрузке (на случай автозаполнения браузером)
      checkValidity();
    });
  });
})();

(function setupContentToggle() {
  const areas = document.querySelectorAll('.content__area');

  if (!areas.length) return;

  areas.forEach(area => {
    const toggleBtn = area.querySelector('.openContent');
    const subContent = area.querySelector('.sub__content');

    if (!toggleBtn || !subContent) return;

    toggleBtn.addEventListener('click', () => {
      const isActive = subContent.classList.toggle('active');
      area.classList.toggle('open', isActive);
    });
  });
})();


document.addEventListener('DOMContentLoaded', function () {
  // Получаем все элементы .buttom
  const cards = document.querySelectorAll('.buttom');

  cards.forEach(card => {
    const cartButton = card.querySelector('.order__action > button');
    const icon = cartButton.querySelector('i');
    const counter = card.querySelector('.order__counter');
    const minusBtn = counter.querySelector('button:first-child');
    const plusBtn = counter.querySelector('button:last-child');
    const input = counter.querySelector('input');
    const priceValue = card.querySelector('.price .value');

    // Берем цену из текста и преобразуем
    let unitPrice = parseFloat(priceValue.textContent.replace(',', '.'));

    function updatePrice(qty) {
      const total = (qty * unitPrice).toFixed(2).replace('.', ',');
      priceValue.textContent = total;
    }

    cartButton.addEventListener('click', () => {
      counter.classList.toggle('active');

      // Меняем иконку
      if (icon.classList.contains('ico-cart')) {
        icon.classList.remove('ico-cart');
        icon.classList.add('ico-done');
      } else {
        icon.classList.remove('ico-done');
        icon.classList.add('ico-cart');
      }
    });

    minusBtn.addEventListener('click', function (e) {
      e.preventDefault();
      let current = parseInt(input.value) || 1;
      if (current > 1) current--;
      input.value = current;
      updatePrice(current);
    });

    plusBtn.addEventListener('click', function (e) {
      e.preventDefault();
      let current = parseInt(input.value) || 1;
      current++;
      input.value = current;
      updatePrice(current);
    });

    // Инициализация
    input.value = 1;
    updatePrice(1);
  });
});

const tariffInputs = document.querySelectorAll('input[name="tariff"]');

tariffInputs.forEach(input => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.selectPlan__wrapper label').forEach(label => {
      label.classList.remove('selected');
    });
    input.closest('label').classList.add('selected');
  });
});


// Выбор тарифа и калькулятор стоимости
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tariffRadios = document.querySelectorAll('input[name="tariff"]');
    const quantityInput = document.querySelector('.counter input');
    const minusBtn = document.querySelector('.counter button:first-child');
    const plusBtn = document.querySelector('.counter button:last-child');
    const priceOutput = document.querySelector('.item__price .value');

    let currentUnitPrice = 0;

    function formatPrice(price) {
      return price.toLocaleString("ru-RU", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }

    function getQuantity() {
      const raw = quantityInput.value.replace(/\D/g, '');
      return raw ? parseInt(raw) : 1;
    }

    function updateTotal() {
      const quantity = getQuantity();
      const total = quantity * currentUnitPrice;
      priceOutput.textContent = formatPrice(total);
    }

    function setUnitPriceFromRadio(radio) {
      const label = radio.closest('label');
      let priceText = label.querySelector('.bottom .value')?.textContent;

      if (!priceText) {
        priceText = radio.dataset.price;
      }

      if (priceText) {
        currentUnitPrice = parseFloat(priceText.replace(',', '.'));
        quantityInput.value = 1;
        updateTotal();
      }
    }

    tariffRadios.forEach(radio => {
      radio.addEventListener('change', function () {
        setUnitPriceFromRadio(this);
      });

      // Если radio уже выбран по умолчанию
      if (radio.checked) {
        setUnitPriceFromRadio(radio);
      }
    });

    minusBtn.addEventListener('click', () => {
      let quantity = getQuantity();
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateTotal();
      }
    });

    plusBtn.addEventListener('click', () => {
      let quantity = getQuantity();
      quantity++;
      quantityInput.value = quantity;
      updateTotal();
    });

    quantityInput.addEventListener('input', () => {
      updateTotal();
    });

    updateTotal(); // стартовый вызов
  });
})();


// Tabs

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tabs__button');
    const tabContents = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
      button.addEventListener('click', function () {
        const target = this.dataset.tab;

        // Toggle active class on buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Toggle active class on content
        tabContents.forEach(tab => {
          if (tab.id === target) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });
      });
    });
  });
})();

// Открытие блока описания на Аккаунтах
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("#description__block button");
    const contentBody = document.querySelector("#description__block .content__body");

    if (!toggleButton || !contentBody) return;

    let expanded = false;

    toggleButton.addEventListener("click", function () {
      expanded = !expanded;

      contentBody.classList.toggle("active", expanded);
      toggleButton.textContent = expanded ? "Hidden" : "More";
    });
  });
})();

// Copy link
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.querySelector('.copy-link');

    if (copyButton) {
      copyButton.addEventListener('click', function () {
        const url = window.location.href;

        if (navigator.clipboard && window.isSecureContext) {
          // Используем Clipboard API
          navigator.clipboard.writeText(url).then(() => {
            showCopied(copyButton);
          }).catch(err => {
            console.error('Clipboard error:', err);
          });
        } else {
          // Фоллбэк для небезопасного контекста (например, http)
          const textarea = document.createElement('textarea');
          textarea.value = url;
          textarea.style.position = 'fixed'; // избежать прокрутки
          textarea.style.opacity = 0;
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();

          try {
            document.execCommand('copy');
            showCopied(copyButton);
          } catch (err) {
            console.error('execCommand error:', err);
          }

          document.body.removeChild(textarea);
        }
      });
    }

    function showCopied(button) {
      const original = button.innerHTML;
      button.innerHTML = '<i class="ico-copy"></i>Copied!';
      setTimeout(() => {
        button.innerHTML = original;
      }, 2000);
    }
  });
})();


(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('addReview');
    if (!modal) return;

    const starsContainer = modal.querySelector('.rating__stars');
    const stars = starsContainer.querySelectorAll('.ico-star');
    const valueDisplay = modal.querySelector('.rating__wrapper .value');
    const hiddenInput = modal.querySelector('input[name="rating"]');
    const submitButton = modal.querySelector('button[type="submit"]');

    function updateStars(rating) {
      stars.forEach(star => {
        const val = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('active', val <= rating);
      });
    }

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        updateStars(rating);
        hiddenInput.value = rating;
        valueDisplay.textContent = rating.toFixed(1);
        submitButton.disabled = rating === 0;
      });

      star.addEventListener('mouseenter', () => {
        const hoverRating = parseInt(star.getAttribute('data-value'));
        updateStars(hoverRating);
      });

      star.addEventListener('mouseleave', () => {
        const currentRating = parseInt(hiddenInput.value) || 0;
        updateStars(currentRating);
      });
    });
  });
})();


(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const textareas = document.querySelectorAll('textarea');

    textareas.forEach(textarea => {
      // Автовысота при вводе
      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; // сброс предыдущей высоты
        textarea.style.height = textarea.scrollHeight + 'px'; // установка новой
      });

      // Первичная установка высоты, если есть значение
      if (textarea.value.trim() !== '') {
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    });
  });
})();