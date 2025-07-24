document.addEventListener('DOMContentLoaded', function() {
  const dropdownValue = document.querySelector('.dropdown__value');
  const dropdownList = document.querySelector('.dropdown__list');
  const dropdownItems = document.querySelectorAll('.dropdown__item');

  // Открытие/закрытие списка по клику на текущее значение
  dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  // Обработка выбора пункта списка
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Отменяем переход по ссылке
      
      // Устанавливаем новое значение
      const newValue = this.querySelector('.dropdown__link').textContent.trim();
      dropdownValue.textContent = newValue;
      
      // Закрываем список
      dropdownList.classList.remove('dropdown__list_active');
    });
  });

  // Закрытие списка при клике вне его области (опционально)
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdownList.classList.remove('dropdown__list_active');
    }
  });
});