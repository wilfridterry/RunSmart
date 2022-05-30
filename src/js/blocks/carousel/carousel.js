document.addEventListener('DOMContentLoaded', () => {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        controls: false,
        nav: false,
        responsive: {
            992: {
                nav: true
            }
        }
    });
    
    document.querySelector('.prev').addEventListener(('click'), () => {
        slider.goTo('prev');
    });
    
    document.querySelector('.next').addEventListener(('click'), () => {
        slider.goTo('next');
    });    
});