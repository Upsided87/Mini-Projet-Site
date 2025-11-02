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

// Compteur de clics sur la page
let clickCount = localStorage.getItem('clickCount') || 0; // Récupère l'ancien nombre (si dispo)
document.getElementById('click-count').textContent = clickCount;

// Quand on clique n'importe où dans la page
document.addEventListener('click', () => {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;
    localStorage.setItem('clickCount', clickCount); // Sauvegarde dans le navigateur
});

document.addEventListener('DOMContentLoaded', () => {
    // Expose function pour les onclick inline
    window.masquer = function (classe) {
        const elements = document.querySelectorAll(classe);
        elements.forEach(element => element.classList.toggle('masque'));
    };

    const logo = document.querySelector('.nav-logo');
    const links = document.querySelector('.nav-links');
    const navbarLeft = document.querySelector('.navbar-left');

    if (logo && links) {
        // Affiche les liens au survol / focus (accessibilité)
        logo.addEventListener('mouseenter', () => links.classList.add('active'));
        logo.addEventListener('focus', () => links.classList.add('active'));
    }
    if (navbarLeft && links) {
        navbarLeft.addEventListener('mouseleave', () => links.classList.remove('active'));
        navbarLeft.addEventListener('blur', () => links.classList.remove('active'));
    }

    // Compteur de clics (sûr si élément manquant)
    let clickCount = parseInt(localStorage.getItem('clickCount') || '0', 10);
    const clickEl = document.getElementById('click-count');
    if (clickEl) clickEl.textContent = clickCount;
    document.addEventListener('click', () => {
        clickCount++;
        if (clickEl) clickEl.textContent = clickCount;
        localStorage.setItem('clickCount', String(clickCount));
    });

    // model-viewer : lire son si data-son présent
    const models = document.querySelectorAll('model-viewer[data-son]');
    models.forEach(model => {
        const src = model.getAttribute('data-son');
        if (!src) return;
        const audio = new Audio(src);
        audio.volume = 0.7;
        model.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play().catch(() => {});
        });
        model.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
        });
    });

    // Compteur de temps passé (si élément présent)
    let seconds = 0;
    const timeDisplay = document.getElementById('timeSpent');
    if (timeDisplay) {
        setInterval(() => {
            seconds++;
            timeDisplay.textContent = String(seconds);
        }, 1000);
    }

    // Compteur de visites (localStorage)
    const visitDisplay = document.getElementById('visitCount');
    if (visitDisplay) {
        let visits = parseInt(localStorage.getItem('visitCount') || '0', 10);
        visits++;
        localStorage.setItem('visitCount', String(visits));
        visitDisplay.textContent = String(visits);
    }
});
