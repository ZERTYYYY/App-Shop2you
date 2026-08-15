# Shop2You — Documentation du projet

## Vue d'ensemble

**Shop2You** est une application web de type marketplace & livraison multi-catégories (façon Glovo), construite comme un prototype/démo. Elle gère trois profils d'utilisateurs différents avec chacun son propre tableau de bord :

- 👤 **User (Client)** — parcourt des magasins par catégorie (Tout, Alimentaire, Restauration, Cosmétique, Mode), consulte les produits d'un magasin, gère un panier, passe commande, consulte ses commandes.
- 🚗 **Delivery (Livreur)** — voit ses courses en cours, son historique, gère son véhicule.
- 🏪 **Provider (Vendeur)** — gère ses produits, ses factures, son profil boutique.

> Les enseignes (Carrefour, Leclerc, McDonald's, Sephora...) sont des noms réels utilisés à titre d'exemple pour la démo. 9 d'entre elles affichent leur vrai logo (SVG récupéré sur Wikimedia Commons, sous licence libre ou trop simple pour être protégé par le droit d'auteur) ; les enseignes fictives et celles dont le logo réel n'était disponible qu'en usage non-libre affichent un badge généré (initiales + couleur). Ce sont malgré tout des marques déposées, affichées à titre d'identification (usage nominatif comme le font les vraies apps de livraison), pas comme partenariats officiels — voir la section Interface.

C'est une app **monolithique server-rendered** (pas de frontend séparé type React/Vue) : Express génère le HTML côté serveur avec le moteur de templates EJS.

## Stack technique

