(() => {
    document.querySelectorAll('.catalog-item__link').forEach(element => {
        element.addEventListener('click', (event) => {
            const cardContent = event.currentTarget.closest('.catalog-item__content');
            const listContent = cardContent.nextElementSibling;

            cardContent.classList.toggle('catalog-item__content_active');
            listContent.classList.toggle('catalog-item__list_active');
        });
    });

    document.querySelectorAll('.catalog-item__back').forEach(element => {
        element.addEventListener('click', (event) => {
            const listContent = event.currentTarget.closest('.catalog-item__list');
            const cardContent = listContent.previousElementSibling;

            cardContent.classList.toggle('catalog-item__content_active');
            listContent.classList.toggle('catalog-item__list_active');
        });
    });
})();