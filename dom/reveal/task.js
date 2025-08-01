function initScrollReveal() {
    // Получаем элемент, который нужно анимировать
    const revealElement = document.querySelector('.reveal');
    
    // Создаем новый наблюдатель пересечений
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если элемент вошел в видимую область
            if (entry.isIntersecting) {
                // Добавляем класс для отображения
                entry.target.classList.add('visible');
                // Прекращаем наблюдение за элементом
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Настраиваем параметры наблюдения
        rootMargin: '0px',
        threshold: 0.5 // Элемент появится когда 50% будет в видимой области
    });

    // Начинаем наблюдение за элементом
    observer.observe(revealElement);
}

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', initScrollReveal);