| Élément | Techno |
|---|---|
| Runtime | Node.js |
| Serveur web | [Express](https://expressjs.com/) 4.18 |
| Moteur de vues | [EJS](https://ejs.co/) 3.1 (fichiers `.ejs`) |
| Session / Auth | `express-session` (session en mémoire, cookie 24h) |
| Données | Mock data en mémoire (aucune base de données) |
| CSS | [Tailwind CSS](https://tailwindcss.com/) 3, compilé via la Tailwind CLI (pas de CDN) vers `public/css/style.css` |

Dépendances (`package.json`) : `express`, `express-session`, `ejs`. Dev dependency : `tailwindcss`.

Scripts :
- `npm start` → reconstruit le CSS (`prestart`) puis `node server.js`
- `npm run dev` → reconstruit le CSS (`predev`) puis `nodemon server.js` (rechargement auto)
- `npm run build:css` → compile `src/tailwind.css` vers `public/css/style.css` (minifié)
- `npm run watch:css` → recompile en continu pendant qu'on édite le design

`public/css/style.css` est un **fichier généré**, ignoré par git (`.gitignore`) — ne pas l'éditer à la main, il est écrasé à chaque build.

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
├── tailwind.config.js     # Palette, polices, contenu scanné (views/**/*.ejs)
├── src/
│   └── tailwind.css       # Source Tailwind (@tailwind + composants @layer)
├── lib/
│   └── icons.js            # Petit set d'icônes SVG inline, exposé aux vues via app.locals.icon
├── data/
│   └── mockData.js        # "Base de données" en mémoire : users[] et products[]
├── views/                 # Templates EJS
│   ├── settings.ejs        # Page Paramètres (commune aux 3 rôles)
│   ├── privacy.ejs         # Page Confidentialité (commune aux 3 rôles)
│   ├── auth/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   ├── user/
│   │   ├── dashboard.ejs       # Grille de magasins + filtre par catégorie
│   │   ├── store.ejs           # Produits d'un magasin donné
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
│       ├── head.ejs        # <head> commun (fonts, lien CSS), inclus par chaque page avec { title }
│       ├── sidebar.ejs     # Navigation latérale, changeante selon le rôle
│       └── cart-panel.ejs  # Panneau panier + JS (add/remove/render), partagé dashboard + store
└── public/
    ├── css/
    │   └── style.css          # Généré par Tailwind — ne pas éditer directement
    └── images/
        ├── logo-icon.png       # Icône Shop2You (fournie par l'utilisateur, fond transparent)
        ├── logo-full.png       # Logo complet + wordmark (non utilisé dans l'UI actuellement)
        ├── favicon.png
        └── stores/             # Vrais logos d'enseignes (voir note licence ci-dessus)
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
- `GET /user/dashboard` — grille de magasins (`stores`), filtrable par catégorie (`categories`) et recherche par nom, + panier
- `GET /user/store/:id` — produits d'un magasin (`products.filter(p => p.storeId === store.id)`) ; redirige vers le dashboard si l'id n'existe pas
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

### Communes (tout rôle connecté)
- `GET /settings` — page Paramètres
- `GET /privacy` — page Confidentialité

Le **panier** vit uniquement en session (`req.session.cart`), donc il n'est pas persistant côté "base de données" et est propre à chaque session navigateur.

## Modèle de données (mock)

Défini dans `data/mockData.js`, quatre exports :

- **`users`** — chaque utilisateur a `id`, `role`, `email`, `password`, `name`, et des champs spécifiques au rôle :
  - `user` : `orders[]`, `cards[]`, `addresses[]`
  - `delivery` : `stats{}`, `vehicle{}`, `jobs[]` (courses en cours), `history[]`
  - `provider` : `shopName`, `products[]`, `invoices[]` — **catalogue distinct** de son propre inventaire (dashboard vendeur), sans lien avec `products` ci-dessous
- **`categories`** — `{ id, label }`, ex. `{ id: 'alimentaire', label: 'Alimentaire' }`, utilisées pour les onglets de filtre du dashboard client
- **`stores`** — les enseignes/magasins : `{ id, name, category, initials, color, rating, time, logo? }`. `logo` (optionnel) pointe vers un vrai fichier SVG dans `public/images/stores/` ; sans ce champ, l'UI retombe sur un badge généré (`initials`/`color`)
- **`products`** — catalogue global affiché aux clients, chaque produit rattaché à un magasin via `storeId` : `{ id, storeId, name, price, category, image (emoji), rating, reviews, provider, description }`

Tout est statique/en dur : pas d'écriture persistante sauf en mémoire process (perdu au redémarrage). Le panier référence directement les objets de `products` par `id`, donc les identifiants doivent rester uniques sur l'ensemble du catalogue (tous magasins confondus).

## Interface

- **Design system Tailwind, style glassmorphism vif** : palette définie dans `tailwind.config.js` (crème `cream`, encre `ink`, accent orange-corail `accent`, violet `pop`, + `success`/`warning`/`danger` en versions saturées). Le `body` a un fond en dégradé multicolore (plusieurs `radial-gradient` superposés dans `src/tailwind.css` `@layer base`) qui **dérive doucement en continu** (`animate-gradientPan`, ~16s, boucle infinie) ; toutes les surfaces (`.card`, `.glass-panel`, sidebar, inputs, boutons outline...) sont semi-transparentes + `backdrop-blur` + bordure claire fine, pour laisser transparaître ce dégradé. Typo mixte : `Fraunces` (serif, titres) + `Inter` (sans-serif, corps de texte), chargées via Google Fonts dans `views/partials/head.ejs`.
- **Animations** (`tailwind.config.js` → `theme.extend.{keyframes,animation}`) : `.card` apparaît en fondu+glissement à chaque chargement de page (`animate-fadeInUp`) ; boutons avec retour tactile au clic (`active:scale-95`) et légère élévation au survol ; `.btn-accent` est un dégradé `accent → pop` qui glisse au survol ; `.card-hover` (cartes produits, stats) se soulève + s'éclaircit au survol, et son icône grossit via `group`/`group-hover`; le compteur du panier fait un petit "bump" (`animate-bump`, déclenché en JS dans `cart-panel.ejs`) à chaque ajout/retrait.
- Les composants récurrents (`.card`, `.btn-*`, `.badge-*`, `.input`, `.nav-link`, tables...) sont définis une fois dans `src/tailwind.css` via `@layer components`, puis réutilisés dans les vues — évite de dupliquer des dizaines de classes utilitaires partout. Changer l'ambiance générale de l'app se fait donc surtout dans ce seul fichier + `tailwind.config.js`.
- **Icônes** : petit set SVG inline maison (`lib/icons.js`, exposé comme `icon()` dans toutes les vues via `app.locals.icon`). Aucun emoji dans l'app : les images produits (autrefois des emojis) sont un monogramme généré (initiale du nom sur fond coloré), voir `p.name.charAt(0)` dans les vues concernées.
- La sidebar (`views/partials/sidebar.ejs`) est un panneau de verre sombre (`bg-ink/75 backdrop-blur-2xl`), adapte ses liens selon `user.role`, et devient un panneau off-canvas sur mobile (`toggleSidebar()`, bouton `.menu-toggle` fixe).
- Textes/labels en français (l'app cible un public francophone, ex. Lyon dans les données de démo).
- **Logos d'enseignes** (`public/images/stores/*.svg`) : téléchargés depuis Wikimedia Commons pour 9 magasins (Carrefour, Leclerc, Auchan, Lidl, McDonald's, Burger King, Sephora, Yves Rocher, Marionnaud) — fichiers librement réutilisables sur le plan du droit d'auteur (licence libre ou logo trop simple pour être protégé), mais ce sont **toujours des marques déposées** : les afficher reste un usage nominatif (identifier l'enseigne), pas un partenariat officiel, à garder en tête si le projet doit un jour devenir public/commercial. Les enseignes fictives et celles sans logo librement réutilisable (Burger's, Rôtisserie du Poulet, Boulangerie Paul, les 3 boutiques Mode) utilisent le badge généré.

## Limites connues / points à garder en tête

- **Aucune persistance réelle** : redémarrer le serveur réinitialise tous les comptes créés et commandes.
- **Sécurité** : mots de passe stockés et comparés en clair, secret de session en dur dans le code (`'shop2you-secret-key'`) — acceptable pour une démo, à corriger avant toute mise en production.
- **Pas de tests automatisés** repérés dans le projet.
- **Dossiers legacy** (`Shop2you/`, dossier à accolades) à la racine, non utilisés par le serveur actif — à nettoyer si besoin de clarifier l'arborescence.
