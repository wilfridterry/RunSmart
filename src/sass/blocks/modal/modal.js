document.addEventListener('click', e => {
    const toggleModal = e.target.dataset.toggleModal;
    if (toggleModal != undefined) {
        const modal = document.querySelector(`#${toggleModal}`);

        document.body.style.overflow = 'hidden';
        document.querySelector('.overlay').style.display = 'block';
        
        modal.style.display = 'block';
        modal.style.opacity = '0';

        setTimeout(() => {
            modal.style.opacity = '1';
        }, 0);        
        
        for (let prop in e.target.dataset) {
            if (prop.startsWith('modal:')) {
                const elem = prop.split(':')[1];
                modal.querySelector(`.modal__${elem}`).innerHTML = e.target.dataset[prop];
            }
        }
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__close')) {
        document.body.style.overflow = '';
        document.querySelector('.overlay').style.display = 'none';
        
        const modal = e.target.parentElement;
        modal.style.display = 'none';
        
        const form = modal.querySelector('form');
        if (form != undefined) {
            form.reset();
            form.querySelectorAll('.error').forEach(elem => {
                elem.classList.remove('error');
                if (elem.tagName == "LABEL") {
                    elem.remove();
                }
            });
        } 
    }
});