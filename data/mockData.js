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
      { id: 1, name: 'Nike Air Max 270', price: 129.99, stock: 15, category: 'Chaussures', image: '👟', sales: 48 },
      { id: 2, name: 'Adidas Hoodie Classic', price: 59.99, stock: 8, category: 'Vêtements', image: '🧥', sales: 32 },
      { id: 3, name: 'Levi\'s 501 Jean', price: 89.99, stock: 20, category: 'Pantalons', image: '👖', sales: 67 },
      { id: 4, name: 'Jordan 1 Retro High', price: 179.99, stock: 3, category: 'Chaussures', image: '👟', sales: 12 },
      { id: 5, name: 'Casquette New Era', price: 34.99, stock: 25, category: 'Accessoires', image: '🧢', sales: 89 },
    ],
    invoices: [
      { id: 'INV-001', client: 'Suzanne Pertus', date: '2024-01-15', amount: 79.98, status: 'payée' },
      { id: 'INV-002', client: 'Alice Martin', date: '2024-01-12', amount: 129.99, status: 'payée' },
      { id: 'INV-003', client: 'Jean Dupont', date: '2024-01-10', amount: 45.50, status: 'en attente' },
      { id: 'INV-004', client: 'Marie Curie', date: '2024-01-08', amount: 89.99, status: 'payée' },
    ]
  }
];

const products = [
  { id: 1, name: 'Nike Air Max 270', price: 129.99, category: 'Chaussures', image: '👟', rating: 4.8, reviews: 124, provider: 'Fashion Lyon Store', description: 'Confort exceptionnel avec amorti Air Max.' },
  { id: 2, name: 'Adidas Hoodie Classic', price: 59.99, category: 'Vêtements', image: '🧥', rating: 4.5, reviews: 89, provider: 'Fashion Lyon Store', description: 'Sweat à capuche streetwear intemporel.' },
  { id: 3, name: 'Levi\'s 501 Jean', price: 89.99, category: 'Pantalons', image: '👖', rating: 4.7, reviews: 203, provider: 'Fashion Lyon Store', description: 'Le jean originel, classique depuis 1873.' },
  { id: 4, name: 'Jordan 1 Retro High', price: 179.99, category: 'Chaussures', image: '👟', rating: 4.9, reviews: 56, provider: 'Fashion Lyon Store', description: 'La sneaker qui a tout changé.' },
  { id: 5, name: 'Casquette New Era', price: 34.99, category: 'Accessoires', image: '🧢', rating: 4.3, reviews: 78, provider: 'Fashion Lyon Store', description: 'Style streetwear authentique.' },
  { id: 6, name: 'Puma RS-X', price: 99.99, category: 'Chaussures', image: '👟', rating: 4.4, reviews: 45, provider: 'SneakersPro', description: 'Design chunky moderne et coloré.' },
  { id: 7, name: 'Champion Crewneck', price: 49.99, category: 'Vêtements', image: '👕', rating: 4.6, reviews: 112, provider: 'UrbanWear', description: 'Sweatshirt coton premium.' },
  { id: 8, name: 'Vans Old Skool', price: 74.99, category: 'Chaussures', image: '👟', rating: 4.7, reviews: 167, provider: 'SneakersPro', description: 'La chaussure skate iconique depuis 1977.' },
];

module.exports = { users, products };
