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