// JavaScript для эффекта параллакса при прокрутке
window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;
    document.querySelector('.layer.mid').style.transform = `translateY(${scrollTop * 0.3}px)`;
    document.querySelector('.layer.fg').style.transform = `translateY(${scrollTop * 0.5}px)`;
});

// Плавный скролл при переходе по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Находим кнопку "Начать сейчас"
    const scrollToDownloadButton = document.querySelector('.scroll-to-download');
    // Находим секцию загрузки
    const downloadSection = document.querySelector('#download');

    // Добавляем событие клика
    scrollToDownloadButton.addEventListener('click', function () {
        // Плавная прокрутка к секции загрузки
        downloadSection.scrollIntoView({ behavior: 'smooth' });
    });
});
