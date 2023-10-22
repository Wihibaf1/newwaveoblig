document.addEventListener('DOMContentLoaded', function () {
    const hamBurger = document.querySelector('.ham-burger');
    const hamNav = document.querySelector('.ham-nav');
    let isNavOpen = false;

    hamBurger.addEventListener('click', function () {
        if (isNavOpen) {
            hamNav.style.right = '-250px';
            isNavOpen = false;
        } else {
            hamNav.style.right = '0';
            isNavOpen = true;
        }
    });
});
