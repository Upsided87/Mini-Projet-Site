function masquer(classe) {
    const elements = document.querySelectorAll(classe);
    elements.forEach(element => {
        element.classList.toggle("masque");
    });
}

const logo = document.querySelector('.nav-logo');
const links = document.querySelector('.nav-links');
const navbarLeft = document.querySelector('.navbar-left');

// Quand on entre sur le logo, ajoute la classe "active"
logo.addEventListener('mouseenter', () => {
    links.classList.add('active');
});

// Quand on sort du bloc navbar-left, retire la classe "active"
navbarLeft.addEventListener('mouseleave', () => {
    links.classList.remove('active');
});