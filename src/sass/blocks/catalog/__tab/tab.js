(() => {
    document.querySelector('.catalog__tabs').addEventListener('click', (e) => {

        const tab = e.target.closest('.catalog__tab');

        if (!tab) {
            return;
        }

        const tabClassActive = 'catalog__tab_active';
        const contentClassActive = 'catalog__content_active';

        if (tab.classList.contains(tabClassActive)) {
            return;
        }

        document.querySelector(`.${tabClassActive}`)
                .classList
                .toggle(tabClassActive);

                tab.classList.toggle(tabClassActive);

        document.querySelector(`.${contentClassActive}`)
                .classList
                .toggle(contentClassActive);
        
        const anchor = tab.dataset.anchor;

        document.querySelector(`[data-source=${anchor}]`)
                .classList
                .toggle(contentClassActive);
    });
})();