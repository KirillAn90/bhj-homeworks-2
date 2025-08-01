// Функция для инициализации ротатора
function initRotator(rotatorElement) {
    // Получаем все случаи ротатора
    const cases = rotatorElement.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    // Получаем начальную скорость из первого элемента
    const initialSpeed = parseInt(cases[0].dataset.speed) || 1000;
    
    // Функция для смены активного элемента
    function changeCase() {
        // Убираем активный класс у текущего элемента
        cases[currentIndex].classList.remove('rotator__case_active');
        
        // Вычисляем следующий индекс
        currentIndex = (currentIndex + 1) % cases.length;
        
        // Получаем скорость для следующего элемента
        const nextSpeed = parseInt(cases[currentIndex].dataset.speed) || initialSpeed;
        
        // Применяем цвет для следующего элемента
        cases[currentIndex].style.color = cases[currentIndex].dataset.color;
        
        // Добавляем активный класс следующему элементу
        cases[currentIndex].classList.add('rotator__case_active');
        
        // Запускаем таймер с новой скоростью
        timer = setTimeout(changeCase, nextSpeed);
    }
    
    // Функция для проверки видимости элемента
    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Переменная timer теперь локальная для каждого ротатора
    let timer = null;
    
    // Запускаем ротатор при появлении в области видимости
    function checkVisibility() {
        if (isElementInView(rotatorElement)) {
            // Если ротатор стал видимым, запускаем таймер
            if (!timer) {
                timer = setTimeout(changeCase, initialSpeed);
            }
        } else {
            // Если ротатор не виден, останавливаем таймер
            clearTimeout(timer);
            timer = null;
        }
    }
    
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', () => {
        checkVisibility();
    });
    
    // Инициализируем проверку при загрузке страницы
    checkVisibility();
}

// Инициализация всех ротаторов на странице
document.querySelectorAll('.rotator').forEach(initRotator);
