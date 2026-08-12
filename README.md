# 🛍️ Shop2You

Marketplace & livraison — application web avec trois espaces (client, livreur, vendeur), construite avec Node.js, Express et EJS.

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou plus récent (inclut npm)

## Installation

```bash
git clone https://github.com/ZERTYYYY/App-Shop2you.git
cd App-Shop2you
npm install
```

## Lancer en local

```bash
npm start
```

L'application est accessible sur **http://localhost:3000**.

Pour un rechargement automatique pendant le développement, le script `dev` utilise `nodemon` — installez-le au préalable (il n'est pas listé dans les dépendances) :

```bash
npm install -g nodemon
npm run dev
```

Le port peut être changé via la variable d'environnement `PORT` :

```bash
PORT=4000 npm start
```

## Comptes de démo

Aucune inscription n'est nécessaire pour tester — les comptes suivants sont préchargés :

| Rôle | Email | Mot de passe |
|---|---|---|
| 👤 Client | `user@shop2you.com` | `123456` |
| 🚗 Livreur | `livreur@shop2you.com` | `123456` |
| 🏪 Vendeur | `vendeur@shop2you.com` | `123456` |

> Les données (utilisateurs, produits, commandes...) sont stockées en mémoire (`data/mockData.js`) : tout est réinitialisé au redémarrage du serveur, il n'y a pas de base de données.

## Stack

- [Express](https://expressjs.com/) — serveur web
- [EJS](https://ejs.co/) — moteur de templates (rendu côté serveur)
- [express-session](https://www.npmjs.com/package/express-session) — authentification par session

## Documentation

Pour une explication détaillée de l'architecture, des routes et du modèle de données, voir [you.md](you.md).
