document.addEventListener('scroll', e => {
    const buttonScrollUp = document.querySelector('.pageup');
    buttonScrollUp.style.visibility = 'hidden';
    buttonScrollUp.style.opacity = '0';
    
    if (document.documentElement.scrollTop > 1600) {
        buttonScrollUp.style.visibility = 'visible';
        buttonScrollUp.style.opacity = '1';
    }
});