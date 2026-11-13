
// SÉLECTION DES ÉLÉMENTS HTML

const formulaireTache = document.getElementById("formulaireTache");
const champTache = document.getElementById("champTache");
const listeTaches = document.getElementById("listeTaches");

const totalTaches = document.getElementById("totalTaches");
const tachesRestantes = document.getElementById("tachesRestantes");
const messageVide = document.getElementById("messageVide");

const remplissageProgression =
    document.getElementById("remplissageProgression");

const texteProgression =
    document.getElementById("texteProgression");

const supprimerTerminees =
    document.getElementById("supprimerTerminees");

// CHARGEMENT DES TÂCHES SAUVEGARDÉES

function chargerTaches() {

    try {
        const donnees = JSON.parse(
            localStorage.getItem("taches")
        );

        if (!Array.isArray(donnees)) {
            return [];
        }

        return donnees.filter(tache =>
            tache &&
            typeof tache.id === "number" &&
            typeof tache.texte === "string" &&
            typeof tache.terminee === "boolean"
        );

    } catch (erreur) {
        console.error("Erreur de chargement :", erreur);
        return [];
    }
}

let taches = chargerTaches();

let filtreActuel = "toutes";

// SAUVEGARDE DES TÂCHES

function sauvegarderTaches() {

    localStorage.setItem(
        "taches",
        JSON.stringify(taches)
    );

}

// AJOUTER UNE TÂCHE

formulaireTache.addEventListener("submit", function(e) {

    e.preventDefault();

    const texte = champTache.value.trim();

    if (texte === "") {
        alert("Veuillez saisir une tâche !");
        return;
    }

    const nouvelleTache = {
        id: Date.now(),
        texte: texte,
        terminee: false
    };

    taches.push(nouvelleTache);

    sauvegarderTaches();

    champTache.value = "";

    filtreActuel = "toutes";

    mettreAJourFiltres();

    afficherTaches();

});

// AFFICHER LES TÂCHES

function afficherTaches() {

    listeTaches.innerHTML = "";

    let tachesFiltrees = taches;

    if (filtreActuel === "actives") {

        tachesFiltrees = taches.filter(
            tache => !tache.terminee
        );

    }

    if (filtreActuel === "terminees") {

        tachesFiltrees = taches.filter(
            tache => tache.terminee
        );

    }

    tachesFiltrees.forEach(function(tache) {

        const element = document.createElement("li");

        element.className = "element-tache";

        if (tache.terminee) {
            element.classList.add("terminee");
        }

        // CASE À COCHER

        const caseTache = document.createElement("input");

        caseTache.type = "checkbox";
        caseTache.checked = tache.terminee;

        caseTache.setAttribute(
            "aria-label",
            "Marquer comme terminée"
        );

        caseTache.addEventListener("change", function() {

            tache.terminee = caseTache.checked;

            sauvegarderTaches();

            afficherTaches();

        });

        // TEXTE DE LA TÂCHE

        const texteTache = document.createElement("span");

        texteTache.textContent = tache.texte;

        texteTache.className = "texte-tache";

        // BOUTON DE SUPPRESSION

        const boutonSupprimer = document.createElement("button");

        boutonSupprimer.textContent = "Supprimer";

        boutonSupprimer.className = "bouton-supprimer";

        boutonSupprimer.addEventListener("click", function() {

            taches = taches.filter(
                element => element.id !== tache.id
            );

            sauvegarderTaches();

            afficherTaches();

        });

        // AJOUT DES ÉLÉMENTS À LA LISTE

        element.appendChild(caseTache);
        element.appendChild(texteTache);
        element.appendChild(boutonSupprimer);

        listeTaches.appendChild(element);

    });

    // AFFICHER LE MESSAGE SI LA LISTE EST VIDE

    messageVide.style.display =
        tachesFiltrees.length === 0 ? "block" : "none";

    // CALCUL DES TÂCHES TERMINÉES

    const nombreTerminees = taches.filter(
        tache => tache.terminee
    ).length;

    const nombreRestantes = taches.length - nombreTerminees;

    // MISE À JOUR DES COMPTEURS

    totalTaches.textContent = taches.length;

    tachesRestantes.textContent =
        nombreRestantes + " tâche(s) restante(s)";

    // CALCUL DE LA PROGRESSION

    const pourcentage = taches.length === 0
        ? 0
        : Math.round((nombreTerminees / taches.length) * 100);

    remplissageProgression.style.width =
        pourcentage + "%";

    texteProgression.textContent =
        pourcentage + " % terminé";

    supprimerTerminees.disabled = nombreTerminees === 0;

}

// FILTRER LES TÂCHES

const boutonsFiltres = document.querySelectorAll(".filtre");

boutonsFiltres.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        filtreActuel = bouton.dataset.filtre;

        mettreAJourFiltres();

        afficherTaches();

    });

});

// METTRE À JOUR LES FILTRES

function mettreAJourFiltres() {

    boutonsFiltres.forEach(function(bouton) {

        bouton.classList.toggle(
            "actif",
            bouton.dataset.filtre === filtreActuel
        );

    });

}

// SUPPRIMER TOUTES LES TÂCHES TERMINÉES

supprimerTerminees.addEventListener("click", function() {

    taches = taches.filter(
        tache => !tache.terminee
    );

    sauvegarderTaches();

    afficherTaches();

});

// AFFICHER LA DATE DU JOUR

document.getElementById("date").textContent =
    new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

// AFFICHER L'ANNÉE

document.getElementById("annee").textContent =
    new Date().getFullYear();

// AFFICHAGE INITIAL

afficherTaches();
