document.querySelectorAll('.tab').forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Удаляем активные классы у всех вкладок и контента
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab_active'));
        document.querySelectorAll('.tab__content').forEach(c => c.classList.remove('tab__content_active'));

        // Добавляем активные классы текущей вкладке и соответствующему контенту
        tab.classList.add('tab_active');
        document.querySelectorAll('.tab__content')[index].classList.add('tab__content_active');
    });
});
