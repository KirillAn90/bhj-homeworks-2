document.addEventListener('DOMContentLoaded', () => {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    let originalWidth = 200;
    let originalHeight = 200;
    let isSmall = false;
    let clicks = 0;
    cookie.addEventListener('click', () => {
        clicks++;
        counter.textContent = clicks;
        if (isSmall) {
            cookie.style.width = `${originalWidth}px`;
            cookie.style.height = `${originalHeight}px`;
        } else {
            cookie.style.width = `${originalWidth * 0.8}px`;
            cookie.style.height = `${originalHeight * 0.8}px`;
        }
        isSmall = !isSmall;
    });
});
