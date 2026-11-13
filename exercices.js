
/*
========================================
TP JAVASCRIPT
Fonctions de manipulation de chaines,
tableaux et fonctions mathematiques
========================================
*/


// ========================================
// 1. FONCTIONS DE MANIPULATION DE CHAINES
// ========================================

// 1.1 Inverser une chaine de caracteres
function inverserChaine(chaine) {
    return chaine.split("").reverse().join("");
}

// Exemple
console.log("Chaine inversee :", inverserChaine("Bonjour"));


// 1.2 Compter le nombre de caracteres
function compterCaracteres(chaine) {
    return chaine.length;
}

// Exemple
console.log("Nombre de caracteres :", compterCaracteres("JavaScript"));


// 1.3 Mettre la premiere lettre de chaque mot en majuscule
function mettreEnMajuscule(phrase) {
    return phrase
        .toLowerCase()
        .split(" ")
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(" ");
}

// Exemple
console.log("Premieres lettres en majuscule :", 
    mettreEnMajuscule("bonjour tout le monde"));



// ========================================
// 2. FONCTIONS SUR LES TABLEAUX
// ========================================

// 2.1 Trouver le maximum d'un tableau
function trouverMaximum(tableau) {
    return Math.max(...tableau);
}

// 2.2 Trouver le minimum d'un tableau
function trouverMinimum(tableau) {
    return Math.min(...tableau);
}

// Exemple
let nombres = [12, 5, 30, 8, 2, 19];

console.log("Maximum :", trouverMaximum(nombres));
console.log("Minimum :", trouverMinimum(nombres));


// 2.3 Calculer la somme des elements d'un tableau
function sommeTableau(tableau) {
    return tableau.reduce((somme, nombre) => somme + nombre, 0);
}

// Exemple
console.log("Somme du tableau :", sommeTableau(nombres));


// 2.4 Filtrer les elements d'un tableau selon une condition
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}

// Exemple : afficher uniquement les nombres pairs
console.log("Nombres pairs :", 
    filtrerTableau(nombres, nombre => nombre % 2 === 0));



// ========================================
// 3. FONCTIONS MATHEMATIQUES
// ========================================

// 3.1 Calculer la factorielle d'un nombre
function factorielle(nombre) {
    if (!Number.isInteger(nombre) || nombre < 0) {
        return "Veuillez entrer un entier positif.";
    }

    let resultat = 1;

    for (let i = 1; i <= nombre; i++) {
        resultat *= i;
    }

    return resultat;
}

// Exemple
console.log("Factorielle de 5 :", factorielle(5));


// 3.2 Verifier si un nombre est premier
function estPremier(nombre) {
    if (!Number.isInteger(nombre) || nombre <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

// Exemples
console.log("7 est-il premier ?", estPremier(7));
console.log("10 est-il premier ?", estPremier(10));


// 3.3 Generer la suite de Fibonacci
function fibonacci(nombreTermes) {
    if (!Number.isInteger(nombreTermes) || nombreTermes < 0) {
        return "Veuillez entrer un entier positif.";
    }

    let suite = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < nombreTermes; i++) {
        suite.push(a);

        let suivant = a + b;
        a = b;
        b = suivant;
    }

    return suite;
}

// Exemple
console.log("Suite de Fibonacci :", fibonacci(10));


// ========================================
// FIN DU TP
// ========================================
