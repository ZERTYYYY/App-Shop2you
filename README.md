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

## Déploiement en ligne (démo gratuite)

L'app est prête pour un déploiement sur [Render](https://render.com) (offre gratuite, sans carte bancaire) grâce au fichier [`render.yaml`](render.yaml) inclus à la racine.

1. Crée un compte sur [render.com](https://render.com) (connexion possible avec GitHub).
2. Dans le dashboard, clique sur **New +** → **Blueprint**.
3. Sélectionne le repo `App-Shop2you`. Render détecte automatiquement `render.yaml` et propose un service web `shop2you` (plan Free, build `npm install`, start `npm start`).
4. Valide — Render génère aussi une variable `SESSION_SECRET` aléatoire automatiquement.
5. Au bout de quelques minutes, l'app est disponible sur une URL du type `https://shop2you.onrender.com`.

> ⚠️ Sur le plan gratuit, le service s'endort après 15 minutes d'inactivité. Le premier accès après une pause peut prendre 30-50 secondes le temps que Render redémarre le service — pense à "réveiller" l'URL quelques minutes avant ta démo.

> Comme les données sont en mémoire (`data/mockData.js`), chaque redémarrage du service (veille incluse) réinitialise les comptes créés et les commandes — les comptes de démo ci-dessus restent toujours disponibles.

## Stack

- [Express](https://expressjs.com/) — serveur web
- [EJS](https://ejs.co/) — moteur de templates (rendu côté serveur)
- [express-session](https://www.npmjs.com/package/express-session) — authentification par session

## Documentation

Pour une explication détaillée de l'architecture, des routes et du modèle de données, voir [you.md](you.md).
