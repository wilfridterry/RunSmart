(() => {
    toggleCatalogItems('.catalog-item__link');
    toggleCatalogItems('.catalog-item__back');
})();

function toggleCatalogItems(className) {
    document.querySelectorAll(className).forEach((element, index) => {
        element.addEventListener('click', (event) => {

            document.querySelectorAll('.catalog-item__content')[index]
                    .classList
                    .toggle('catalog-item__content_active')
            document.querySelectorAll('.catalog-item__list')[index]
                    .classList
                    .toggle('catalog-item__list_active');
        });
    });
}