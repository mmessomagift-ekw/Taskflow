
# TaskFlow – Spécification du projet

## 1. Informations générales

- **Nom du projet :** TaskFlow
- **Type de projet :** Application web de gestion des tâches.
- **Domaine :** Développement web front-end.
- **Technologies :** HTML5, CSS3 et JavaScript.
- **Système de stockage :** LocalStorage.
- **Plateforme de déploiement :** GitHub Pages.

## 2. Description du projet

TaskFlow est une application web qui permet aux utilisateurs de créer, organiser, suivre et supprimer leurs tâches quotidiennes.

L'application possède une interface simple, moderne et facile à utiliser.

Elle permet de gérer les activités personnelles ou professionnelles sans nécessiter la création d'un compte utilisateur.

Les données sont sauvegardées directement dans le navigateur grâce à LocalStorage.

## 3. Objectifs du projet

Les principaux objectifs sont :

- Développer une application interactive de gestion des tâches.
- Maîtriser la structure d'une page web avec HTML.
- Appliquer des styles et créer une interface responsive avec CSS.
- Manipuler les éléments HTML avec JavaScript.
- Utiliser les événements JavaScript.
- Manipuler les tableaux et les objets.
- Comprendre le fonctionnement de LocalStorage.
- Apprendre à héberger une application avec GitHub Pages.

## 4. Besoins fonctionnels

### BF01 – Ajouter une tâche

L'utilisateur doit pouvoir :

- Saisir une nouvelle tâche dans un champ de texte.
- Ajouter la tâche à la liste avec un bouton.
- Ajouter une tâche en appuyant sur la touche Entrée.
- Empêcher l'ajout de tâches vides.

### BF02 – Terminer une tâche

L'utilisateur doit pouvoir :

- Marquer une tâche comme terminée.
- Modifier une tâche terminée pour la remettre en attente.
- Identifier visuellement les tâches terminées.

### BF03 – Supprimer une tâche

L'utilisateur doit pouvoir :

- Supprimer individuellement une tâche.
- Retirer immédiatement la tâche de la liste.
- Actualiser automatiquement les compteurs.

### BF04 – Filtrer les tâches

L'application doit proposer trois filtres :

- **Toutes :** afficher l'ensemble des tâches.
- **À faire :** afficher uniquement les tâches non terminées.
- **Terminées :** afficher uniquement les tâches terminées.

### BF05 – Supprimer les tâches terminées

L'utilisateur doit pouvoir supprimer toutes les tâches terminées en une seule action.

### BF06 – Sauvegarder les données

L'application doit :

- Enregistrer automatiquement les tâches dans LocalStorage.
- Récupérer les tâches lors du chargement de la page.
- Conserver les données après l'actualisation du navigateur.

### BF07 – Suivre la progression

L'application doit afficher :

- Le nombre total de tâches.
- Le nombre de tâches restantes.
- Le pourcentage de tâches terminées.
- Une barre de progression dynamique.

## 5. Besoins non fonctionnels

### Performance

- L'application doit se charger rapidement.
- Aucun framework JavaScript ne doit être utilisé.
- Le code doit rester simple et compréhensible.

### Ergonomie

- L'interface doit être intuitive.
- Les boutons doivent être facilement identifiables.
- Les interactions doivent être simples à comprendre.

### Adaptabilité

L'application doit être compatible avec :

- Les ordinateurs.
- Les tablettes.
- Les smartphones.

### Compatibilité

L'application doit fonctionner sur les navigateurs web modernes.

### Sécurité

Les textes saisis par l'utilisateur doivent être affichés comme du texte et non interprétés comme du code HTML.

## 6. Architecture technique

Le projet est organisé autour de trois fichiers principaux.

### 6.1 index.html

Ce fichier contient :

- La structure générale de l'application.
- Le formulaire d'ajout de tâches.
- Les boutons de filtrage.
- La liste des tâches.
- La barre de progression.
- Les compteurs.

### 6.2 style.css

Ce fichier gère :

- Les couleurs et les polices.
- La disposition des éléments.
- Le design des boutons.
- Les effets visuels.
- L'affichage responsive.

### 6.3 script.js

Ce fichier gère :

- L'ajout des tâches.
- L'affichage des tâches.
- La suppression des tâches.
- La validation des tâches.
- Le filtrage des tâches.
- La mise à jour des compteurs.
- La sauvegarde et la récupération des données.

## 7. Structure des données

Chaque tâche est représentée par un objet JavaScript contenant trois propriétés :

```javascript
{
    id: 123456,
    text: "Terminer mon devoir",
    completed: false
}
```

Description des propriétés :

- `id` : identifiant unique de la tâche.
- `text` : contenu de la tâche.
- `completed` : indique si la tâche est terminée ou non.

Les objets sont regroupés dans un tableau JavaScript.

Ce tableau est converti en format JSON avant d'être enregistré dans LocalStorage.

## 8. Interface utilisateur

L'application comprend les différentes sections suivantes :

1. **En-tête :** affiche le nom de l'application et la date du jour.
2. **Section de bienvenue :** présente l'objectif de l'application.
3. **Section des tâches :** permet d'ajouter et de gérer les tâches.
4. **Section des filtres :** permet de classer les tâches selon leur statut.
5. **Section de progression :** affiche l'avancement des tâches.
6. **Pied de page :** affiche les informations complémentaires.

## 9. Critères de validation

Le projet sera considéré comme fonctionnel si :

- Une nouvelle tâche peut être ajoutée.
- Une tâche peut être marquée comme terminée.
- Une tâche terminée peut être remise en attente.
- Une tâche peut être supprimée.
- Les filtres fonctionnent correctement.
- Les tâches terminées peuvent être supprimées en groupe.
- Les compteurs se mettent à jour automatiquement.
- La barre de progression reflète les tâches terminées.
- Les tâches restent enregistrées après actualisation.
- L'application fonctionne sur ordinateur et téléphone.
- L'application est accessible en ligne via GitHub Pages.

## 10. Limites du projet

La première version de TaskFlow présente certaines limites :

- Aucun système de connexion utilisateur.
- Aucune base de données distante.
- Aucune synchronisation entre plusieurs appareils.
- Les données sont conservées uniquement dans le navigateur utilisé.
- La suppression des données du navigateur peut entraîner la perte des tâches enregistrées.

## 11. Perspectives d'évolution

Les prochaines versions pourraient intégrer :

- Un mode sombre.
- Des dates d'échéance.
- Des niveaux de priorité.
- Des catégories personnalisées.
- Une fonction de recherche.
- La modification des tâches existantes.
- Un système de comptes utilisateurs.
- Une sauvegarde en ligne.

## 12. Conclusion

TaskFlow est une application de gestion des tâches développée avec HTML, CSS et JavaScript natif.

Ce projet permet de mettre en pratique les principales notions du développement web front-end, notamment la manipulation du DOM, la gestion des événements, les tableaux, les objets et le stockage local des données.

Il constitue une première étape dans la création d'applications web interactives et fonctionnelles.