validateForm('#consultation-modal-form');
validateForm('#consultation-form');
validateForm('#order-form');

function validateForm(selector) {
    $(selector).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }           
        }
    });
}

document.addEventListener('submit', e => {
    e.preventDefault();

    if (e.target.closest('.modal')) {
        closeModal(e.target.closest('.modal'));
    }

    openModal(document.querySelector('#thanks'));
})