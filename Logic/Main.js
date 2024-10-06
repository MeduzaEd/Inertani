document.addEventListener("DOMContentLoaded", function () {
    // Плавная прокрутка до секции загрузки
    const scrollToDownloadButton = document.querySelector(".scroll-to-download");
    scrollToDownloadButton.addEventListener("click", () => {
        const downloadSection = document.getElementById("download");
        downloadSection.scrollIntoView({ behavior: "smooth" });
    });

    // Добавить навигационную анимацию при прокрутке
    const mainNav = document.querySelector(".main-nav");
    let lastScrollTop = 0; // Переменная для хранения последней позиции прокрутки

    window.addEventListener("scroll", function () {
        // Проверка на прокрутку вниз или вверх
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollTop) {
            // Прокрутка вниз
            mainNav.classList.add("hide"); // Добавляем класс для скрытия
        } else {
            // Прокрутка вверх
            mainNav.classList.remove("hide"); // Удаляем класс для показа
        }

        // Анимация для прокрутки
        if (currentScroll > 100) {
            mainNav.classList.add("scrolled");
        } else {
            mainNav.classList.remove("scrolled");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для предотвращения отрицательных значений
    });
});
