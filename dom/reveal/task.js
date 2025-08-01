// Функция для проверки видимости элемента в окне браузера
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления анимации элементам
function animateElements() {
    // Получаем все div-элементы, кроме header
    const elements = document.querySelectorAll('div:not(.header div)');
    
    elements.forEach(element => {
        // Проверяем, есть ли у элемента класс visible
        if (!element.classList.contains('visible')) {
            if (isElementInView(element)) {
                // Добавляем класс анимации с задержкой
                setTimeout(() => {
                    element.classList.add('visible');
                }, 100); // Задержка для плавного появления
            }
        }
    });
}

// Функция для инициализации
function init() {
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', () => {
        requestAnimationFrame(animateElements);
    });
    
    // Добавляем обработчик для изменения размера окна
    window.addEventListener('resize', animateElements);
    
    // Запускаем проверку при загрузке страницы
    window.addEventListener('load', animateElements);
}

// Оптимизация производительности
let lastScrollTop = 0;
let ticking = false;

window.addEventListener('scroll', function(e) {
    lastScrollTop = window.scrollY;
    if (!ticking) {
        requestAnimationFrame(() => {
            animateElements();
            ticking = false;
        });
        ticking = true;
    }
});

// Запускаем инициализацию
init();
