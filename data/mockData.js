const users = [
  {
    id: 1, role: 'user', email: 'user@shop2you.com', password: '123456',
    name: 'Suzanne Pertus', phone: '+33 627 898 395', city: 'Lyon, France',
    address: '24 rue Grenette', gender: 'Female', avatar: null,
    orders: [
      { id: '#210403AS', date: '2024-01-15', status: 'delivered', total: 79.98, items: ['Nike Air Max', 'Adidas Hoodie'] },
      { id: '#210321BX', date: '2024-01-08', status: 'delivered', total: 45.50, items: ['Levi\'s Jean'] },
      { id: '#210289CZ', date: '2023-12-28', status: 'cancelled', total: 120.00, items: ['Jordan 1 Retro'] },
    ],
    cards: [{ name: 'Suzanne PERTUS', number: '1111 2222 3333 4444', expiry: '06/22', cvv: '046', type: 'visa' }],
    addresses: [
      { label: 'Home', address: '4043 Willis Avenue, TRAPPER CREEK, 99638' },
      { label: 'Work', address: '1923 Meadowbrook Mall Road, Gardena, CA, 90248' }
    ]
  },
  {
    id: 2, role: 'delivery', email: 'livreur@shop2you.com', password: '123456',
    name: 'Marc Dubois', phone: '+33 612 345 678', city: 'Lyon',
    address: '10 rue de la République', gender: 'Male', avatar: null,
    stats: { trips: 425, rating: 4.6, time: '20m' },
    vehicle: { type: 'Moto', brand: 'Honda', model: 'CBR 500', plate: 'AA-123-BB', color: 'Rouge' },
    jobs: [
      { id: '#DEL001', client: 'Alice Martin', address: '5 rue Bellecour, Lyon', amount: 12.50, status: 'en cours', time: '14:30' },
      { id: '#DEL002', client: 'Pierre Blanc', address: '22 av. Jean Jaurès, Lyon', amount: 8.00, status: 'en attente', time: '15:00' },
      { id: '#DEL003', client: 'Emma Petit', address: '8 pl. des Terreaux, Lyon', amount: 15.00, status: 'en attente', time: '15:45' },
    ],
    history: [
      { id: '#DEL099', client: 'Sophie R.', date: '2024-01-14', amount: 10.00, status: 'livré' },
      { id: '#DEL098', client: 'Jean M.', date: '2024-01-14', amount: 7.50, status: 'livré' },
      { id: '#DEL097', client: 'Lucie B.', date: '2024-01-13', amount: 13.00, status: 'livré' },
      { id: '#DEL096', client: 'Paul V.', date: '2024-01-13', amount: 9.00, status: 'annulé' },
    ]
  },
  {
    id: 3, role: 'provider', email: 'vendeur@shop2you.com', password: '123456',
    name: 'Suzanne Pertus', shopName: 'Fashion Lyon Store', phone: '+33 627 898 395',
    city: 'Lyon, France', address: '24 rue Grenette', gender: 'Female', avatar: null,
    products: [
      { id: 1, name: 'Nike Air Max 270', price: 129.99, stock: 15, category: 'Chaussures', sales: 48 },
      { id: 2, name: 'Adidas Hoodie Classic', price: 59.99, stock: 8, category: 'Vêtements', sales: 32 },
      { id: 3, name: 'Levi\'s 501 Jean', price: 89.99, stock: 20, category: 'Pantalons', sales: 67 },
      { id: 4, name: 'Jordan 1 Retro High', price: 179.99, stock: 3, category: 'Chaussures', sales: 12 },
      { id: 5, name: 'Casquette New Era', price: 34.99, stock: 25, category: 'Accessoires', sales: 89 },
    ],
    invoices: [
      { id: 'INV-001', client: 'Suzanne Pertus', date: '2024-01-15', amount: 79.98, status: 'payée' },
      { id: 'INV-002', client: 'Alice Martin', date: '2024-01-12', amount: 129.99, status: 'payée' },
      { id: 'INV-003', client: 'Jean Dupont', date: '2024-01-10', amount: 45.50, status: 'en attente' },
      { id: 'INV-004', client: 'Marie Curie', date: '2024-01-08', amount: 89.99, status: 'payée' },
    ]
  }
];

