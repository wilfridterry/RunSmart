document.addEventListener('click', e => {
    const toggleModal = e.target.dataset.toggleModal;
    if (toggleModal != undefined) {
        const modal = document.querySelector(`#${toggleModal}`);

        document.body.style.overflow = 'hidden';
        document.querySelector('.overlay').style.display = 'block';
        modal.style.display = 'block';
        
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
        e.target.parentElement.style.display = 'none';
    }
});