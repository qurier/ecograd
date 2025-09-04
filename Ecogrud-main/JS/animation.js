document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("show");
                observer.unobserve(aboutSection); // запуск только один раз
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
});