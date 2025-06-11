window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let nav = document.querySelector('nav');

    if (scrollPosition > 1) {
        nav.classList.toggle('bg-standard', true);
        nav.classList.toggle('bg-transparent', false);
        nav.classList.toggle('fixed', true);
    } else{
        nav.classList.toggle('bg-transparent', true);
        nav.classList.toggle('bg-standard', false);
        nav.classList.toggle('fixed', false);
    }
});