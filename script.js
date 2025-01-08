function GettextIntervale() {
    // Récupère l'élément par son ID
    const text = document.getElementById('clignotant');

    // Fonction pour faire clignoter le texte
    setInterval(() => {
        // Alterne entre visible et invisible
        if (text.style.visibility === 'hidden') {
            text.style.visibility = 'visible';
        } else {
            text.style.visibility = 'hidden';
        }
    }, 500); // 500 millisecondes = 0.5 seconde
}

// Permet de préparer le son après une interaction utilisateur
let isInteractionAllowed = false;

GettextIntervale()

function ouvrirNouvelleFenetre() {
    var fenetrePopup = window.open('./nouvellePage.html', 'NouvelleFenetre', 'width=600,height=400');
  
    // Attendre que la fenêtre soit complètement ouverte et prête
    fenetrePopup.onload = function() {
      console.log('Nouvelle fenêtre ouverte');
    };
  
    // Ajouter la référence de la fenêtre popup pour pouvoir la fermer plus tard
    window.fenetrePopup = fenetrePopup;
  }

  function revenirOuFermer() {
    if (document.referrer) {
        window.history.back(); // Retourne en arrière sans jouer de son
    } else {
        const sound = document.getElementById('click');
        sound.currentTime = 0;  // Réinitialise la position de lecture au début
        sound.play();           // Joue le son

        setTimeout(() => {
            window.close();     // Ferme la fenêtre après avoir joué le son
        }, sound.duration * 180);
    }
}

function fermerFenetre() {
    const sound = document.getElementById('click');
    sound.currentTime = 0;  // Réinitialise la position de lecture au début
    sound.play();           // Joue le son

    setTimeout(() => {
        if (window.opener) {
            window.close(); // Ferme la fenêtre actuelle si elle a été ouverte par JavaScript
        } else {
            alert("Impossible de fermer cette fenêtre. Elle n'a pas été ouverte par un script.");
        }
    }, sound.duration * 180); // Attend la durée du son en millisecondes
}


// Sélectionne tous les éléments avec la classe 'kalam'
const kalamElements = document.querySelectorAll('.kalam');

// Ajoute l'événement 'mouseover' à chaque élément
kalamElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        const sound = document.getElementById('mouseover');
        sound.currentTime = 0;  // Réinitialise la position de lecture au début
        sound.play();           // Joue le son
    });
});

// Ajoute l'événement 'click' à chaque élément
kalamElements.forEach(function(element) {
    element.addEventListener('click', function() {
        const sound = document.getElementById('click');
        sound.currentTime = 0;  // Réinitialise la position de lecture au début
        sound.play();           // Joue le son
    });
});
