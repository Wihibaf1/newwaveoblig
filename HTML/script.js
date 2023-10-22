document.addEventListener('DOMContentLoaded', function () {
    const hamBurger = document.querySelector('.ham-burger');
    const hamNav = document.querySelector('.ham-nav');
    let isNavOpen = false;
// Måtte bruke javascript for å kunne legge inn fontene på fontawesome. 
//hamburgermeny, lagde en click funtion til den og la til utemenyene inni menybaren!
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
