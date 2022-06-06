(() => {
    document.querySelector('.catalog__content').addEventListener('click', e => {
        if (e.target.classList.contains('catalog-item-toggle')) {
            const parent = e.target.closest('.catalog-item');
            parent.querySelector('.catalog-item__content')
                    .classList
                    .toggle('catalog-item__content_active');

            parent.querySelector('.catalog-item__list')
                    .classList
                    .toggle('catalog-item__list_active');
        }
    });

    new WOW().init();
})();