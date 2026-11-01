// Three categories with six unique houseplants each (18 plants total).
// The artwork is bundled locally in public/images, so images work without an image API.
export const categories = [
  { id: 'easy-care', name: 'Easy Care', description: 'Low-maintenance favorites for busy plant lovers.' },
  { id: 'statement', name: 'Statement Plants', description: 'Big personality, beautiful foliage.' },
  { id: 'air-purifying', name: 'Air Purifying', description: 'Fresh greenery for every room.' },
];

export const plants = [
  { id: 'snake-plant', name: 'Snake Plant', botanical: 'Sansevieria trifasciata', category: 'easy-care', price: 24, light: 'Low to bright indirect', water: 'Every 2–3 weeks', badge: 'BESTSELLER', image: '/images/snake-plant.svg', description: 'Architectural leaves and an easygoing nature make this a timeless favorite.' },
  { id: 'pothos', name: 'Golden Pothos', botanical: 'Epipremnum aureum', category: 'easy-care', price: 19, light: 'Low to medium indirect', water: 'Weekly', badge: 'BEGINNER FRIENDLY', image: '/images/pothos.svg', description: 'Trailing heart-shaped leaves add softness to shelves and hanging planters.' },
  { id: 'zz-plant', name: 'ZZ Plant', botanical: 'Zamioculcas zamiifolia', category: 'easy-care', price: 28, light: 'Low to medium indirect', water: 'Every 2–3 weeks', badge: '', image: '/images/zz-plant.svg', description: 'Glossy green stems that thrive even when life gets busy.' },
  { id: 'jade-plant', name: 'Jade Plant', botanical: 'Crassula ovata', category: 'easy-care', price: 22, light: 'Bright indirect', water: 'Every 2 weeks', badge: '', image: '/images/jade-plant.svg', description: 'A cheerful succulent with plump leaves and a sculptural silhouette.' },
  { id: 'aloe-vera', name: 'Aloe Vera', botanical: 'Aloe barbadensis', category: 'easy-care', price: 18, light: 'Bright indirect', water: 'Every 2–3 weeks', badge: '', image: '/images/aloe-vera.svg', description: 'A sun-loving succulent with upright, textured foliage.' },
  { id: 'peperomia', name: 'Peperomia', botanical: 'Peperomia obtusifolia', category: 'easy-care', price: 21, light: 'Medium indirect', water: 'Every 1–2 weeks', badge: '', image: '/images/peperomia.svg', description: 'Compact, glossy leaves make a lovely desk or windowsill companion.' },
  { id: 'monstera', name: 'Monstera Deliciosa', botanical: 'Monstera deliciosa', category: 'statement', price: 48, light: 'Bright indirect', water: 'Weekly', badge: 'POPULAR', image: '/images/monstera.svg', description: 'Dramatic split leaves bring a tropical feeling to your space.' },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', botanical: 'Ficus lyrata', category: 'statement', price: 65, light: 'Bright indirect', water: 'Weekly', badge: '', image: '/images/fiddle-leaf.svg', description: 'A bold, tree-like plant with beautiful violin-shaped leaves.' },
  { id: 'bird-of-paradise', name: 'Bird of Paradise', botanical: 'Strelitzia nicolai', category: 'statement', price: 58, light: 'Bright indirect to direct', water: 'Weekly', badge: '', image: '/images/bird-of-paradise.svg', description: 'Large, elegant leaves give any corner a resort-like feel.' },
  { id: 'rubber-plant', name: 'Rubber Plant', botanical: 'Ficus elastica', category: 'statement', price: 39, light: 'Medium to bright indirect', water: 'Every 1–2 weeks', badge: '', image: '/images/rubber-plant.svg', description: 'Rich, dark foliage makes this a refined statement piece.' },
  { id: 'philodendron', name: 'Heartleaf Philodendron', botanical: 'Philodendron hederaceum', category: 'statement', price: 29, light: 'Medium indirect', water: 'Weekly', badge: '', image: '/images/philodendron.svg', description: 'A lush climber with cascading heart-shaped leaves.' },
  { id: 'calathea', name: 'Calathea Orbifolia', botanical: 'Goeppertia orbifolia', category: 'statement', price: 42, light: 'Medium indirect', water: 'Keep lightly moist', badge: 'RARE FIND', image: '/images/calathea.svg', description: 'Beautiful striped leaves with a softly rounded shape.' },
  { id: 'peace-lily', name: 'Peace Lily', botanical: 'Spathiphyllum', category: 'air-purifying', price: 32, light: 'Low to medium indirect', water: 'Weekly', badge: '', image: '/images/peace-lily.svg', description: 'Elegant leaves and delicate white blooms brighten any room.' },
  { id: 'spider-plant', name: 'Spider Plant', botanical: 'Chlorophytum comosum', category: 'air-purifying', price: 20, light: 'Medium indirect', water: 'Weekly', badge: '', image: '/images/spider-plant.svg', description: 'Playful arching leaves create an easy, breezy look.' },
  { id: 'boston-fern', name: 'Boston Fern', botanical: 'Nephrolepis exaltata', category: 'air-purifying', price: 26, light: 'Medium indirect', water: 'Keep lightly moist', badge: '', image: '/images/boston-fern.svg', description: 'Soft, feathery fronds add a fresh woodland texture.' },
  { id: 'areca-palm', name: 'Areca Palm', botanical: 'Dypsis lutescens', category: 'air-purifying', price: 45, light: 'Bright indirect', water: 'Weekly', badge: '', image: '/images/areca-palm.svg', description: 'Graceful palm fronds make an airy, tropical backdrop.' },
  { id: 'chinese-evergreen', name: 'Chinese Evergreen', botanical: 'Aglaonema', category: 'air-purifying', price: 34, light: 'Low to medium indirect', water: 'Every 1–2 weeks', badge: '', image: '/images/chinese-evergreen.svg', description: 'Patterned leaves with an understated, sophisticated look.' },
  { id: 'dracaena', name: 'Dracaena', botanical: 'Dracaena marginata', category: 'air-purifying', price: 36, light: 'Medium indirect', water: 'Every 1–2 weeks', badge: '', image: '/images/dracaena.svg', description: 'Slender trunks and spiky foliage create an effortlessly modern look.' },
];

export const getPlant = (id) => plants.find((plant) => plant.id === id);
export const money = (amount) => `$${amount.toFixed(2)}`;
