ScrollReveal({
  reset: true,
  distance: "60px",
  origin: "bottom",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".profildescription,#expertise,#portfolio,#contact", {
  delay: 500,
});
ScrollReveal().reveal(".photo", { delay: 500, origin: "right" });
ScrollReveal().reveal(".progress-bar", { delay: 500, origin: "left" });

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le bouton qui contrôle le menu déroulant
  var toggler = document.querySelector(".navbar-toggler");

  toggler.addEventListener("click", function () {
    // Attendre la fin de l'animation de déroulement (si applicable)
    setTimeout(function () {
      // Calculer la hauteur du menu de navigation
      var navHeight = document.querySelector(".navbar").offsetHeight;

      // Sélectionner l'élément qui doit être décalé vers le bas
      var contentElement = document.querySelector("main"); // Assurez-vous que cet élément est le bon sélecteur pour votre cas d'utilisation

      // Ajuster le padding-top de l'élément suivant
      contentElement.style.paddingTop = navHeight + "px";
    }, 350); // Ajustez ce temps d'attente en fonction de la durée de l'animation de votre menu
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le bouton qui contrôle l'ouverture/fermeture du menu
  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.querySelector(".navbar-collapse");

  // Fonction pour vérifier si le menu est ouvert
  function isMenuOpen() {
    return collapse.classList.contains("show");
  }

  // Fermer le menu si ouvert
  function closeMenu() {
    if (isMenuOpen()) {
      toggler.click(); // Simuler un clic sur le bouton pour fermer le menu
    }
  }

  // Écouter les clics sur le document
  document.addEventListener("click", function (event) {
    // Vérifier si le clic est en dehors du menu et du bouton
    var isClickInsideMenuOrButton =
      toggler.contains(event.target) || collapse.contains(event.target);

    if (!isClickInsideMenuOrButton) {
      closeMenu();
    }
  });

  // Optionnel : Empêcher le menu de se fermer lorsque l'utilisateur clique à l'intérieur
  collapse.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêcher l'événement de se propager au document
  });
});
