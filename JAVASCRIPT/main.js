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
// --- Compteur de temps passé ---
let seconds = 0;
const timeDisplay = document.getElementById("timeSpent");

setInterval(() => {
  seconds++;
  timeDisplay.textContent = seconds;
}, 1000);

// --- Compteur de visites ---
const visitDisplay = document.getElementById("visitCount");

// Récupère la valeur actuelle dans le localStorage (ou 0 si première fois)
let visits = localStorage.getItem("visitCount");
if (!visits) {
  visits = 0;
}
visits++;

// Sauvegarde la nouvelle valeur
localStorage.setItem("visitCount", visits);

// Affiche le compteur
visitDisplay.textContent = visits;

//Compteur de clics 
let clickCount = localStorage.getItem('clickCount') || 0; // Récupère l'ancien nombre (si dispo)
document.getElementById('click-count').textContent = clickCount;

document.addEventListener('click', () => {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;
    localStorage.setItem('clickCount', clickCount); // Sauvegarde dans le navigateur
});