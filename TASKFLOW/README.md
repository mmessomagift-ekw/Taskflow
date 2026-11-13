
# TaskFlow – Application de gestion des tâches

## 1. Présentation du projet

TaskFlow est une application web de gestion des tâches qui permet aux utilisateurs d'organiser leurs activités quotidiennes, de suivre leur progression et de mieux gérer leurs priorités.

Cette application a été développée uniquement avec HTML, CSS et JavaScript natif, sans utiliser de framework.

## 2. Objectifs du projet

L'objectif principal de ce projet est de créer une application simple, interactive et responsive permettant aux utilisateurs de gérer efficacement leurs tâches quotidiennes.

Ce projet permet également de mettre en pratique les connaissances acquises en développement web front-end.

## 3. Technologies utilisées

- **HTML5 :** création de la structure de l'application.
- **CSS3 :** mise en forme et design responsive.
- **JavaScript :** gestion des fonctionnalités et des interactions.
- **LocalStorage :** sauvegarde des tâches directement dans le navigateur.
- **GitHub :** gestion et hébergement du code source.
- **GitHub Pages :** déploiement de l'application en ligne.

## 4. Fonctionnalités principales

TaskFlow propose les fonctionnalités suivantes :

- Ajouter de nouvelles tâches.
- Marquer une tâche comme terminée.
- Supprimer une tâche individuellement.
- Afficher toutes les tâches.
- Filtrer les tâches selon leur statut :
  - Toutes les tâches.
  - Tâches à faire.
  - Tâches terminées.
- Supprimer toutes les tâches terminées.
- Afficher le nombre total de tâches.
- Afficher le nombre de tâches restantes.
- Visualiser le pourcentage de progression.
- Sauvegarder automatiquement les tâches avec LocalStorage.
- Utiliser l'application sur ordinateur, tablette et téléphone.

## 5. Structure du projet

```text
taskflow/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── SPEC.md
```

## 6. Installation et utilisation

Pour utiliser l'application en local :

1. Télécharger ou cloner le dépôt GitHub.
2. Ouvrir le dossier du projet.
3. Ouvrir le fichier `index.html` dans un navigateur.
4. Commencer à ajouter et gérer ses tâches.

Aucune installation supplémentaire n'est nécessaire.

## 7. Sauvegarde des données

L'application utilise LocalStorage pour enregistrer automatiquement les tâches dans le navigateur.

Cela permet de :
- Conserver les tâches après l'actualisation de la page.
- Retrouver les tâches lors d'une prochaine ouverture de l'application.
- Éviter de perdre les informations après la fermeture du navigateur.

**Remarque :** les données sont enregistrées uniquement sur l'appareil et dans le navigateur utilisé. Elles ne sont pas synchronisées entre plusieurs appareils.

## 8. Déploiement

L'application est destinée à être hébergée gratuitement avec GitHub Pages.

Les étapes de déploiement sont les suivantes :

1. Créer un dépôt sur GitHub.
2. Ajouter les fichiers du projet à la racine du dépôt.
3. Accéder aux paramètres du dépôt.
4. Sélectionner la rubrique « Pages ».
5. Choisir « Deploy from a branch ».
6. Sélectionner la branche `main` et le dossier `/ (root)`.
7. Enregistrer les modifications.

GitHub Pages générera ensuite un lien public permettant d'accéder à l'application.

## 9. Améliorations futures

Plusieurs fonctionnalités pourraient être ajoutées dans les prochaines versions :

- Ajouter un mode sombre.
- Définir des dates limites pour les tâches.
- Ajouter des niveaux de priorité.
- Modifier les tâches existantes.
- Ajouter une barre de recherche.
- Créer des catégories de tâches.
- Ajouter un système de comptes utilisateurs.

## 10. Informations sur le projet

**Nom du projet :** TaskFlow  
**Type :** Application web de gestion des tâches  
**Langages utilisés :** HTML, CSS et JavaScript  
**Stockage :** LocalStorage  
**Hébergement prévu :** GitHub Pages  

Projet réalisé dans le cadre d'un exercice pratique de développement web.