// Получаем все элементы, которые нужно анимировать
const revealElements = document.querySelectorAll('.reveal');
// Объект для отслеживания состояния каждого элемента
const revealedStatus = {};

// Функция для проверки видимости элементов
function checkReveal() {
    revealElements.forEach((element, index) => {
        // Получаем начальную позицию элемента относительно верха страницы
        const revealOffset = element.offsetTop;
        
        // Получаем текущую позицию прокрутки
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Получаем высоту видимой области
        const viewportHeight = window.innerHeight;
        
        // Проверяем, находится ли элемент в видимой области
        // Учитываем высоту элемента для более точного расчета
        const elementHeight = element.offsetHeight;
        
        if (scrollTop + viewportHeight >= revealOffset && 
            scrollTop <= revealOffset + elementHeight && 
            !revealedStatus[index]) {
            
            // Добавляем класс при достижении элемента
            element.classList.add('reveal_active');
            revealedStatus[index] = true;
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', () => {
    requestAnimationFrame(checkReveal);
});

// Проверяем при загрузке страницы
window.addEventListener('load', checkReveal);

// Добавляем обработку изменения размера окна
window.addEventListener('resize', () => {
    requestAnimationFrame(checkReveal);
});

// Инициализируем проверку при старте
checkReveal();
