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
3. Configurer l'environnement :
   - Copier `.env.example` dans `.env`.
   - Ajouter l'URL MongoDB.

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