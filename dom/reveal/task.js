// Получаем все элементы, которые нужно анимировать
const revealElements = document.querySelectorAll('.reveal');
// Флаг для отслеживания состояния каждого элемента
const revealedStatus = {};

// Функция для проверки видимости элементов
function checkReveal() {
    revealElements.forEach((element) => {
        // Получаем начальную позицию элемента относительно верха страницы
        const revealOffset = element.offsetTop;
        
        // Получаем текущую позицию прокрутки
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Проверяем, находится ли элемент в видимой области
        if (scrollTop >= revealOffset - window.innerHeight && !revealedStatus[element]) {
            // Добавляем класс при достижении элемента
            element.classList.add('reveal_active');
            revealedStatus[element] = true;
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', () => {
    requestAnimationFrame(checkReveal);
});

// Проверяем при загрузке страницы
window.addEventListener('load', checkReveal);

// Дополнительно: можно добавить обработку изменения размера окна
window.addEventListener('resize', () => {
    requestAnimationFrame(checkReveal);
});
