function masquer(classe) { // Fonction qui masque/affiche une classe donnée
    const elements = document.querySelectorAll(classe); // Récupère tous les éléments correspondant à la classe fournie
    elements.forEach(element => { // Parcourt chaque élément trouvé
        element.classList.toggle("masque"); // Ajoute/enlève la classe "masque" pour cacher/montrer
    }); // Fin boucle
} // Fin fonction masquer

const logo = document.querySelector('.nav-logo'); // Récupère l'élément logo dans la navbar
const links = document.querySelector('.nav-links'); // Récupère la liste de liens de la navbar
const navbarLeft = document.querySelector('.navbar-left'); // Récupère le conteneur gauche de la navbar

// Quand on entre sur le logo, ajoute la classe "active"
logo.addEventListener('mouseenter', () => { // Écouteur sur l'événement mouseenter du logo
    links.classList.add('active'); // Ajoute la classe active pour afficher les liens
}); // Fin écouteur logo mouseenter

// Quand on sort du bloc navbar-left, retire la classe "active"
navbarLeft.addEventListener('mouseleave', () => { // Écouteur mouseleave sur le conteneur navbar-left
    links.classList.remove('active'); // Retire la classe active pour masquer les liens
}); // Fin écouteur navbarLeft mouseleave

// --- Compteur de temps passé ---
let seconds = 0; // Compteur de secondes initialisé à 0
const timeDisplay = document.getElementById("timeSpent"); // Récupère l'élément d'affichage du temps

setInterval(() => { // Lancement d'un intervalle qui incrémente chaque seconde
  seconds++; // Incrémente le compteur de secondes
  timeDisplay.textContent = seconds; // Met à jour l'affichage du temps sur la page
}, 1000); // Intervalle toutes les 1000ms (1s)

// --- Compteur de visites ---
const visitDisplay = document.getElementById("visitCount"); // Récupère l'élément d'affichage des visites

// Récupère la valeur actuelle dans le localStorage (ou 0 si première fois)
let visits = localStorage.getItem("visitCount"); // Lit la clé visitCount depuis localStorage
if (!visits) { // Si aucune valeur trouvée (première visite)
  visits = 0; // Initialise à 0
}
visits++; // Incrémente le nombre de visites

// Sauvegarde la nouvelle valeur
localStorage.setItem("visitCount", visits); // Écrit la nouvelle valeur dans localStorage

// Affiche le compteur
visitDisplay.textContent = visits; // Met à jour l'affichage des visites

//Compteur de clics 
let clickCount = localStorage.getItem('clickCount') || 0; // Récupère l'ancien nombre (si dispo) ou 0 par défaut
document.getElementById('click-count').textContent = clickCount; // Affiche le nombre de clics initial

document.addEventListener('click', () => { // Écoute tous les clics sur le document
    clickCount++; // Incrémente le compteur de clics
    document.getElementById('click-count').textContent = clickCount; // Met à jour l'affichage des clics
    localStorage.setItem('clickCount', clickCount); // Sauvegarde la nouvelle valeur dans localStorage
}); // Fin écouteur clicks

const models = document.querySelectorAll('model-viewer[data-son]'); // Récupère tous les model-viewer qui ont un attribut data-son
    models.forEach(model => { // Parcourt chaque model-viewer
        const src = model.getAttribute('data-son'); // Récupère la source audio depuis l'attribut data-son
        if (!src) return; // Si pas de source, passe au suivant
        const audio = new Audio(src); // Crée un nouvel objet Audio avec la source
        audio.volume = 0.7; // Régle le volume par défaut
        model.addEventListener('mouseenter', () => { // Au survol du model-viewer
            audio.currentTime = 0; // Remet l'audio au début
            audio.play().catch(() => {}); // Lance la lecture (ignore erreurs de lecture)
        }); // Fin écouteur mouseenter
        model.addEventListener('mouseleave', () => { // Quand la souris quitte le model-viewer
            audio.pause(); // Met en pause l'audio
            audio.currentTime = 0; // Remet à zéro la lecture
        }); // Fin écouteur mouseleave
    }); // Fin forEach modèles
