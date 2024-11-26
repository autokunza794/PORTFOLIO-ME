    function navbar
    const mobileMenu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.navbar-menu');
    const logo = document.querySelector('.navbar-logo');

    if (mobileMenu && navMenu && logo) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    } else {
