document.addEventListener('DOMContentLoaded', function() {
    const serviceSections = document.querySelectorAll('.service-section');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // 이미 보여진 요소는 다시 관찰하지 않도록
            }
        });
    }, observerOptions);

    serviceSections.forEach(section => {
        observer.observe(section);
    });
});