// ─── CATEGORIES ──────────────────────────────────────────────────────
const categories = [
  { id: 'tout', label: 'Tout' },
  { id: 'alimentaire', label: 'Alimentaire' },
  { id: 'restauration', label: 'Restauration' },
  { id: 'cosmetique', label: 'Cosmétique' },
  { id: 'mode', label: 'Mode' },
];

// ─── STORES ──────────────────────────────────────────────────────────
// `logo` = vrai logo de l'enseigne (SVG téléchargé depuis Wikimedia Commons,
// sous licence libre ou trop simple pour être protégé par le droit d'auteur).
// Ce sont malgré tout des marques déposées : affichées ici à titre
// d'identification (usage nominatif), pas en tant que partenaires officiels.
// Les enseignes fictives (sans `logo`) retombent sur un badge initiales/couleur.
const stores = [
  { id: 1, name: 'Carrefour', category: 'alimentaire', logo: '/images/stores/carrefour.svg', initials: 'CA', color: '#0F5FA8', rating: 4.4, time: '25-35 min' },
  { id: 2, name: 'Leclerc', category: 'alimentaire', logo: '/images/stores/leclerc.svg', initials: 'LE', color: '#1E6FD9', rating: 4.3, time: '30-40 min' },
  { id: 3, name: 'Auchan', category: 'alimentaire', logo: '/images/stores/auchan.svg', initials: 'AU', color: '#C1272D', rating: 4.2, time: '25-35 min' },
  { id: 4, name: 'Lidl', category: 'alimentaire', logo: '/images/stores/lidl.svg', initials: 'LI', color: '#0F5FA8', rating: 4.5, time: '20-30 min' },

  { id: 5, name: "Burger's", category: 'restauration', initials: 'BU', color: '#9C3F1F', rating: 4.3, time: '15-25 min' },
  { id: 6, name: "McDonald's", category: 'restauration', logo: '/images/stores/mcdonalds.svg', initials: 'MC', color: '#C1272D', rating: 4.1, time: '15-25 min' },
  { id: 7, name: 'Burger King', category: 'restauration', logo: '/images/stores/burgerking.svg', initials: 'BK', color: '#C1552E', rating: 4.2, time: '20-30 min' },
  { id: 8, name: 'Rôtisserie du Poulet', category: 'restauration', initials: 'RP', color: '#B8862E', rating: 4.6, time: '25-35 min' },
  { id: 9, name: 'Boulangerie Paul', category: 'restauration', initials: 'PA', color: '#8A6A3B', rating: 4.7, time: '15-20 min' },

  { id: 10, name: 'Sephora', category: 'cosmetique', logo: '/images/stores/sephora.svg', initials: 'SE', color: '#211D1A', rating: 4.6, time: '30-40 min' },
  { id: 11, name: 'Yves Rocher', category: 'cosmetique', logo: '/images/stores/yvesrocher.svg', initials: 'YR', color: '#3F7D58', rating: 4.5, time: '30-40 min' },
  { id: 12, name: 'Marionnaud', category: 'cosmetique', logo: '/images/stores/marionnaud.svg', initials: 'MA', color: '#8B3A5E', rating: 4.4, time: '30-40 min' },

  { id: 13, name: 'Fashion Lyon Store', category: 'mode', initials: 'FL', color: '#C1552E', rating: 4.8, time: '35-45 min' },
  { id: 14, name: 'SneakersPro', category: 'mode', initials: 'SP', color: '#211D1A', rating: 4.6, time: '35-45 min' },
  { id: 15, name: 'UrbanWear', category: 'mode', initials: 'UW', color: '#3A332D', rating: 4.5, time: '35-45 min' },
];

