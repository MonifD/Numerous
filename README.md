# Numerous Game

## Description
Jeu multijoueur où les joueurs doivent deviner un nombre mystère.

## Prérequis
- Node.js installé
- MongoDB en cours d'exécution

## Installation
1. Cloner le projet :
   ```bash
   git clone <url-du-repo>
   cd numerous-game/server
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
## Lancer le projet
1. Démarrer le backend :
   ```bash
   npm start
   ```
2. Ouvrir `client/index.html` dans un navigateur.

## Jouer
- Créer une partie via l'API `/api/games/create`.
- Rejoindre une partie avec l'ID généré.
- Soumettre des nombres et visualiser les scores.

ajout des explication pas besoin d'un .env, ni de mongodb, j'ai essayer d'afficher le leaderbord et le score avec mongo, sauf que j' nai pas réussi donc j'ai du revenir a l'ancien code, mais pas supprimer, les codes de la configuration et models, ils snot présent mais pas utiliser.