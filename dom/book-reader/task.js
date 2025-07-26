document.addEventListener('DOMContentLoaded', () => {
    // Получаем основной элемент книги
    const book = document.getElementById('book');
    
    // Получаем все кнопки управления размером шрифта
    const fontSizeButtons = document.querySelectorAll('.font-size');
    
    // Функция для обработки клика по кнопке
    const handleFontSizeClick = (event) => {
        event.preventDefault(); // предотвращаем переход по ссылке
        
        // Убираем активный класс у всех кнопок
        fontSizeButtons.forEach(button => {
            button.classList.remove('font-size_active');
        });
        
        // Добавляем активный класс текущей кнопке
        event.target.classList.add('font-size_active');
        
        // Получаем значение размера из data-атрибута
        const size = event.target.dataset.size;
        
        // Очищаем предыдущие классы размера
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        // Добавляем соответствующий класс
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    };
    
    // Добавляем обработчики на все кнопки
    fontSizeButtons.forEach(button => {
        button.addEventListener('click', handleFontSizeClick);
    });
});
