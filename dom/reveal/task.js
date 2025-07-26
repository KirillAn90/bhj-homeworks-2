// Получаем элемент, который нужно анимировать
const revealElement = document.querySelector('.reveal');
// Получаем начальную позицию элемента относительно верха страницы
const revealOffset = revealElement.offsetTop;
// Флаг для проверки, был ли уже показан элемент
let isRevealed = false;

// Функция для проверки видимости элемента
function checkReveal() {
    // Получаем текущую позицию прокрутки
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Проверяем, находится ли элемент в видимой области
    if (scrollTop >= revealOffset - window.innerHeight && !isRevealed) {
        // Добавляем класс при достижении элемента
        revealElement.classList.add('reveal_active');
        isRevealed = true;
    }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', () => {
    requestAnimationFrame(checkReveal);
});

// Проверяем при загрузке страницы
window.addEventListener('load', checkReveal);