// ─── PRODUCTS (catalogue global, chaque item rattaché à un magasin) ──
const products = [
  // Fashion Lyon Store (mode)
  { id: 1, storeId: 13, name: 'Nike Air Max 270', price: 129.99, category: 'Chaussures', rating: 4.8, reviews: 124, provider: 'Fashion Lyon Store', description: 'Confort exceptionnel avec amorti Air Max.' },
  { id: 2, storeId: 13, name: 'Adidas Hoodie Classic', price: 59.99, category: 'Vêtements', rating: 4.5, reviews: 89, provider: 'Fashion Lyon Store', description: 'Sweat à capuche streetwear intemporel.' },
  { id: 3, storeId: 13, name: 'Levi\'s 501 Jean', price: 89.99, category: 'Pantalons', rating: 4.7, reviews: 203, provider: 'Fashion Lyon Store', description: 'Le jean originel, classique depuis 1873.' },
  { id: 4, storeId: 13, name: 'Jordan 1 Retro High', price: 179.99, category: 'Chaussures', rating: 4.9, reviews: 56, provider: 'Fashion Lyon Store', description: 'La sneaker qui a tout changé.' },
  { id: 5, storeId: 13, name: 'Casquette New Era', price: 34.99, category: 'Accessoires', rating: 4.3, reviews: 78, provider: 'Fashion Lyon Store', description: 'Style streetwear authentique.' },
  // SneakersPro (mode)
  { id: 6, storeId: 14, name: 'Puma RS-X', price: 99.99, category: 'Chaussures', rating: 4.4, reviews: 45, provider: 'SneakersPro', description: 'Design chunky moderne et coloré.' },
  { id: 8, storeId: 14, name: 'Vans Old Skool', price: 74.99, category: 'Chaussures', rating: 4.7, reviews: 167, provider: 'SneakersPro', description: 'La chaussure skate iconique depuis 1977.' },
  // UrbanWear (mode)
  { id: 7, storeId: 15, name: 'Champion Crewneck', price: 49.99, category: 'Vêtements', rating: 4.6, reviews: 112, provider: 'UrbanWear', description: 'Sweatshirt coton premium.' },

  // Carrefour (alimentaire)
  { id: 9, storeId: 1, name: 'Pack Eau Minérale 6x1.5L', price: 3.50, category: 'Boissons', rating: 4.6, reviews: 210, provider: 'Carrefour', description: 'Eau minérale naturelle, lot de 6 bouteilles.' },
  { id: 10, storeId: 1, name: 'Riz Basmati 1kg', price: 2.90, category: 'Épicerie', rating: 4.5, reviews: 98, provider: 'Carrefour', description: 'Riz basmati long grain parfumé.' },
  { id: 11, storeId: 1, name: 'Lait Demi-Écrémé 1L', price: 1.20, category: 'Frais', rating: 4.4, reviews: 156, provider: 'Carrefour', description: 'Lait demi-écrémé UHT.' },
  { id: 12, storeId: 1, name: 'Œufs Frais x12', price: 3.10, category: 'Frais', rating: 4.7, reviews: 132, provider: 'Carrefour', description: 'Œufs frais de poules élevées au sol.' },

  // Leclerc (alimentaire)
  { id: 13, storeId: 2, name: 'Pâtes Penne 500g', price: 1.10, category: 'Épicerie', rating: 4.3, reviews: 87, provider: 'Leclerc', description: 'Pâtes de semoule de blé dur.' },
  { id: 14, storeId: 2, name: "Huile d'Olive Vierge 1L", price: 6.90, category: 'Épicerie', rating: 4.6, reviews: 64, provider: 'Leclerc', description: "Huile d'olive vierge extra première pression." },
  { id: 15, storeId: 2, name: 'Yaourts Nature x8', price: 2.40, category: 'Frais', rating: 4.4, reviews: 73, provider: 'Leclerc', description: 'Yaourts natures au lait entier.' },
  { id: 16, storeId: 2, name: 'Café Moulu 250g', price: 4.50, category: 'Épicerie', rating: 4.5, reviews: 145, provider: 'Leclerc', description: 'Café moulu 100% arabica.' },

  // Auchan (alimentaire)
  { id: 17, storeId: 3, name: 'Farine T55 1kg', price: 1.30, category: 'Épicerie', rating: 4.2, reviews: 52, provider: 'Auchan', description: 'Farine de blé tendre pour pâtisserie.' },
  { id: 18, storeId: 3, name: 'Sucre en Poudre 1kg', price: 1.60, category: 'Épicerie', rating: 4.3, reviews: 61, provider: 'Auchan', description: 'Sucre blanc cristallisé.' },
  { id: 19, storeId: 3, name: 'Beurre Doux 250g', price: 2.20, category: 'Frais', rating: 4.5, reviews: 88, provider: 'Auchan', description: 'Beurre doux moulé, 82% MG.' },
  { id: 20, storeId: 3, name: "Jus d'Orange 1L", price: 2.00, category: 'Boissons', rating: 4.4, reviews: 76, provider: 'Auchan', description: "Pur jus d'orange sans sucres ajoutés." },

  // Lidl (alimentaire)
  { id: 21, storeId: 4, name: 'Chips Nature 150g', price: 1.40, category: 'Épicerie', rating: 4.3, reviews: 94, provider: 'Lidl', description: 'Chips croustillantes légèrement salées.' },
  { id: 22, storeId: 4, name: 'Chocolat Noir 100g', price: 1.50, category: 'Épicerie', rating: 4.7, reviews: 121, provider: 'Lidl', description: 'Tablette de chocolat noir 70%.' },
  { id: 23, storeId: 4, name: 'Bananes 1kg', price: 1.80, category: 'Frais', rating: 4.5, reviews: 68, provider: 'Lidl', description: 'Bananes fraîches origine Antilles.' },
  { id: 24, storeId: 4, name: 'Fromage Râpé 200g', price: 2.10, category: 'Frais', rating: 4.4, reviews: 79, provider: 'Lidl', description: 'Emmental râpé, sachet refermable.' },

  // Burger's (restauration)
  { id: 25, storeId: 5, name: 'Menu Classic Burger', price: 8.90, category: 'Menu', rating: 4.4, reviews: 312, provider: "Burger's", description: 'Burger, frites et boisson.' },
  { id: 26, storeId: 5, name: 'Cheeseburger Double', price: 6.50, category: 'Burger', rating: 4.3, reviews: 187, provider: "Burger's", description: 'Double steak, double cheddar.' },
  { id: 27, storeId: 5, name: 'Frites Maison', price: 3.00, category: 'Accompagnement', rating: 4.5, reviews: 220, provider: "Burger's", description: 'Frites fraîches coupées maison.' },
  { id: 28, storeId: 5, name: 'Milkshake Vanille', price: 4.20, category: 'Boisson', rating: 4.6, reviews: 96, provider: "Burger's", description: 'Milkshake onctueux à la vanille.' },

  // McDonald's (restauration)
  { id: 29, storeId: 6, name: 'Big Mac', price: 5.90, category: 'Burger', rating: 4.3, reviews: 540, provider: "McDonald's", description: 'Le burger emblématique, deux steaks.' },
  { id: 30, storeId: 6, name: 'McChicken', price: 4.50, category: 'Burger', rating: 4.2, reviews: 298, provider: "McDonald's", description: 'Burger au poulet croustillant.' },
  { id: 31, storeId: 6, name: 'Menu Best Of', price: 9.90, category: 'Menu', rating: 4.4, reviews: 410, provider: "McDonald's", description: 'Burger au choix, frites et boisson.' },
  { id: 32, storeId: 6, name: 'Sundae Caramel', price: 2.50, category: 'Dessert', rating: 4.6, reviews: 176, provider: "McDonald's", description: 'Glace vanille nappée de caramel.' },

  // Burger King (restauration)
  { id: 33, storeId: 7, name: 'Whopper', price: 6.20, category: 'Burger', rating: 4.4, reviews: 402, provider: 'Burger King', description: 'Steak grillé à la flamme, recette originale.' },
  { id: 34, storeId: 7, name: 'Menu Long Chicken', price: 8.50, category: 'Menu', rating: 4.3, reviews: 214, provider: 'Burger King', description: 'Sandwich poulet pané, frites et boisson.' },
  { id: 35, storeId: 7, name: 'Onion Rings', price: 3.20, category: 'Accompagnement', rating: 4.5, reviews: 158, provider: 'Burger King', description: 'Rondelles d\'oignon panées croustillantes.' },
  { id: 36, storeId: 7, name: 'Coca-Cola 33cl', price: 2.00, category: 'Boisson', rating: 4.5, reviews: 301, provider: 'Burger King', description: 'Canette fraîche 33cl.' },

  // Rôtisserie du Poulet (restauration)
  { id: 37, storeId: 8, name: 'Poulet Rôti Entier', price: 9.50, category: 'Plat', rating: 4.8, reviews: 267, provider: 'Rôtisserie du Poulet', description: 'Poulet fermier rôti à la broche.' },
  { id: 38, storeId: 8, name: 'Demi Poulet + Frites', price: 6.90, category: 'Plat', rating: 4.7, reviews: 189, provider: 'Rôtisserie du Poulet', description: 'Demi poulet rôti accompagné de frites.' },
  { id: 39, storeId: 8, name: 'Brochettes de Poulet x4', price: 7.50, category: 'Plat', rating: 4.6, reviews: 112, provider: 'Rôtisserie du Poulet', description: 'Brochettes marinées grillées.' },
  { id: 40, storeId: 8, name: 'Salade Coleslaw', price: 2.80, category: 'Accompagnement', rating: 4.3, reviews: 74, provider: 'Rôtisserie du Poulet', description: 'Salade de chou croquante, sauce maison.' },

  // Boulangerie Paul (restauration)
  { id: 41, storeId: 9, name: 'Baguette Tradition', price: 1.20, category: 'Pain', rating: 4.7, reviews: 340, provider: 'Boulangerie Paul', description: 'Baguette tradition française, croûte croustillante.' },
  { id: 42, storeId: 9, name: 'Croissant Beurre', price: 1.30, category: 'Viennoiserie', rating: 4.8, reviews: 289, provider: 'Boulangerie Paul', description: 'Croissant pur beurre feuilleté.' },
  { id: 43, storeId: 9, name: 'Pain au Chocolat', price: 1.40, category: 'Viennoiserie', rating: 4.7, reviews: 251, provider: 'Boulangerie Paul', description: 'Viennoiserie feuilletée, deux barres de chocolat.' },
  { id: 44, storeId: 9, name: 'Sandwich Jambon Beurre', price: 4.50, category: 'Sandwich', rating: 4.5, reviews: 143, provider: 'Boulangerie Paul', description: 'Baguette, jambon blanc, beurre demi-sel.' },

  // Sephora (cosmétique)
  { id: 45, storeId: 10, name: 'Crème Hydratante Visage', price: 24.90, category: 'Soin', rating: 4.6, reviews: 156, provider: 'Sephora', description: 'Crème hydratante 24h toutes peaux.' },
  { id: 46, storeId: 10, name: 'Parfum Eau de Toilette 50ml', price: 39.00, category: 'Parfum', rating: 4.7, reviews: 98, provider: 'Sephora', description: 'Eau de toilette florale et boisée.' },
  { id: 47, storeId: 10, name: 'Palette Maquillage', price: 29.90, category: 'Maquillage', rating: 4.5, reviews: 121, provider: 'Sephora', description: 'Palette 12 teintes fards à paupières.' },
  { id: 48, storeId: 10, name: 'Vernis à Ongles', price: 8.50, category: 'Maquillage', rating: 4.4, reviews: 87, provider: 'Sephora', description: 'Vernis longue tenue haute brillance.' },

  // Yves Rocher (cosmétique)
  { id: 49, storeId: 11, name: 'Huile Végétale Bio', price: 12.90, category: 'Soin', rating: 4.6, reviews: 74, provider: 'Yves Rocher', description: 'Huile végétale bio nourrissante.' },
  { id: 50, storeId: 11, name: 'Gel Douche Nature', price: 5.90, category: 'Soin', rating: 4.5, reviews: 112, provider: 'Yves Rocher', description: 'Gel douche aux extraits de plantes.' },
  { id: 51, storeId: 11, name: 'Rouge à Lèvres', price: 9.90, category: 'Maquillage', rating: 4.4, reviews: 65, provider: 'Yves Rocher', description: 'Rouge à lèvres nourrissant longue tenue.' },
  { id: 52, storeId: 11, name: 'Crème Mains Karité', price: 4.90, category: 'Soin', rating: 4.7, reviews: 143, provider: 'Yves Rocher', description: 'Crème mains au beurre de karité.' },

  // Marionnaud (cosmétique)
  { id: 53, storeId: 12, name: 'Coffret Parfum Homme', price: 49.00, category: 'Parfum', rating: 4.6, reviews: 58, provider: 'Marionnaud', description: 'Coffret eau de toilette et gel douche.' },
  { id: 54, storeId: 12, name: 'Shampoing Réparateur', price: 7.90, category: 'Soin', rating: 4.3, reviews: 91, provider: 'Marionnaud', description: 'Shampoing réparateur cheveux abîmés.' },
  { id: 55, storeId: 12, name: 'Mascara Volume', price: 11.90, category: 'Maquillage', rating: 4.5, reviews: 104, provider: 'Marionnaud', description: 'Mascara volume intense longue tenue.' },
  { id: 56, storeId: 12, name: 'Trousse de Maquillage', price: 14.90, category: 'Accessoire', rating: 4.4, reviews: 47, provider: 'Marionnaud', description: 'Trousse compacte pour le maquillage.' },
];

module.exports = { users, products, stores, categories };
