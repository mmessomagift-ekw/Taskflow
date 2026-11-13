
document.addEventListener("DOMContentLoaded", function () {

    const listeProduits = document.querySelector(".list-products");
    const totalElement = document.querySelector(".total");

    // Fonction pour calculer le prix total
    function calculerPrixTotal() {
        let total = 0;

        const produits = listeProduits.querySelectorAll(":scope > .card-body");

        produits.forEach(function (produit) {
            const prix = parseFloat(
                produit.querySelector(".unit-price").textContent
            );

            const quantite = parseInt(
                produit.querySelector(".quantity").textContent
            );

            total += prix * quantite;
        });

        totalElement.textContent = total + " $";
    }

    // Sélectionner les produits
    const produits = document.querySelectorAll(
        ".list-products > .card-body"
    );

    produits.forEach(function (produit) {

        const boutonPlus = produit.querySelector(".fa-plus-circle");
        const boutonMoins = produit.querySelector(".fa-minus-circle");
        const boutonSupprimer = produit.querySelector(".fa-trash-alt");
        const boutonFavori = produit.querySelector(".fa-heart");

        const quantiteElement = produit.querySelector(".quantity");

        // Augmenter la quantité
        boutonPlus.addEventListener("click", function () {
            let quantite = parseInt(quantiteElement.textContent);
            quantite++;

            quantiteElement.textContent = quantite;

            calculerPrixTotal();
        });

        // Diminuer la quantité
        boutonMoins.addEventListener("click", function () {
            let quantite = parseInt(quantiteElement.textContent);

            if (quantite > 0) {
                quantite--;
            }

            quantiteElement.textContent = quantite;

            calculerPrixTotal();
        });

        // Supprimer un produit
        boutonSupprimer.addEventListener("click", function () {
            produit.remove();

            calculerPrixTotal();
        });

        // Ajouter ou retirer des favoris
        boutonFavori.addEventListener("click", function () {
            boutonFavori.classList.toggle("liked");
        });

    });

    // Calcul initial
    calculerPrixTotal();

});