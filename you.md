# Shop2You — Documentation du projet

## Vue d'ensemble

**Shop2You** est une application web de type marketplace & livraison (façon Uber Eats / Amazon), construite comme un prototype/démo. Elle gère trois profils d'utilisateurs différents avec chacun son propre tableau de bord :

- 👤 **User (Client)** — parcourt des produits, gère un panier, passe commande, consulte ses commandes.
- 🚗 **Delivery (Livreur)** — voit ses courses en cours, son historique, gère son véhicule.
- 🏪 **Provider (Vendeur)** — gère ses produits, ses factures, son profil boutique.

C'est une app **monolithique server-rendered** (pas de frontend séparé type React/Vue) : Express génère le HTML côté serveur avec le moteur de templates EJS.

## Stack technique

| Élément | Techno |
|---|---|
| Runtime | Node.js |
| Serveur web | [Express](https://expressjs.com/) 4.18 |
| Moteur de vues | [EJS](https://ejs.co/) 3.1 (fichiers `.ejs`) |
| Session / Auth | `express-session` (session en mémoire, cookie 24h) |
| Données | Mock data en mémoire (aucune base de données) |
| CSS | Feuille de style unique, écrite à la main (pas de framework CSS) |

Dépendances (`package.json`) : `express`, `express-session`, `ejs`.

Scripts :
- `npm start` → `node server.js`
- `npm run dev` → `nodemon server.js` (rechargement auto)

## Démarrage

```bash
npm install
npm start
```

Le serveur écoute sur `http://localhost:3000` (ou `process.env.PORT`).

### Comptes de démo (voir `data/mockData.js`)

| Rôle | Email | Mot de passe |
|---|---|---|
| Client | `user@shop2you.com` | `123456` |
| Livreur | `livreur@shop2you.com` | `123456` |
| Vendeur | `vendeur@shop2you.com` | `123456` |

## Architecture des fichiers

```
shop2you-app/
├── server.js              # Point d'entrée unique : toutes les routes Express
├── package.json
├── data/
│   └── mockData.js        # "Base de données" en mémoire : users[] et products[]
├── views/                 # Templates EJS
│   ├── auth/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   ├── user/
│   │   ├── dashboard.ejs
│   │   ├── orders.ejs
│   │   ├── checkout.ejs
│   │   ├── checkout-done.ejs
│   │   └── profile.ejs
│   ├── delivery/
│   │   ├── dashboard.ejs
│   │   ├── history.ejs
│   │   ├── vehicle.ejs
│   │   └── profile.ejs
│   ├── provider/
│   │   ├── dashboard.ejs
│   │   ├── invoices.ejs
│   │   └── profile.ejs
│   └── partials/
│       └── sidebar.ejs    # Navigation latérale, changeante selon le rôle
└── public/
    └── css/
        style.css          # Styles globaux (604 lignes)
```

> Note : le dossier `Shop2you/` à la racine est une copie plus ancienne du projet avec son propre dépôt git imbriqué (et un sous-dossier `Shopopop/`). Il ne fait pas partie de l'app active servie par `server.js` — c'est probablement un reliquat à nettoyer ou archiver. De même, un dossier au nom littéral `{public/{css,js,images},views/{user,delivery,provider,auth},routes,data}` traîne à la racine : c'est un artefact d'une commande `mkdir` mal interprétée (accolades non développées), sans contenu utile.

## Authentification

- Pas de JWT ni de base de données : les utilisateurs sont stockés dans un tableau en mémoire (`data/mockData.js`), donc **toute inscription est perdue au redémarrage du serveur**.
- `req.session.user` contient l'utilisateur connecté (objet complet, y compris le mot de passe en clair — à ne jamais faire en prod).
- Deux middlewares de garde dans `server.js` :
  - `requireAuth` — vérifie juste qu'un utilisateur est connecté.
  - `requireRole(role)` — vérifie que l'utilisateur connecté a le bon rôle, sinon redirige vers `/login`.
- À l'inscription (`POST /signup`), un nouvel utilisateur est poussé dans le tableau `users` avec un rôle par défaut `'user'`.

## Routes principales

### Auth
- `GET /` → redirige vers `/login`
- `GET /login`, `POST /login`
- `GET /signup`, `POST /signup`
- `GET /logout`

### Espace Client (`/user/*`, rôle `user`)
- `GET /user/dashboard` — liste des produits (`products` de mockData) + panier
- `GET /user/profile`
- `GET /user/orders` — historique de commandes (stocké sur l'objet `user`)
- `GET /user/checkout` — panier + total
- `POST /user/cart/add` — ajoute un produit au panier (stocké dans `req.session.cart`)
- `POST /user/cart/remove`
- `POST /user/checkout/confirm` — génère un `orderId` aléatoire, vide le panier
- `GET /user/checkout/done` — page de confirmation

### Espace Livreur (`/delivery/*`, rôle `delivery`)
- `GET /delivery/dashboard`, `/profile`, `/history`, `/vehicle`

### Espace Vendeur (`/provider/*`, rôle `provider`)
- `GET /provider/dashboard`, `/profile`, `/invoices`

Le **panier** vit uniquement en session (`req.session.cart`), donc il n'est pas persistant côté "base de données" et est propre à chaque session navigateur.

## Modèle de données (mock)

Défini dans `data/mockData.js`, deux tableaux exportés :

- **`users`** — chaque utilisateur a `id`, `role`, `email`, `password`, `name`, et des champs spécifiques au rôle :
  - `user` : `orders[]`, `cards[]`, `addresses[]`
  - `delivery` : `stats{}`, `vehicle{}`, `jobs[]` (courses en cours), `history[]`
  - `provider` : `shopName`, `products[]`, `invoices[]`
- **`products`** — catalogue global affiché aux clients (`id`, `name`, `price`, `category`, `image` (emoji), `rating`, `reviews`, `provider`, `description`)

Tout est statique/en dur : pas d'écriture persistante sauf en mémoire process (perdu au redémarrage).

## Interface

- La sidebar (`views/partials/sidebar.ejs`) adapte ses liens de navigation selon `user.role`, avec un menu burger responsive (`toggleSidebar()`) pour mobile.
- Les icônes utilisent des emojis plutôt qu'une librairie d'icônes.
- Style visuel via `public/css/style.css`, sans framework (pas de Bootstrap/Tailwind).
- Textes/labels en français (l'app cible un public francophone, ex. Lyon dans les données de démo).

## Limites connues / points à garder en tête

- **Aucune persistance réelle** : redémarrer le serveur réinitialise tous les comptes créés et commandes.
- **Sécurité** : mots de passe stockés et comparés en clair, secret de session en dur dans le code (`'shop2you-secret-key'`) — acceptable pour une démo, à corriger avant toute mise en production.
- **Pas de tests automatisés** repérés dans le projet.
- **Dossiers legacy** (`Shop2you/`, dossier à accolades) à la racine, non utilisés par le serveur actif — à nettoyer si besoin de clarifier l'arborescence.
