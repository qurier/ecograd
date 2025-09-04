document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');
    const nav_elems = document.querySelectorAll('.nav_elem');
    checkOpen = false;

    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
        burger.classList.toggle('active'); // можно анимировать иконку
    });
    for(i = 0; i < nav_elems.length; i++){
        nav_elems[i].addEventListener('click', () => {
            if(burger.className == 'burger active'){
                nav.classList.toggle('open');
                burger.classList.toggle('active'); // можно анимировать иконку  
            }
        });
    }
});