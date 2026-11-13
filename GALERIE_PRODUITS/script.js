
document.addEventListener("DOMContentLoaded", function () {

    // Sélectionner le bouton du thème
    const themeButton = document.getElementById("theme-toggle");

    // Sélectionner le body
    const body = document.body;

    // Changer le thème au clic
    themeButton.addEventListener("click", function () {

        // Ajouter ou retirer la classe dark-mode
        body.classList.toggle("dark-mode");

        // Modifier le texte du bouton
        if (body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Mode clair";
        } else {
            themeButton.textContent = "🌙 Mode sombre";
        }

    });

});