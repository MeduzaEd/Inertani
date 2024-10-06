document.addEventListener("DOMContentLoaded", function() {
    // Плавная прокрутка до секции загрузки
    const scrollToDownloadButton = document.querySelector(".scroll-to-download");
    scrollToDownloadButton.addEventListener("click", () => {
        const downloadSection = document.getElementById("download");
        downloadSection.scrollIntoView({ behavior: "smooth" });
    });

    // Добавить навигационную анимацию при прокрутке
    const mainNav = document.querySelector(".main-nav");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            mainNav.classList.add("scrolled");
        } else {
            mainNav.classList.remove("scrolled");
        }
    });
});
