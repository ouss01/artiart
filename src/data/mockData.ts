import { Product, Artisan, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'rugs-kilim',
    name: 'Rugs & Kilim',
    image: 'https://images.pexels.com/photos/6636956/pexels-photo-6636956.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handwoven traditional rugs and kilims',
    productCount: 45
  },
  {
    id: 'curtains',
    name: 'Curtains & Rideaux',
    image: 'https://images.pexels.com/photos/6969774/pexels-photo-6969774.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Beautiful handcrafted curtains and drapery',
    productCount: 32
  },
  {
    id: 'fouta',
    name: 'Fouta',
    image: 'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional Tunisian fouta towels',
    productCount: 28
  },
  {
    id: 'ceramics',
    name: 'Ceramics',
    image: 'https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handmade pottery and ceramic art',
    productCount: 67
  },
  {
    id: 'olive-wood',
    name: 'Olive Wood Crafts',
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Artisan olive wood creations',
    productCount: 23
  },
  {
    id: 'baskets',
    name: 'Halfa & Jute Baskets',
    image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional woven baskets',
    productCount: 41
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handcrafted traditional jewelry',
    productCount: 56
  },
  {
    id: 'textiles',
    name: 'Textiles',
    image: 'https://images.pexels.com/photos/6639008/pexels-photo-6639008.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional fabrics and textiles',
    productCount: 38
  }
];

export const artisans: Artisan[] = [
  {
    id: 'artisan-1',
    name: 'Amina Benali',
    bio: 'Master weaver with 25 years of experience in traditional Tunisian textiles',
    location: 'Kairouan, Tunisia',
    image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewCount: 127,
    totalProducts: 23,
    joinedDate: '2019-03-15',
    specialties: ['Rugs & Kilim', 'Textiles'],
    story: 'Growing up in Kairouan, I learned the ancient art of weaving from my grandmother. Each piece tells the story of our heritage.',
    socialImpact: 'Employs 8 local women and supports traditional craft preservation.'
  },
  {
    id: 'artisan-2',
    name: 'Omar Hadj Ali',
    bio: 'Third-generation potter specializing in traditional Nabeul ceramics',
    location: 'Nabeul, Tunisia',
    image: 'https://images.pexels.com/photos/5384595/pexels-photo-5384595.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 89,
    totalProducts: 34,
    joinedDate: '2018-07-22',
    specialties: ['Ceramics'],
    story: 'My family has been creating pottery for three generations. We blend traditional techniques with contemporary designs.',
    socialImpact: 'Provides training to young artisans and uses locally sourced clay.'
  },
  {
    id: 'artisan-3',
    name: 'Fatima Ouali',
    bio: 'Skilled basket weaver creating sustainable halfa and jute products',
    location: 'Tataouine, Tunisia',
    image: 'https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviewCount: 156,
    totalProducts: 19,
    joinedDate: '2020-01-10',
    specialties: ['Baskets', 'Home Décor'],
    story: 'I create beautiful baskets using traditional techniques passed down through generations of Berber women.',
    socialImpact: 'Sources materials sustainably and supports rural women cooperatives.'
  }
];

export const products: Product[] = [
  {
    id: 'product-1',
    name: 'Traditional Kairouan Kilim',
    description: 'Handwoven kilim featuring traditional geometric patterns in vibrant colors. Each piece is unique and tells a story of Tunisian heritage.',
    price: 285,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/6636956/pexels-photo-6636956.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6128993/pexels-photo-6128993.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'rugs-kilim',
    artisanId: 'artisan-1',
    artisanName: 'Amina Benali',
    artisanLocation: 'Kairouan, Tunisia',
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    materials: ['Wool', 'Cotton'],
    dimensions: '120cm x 180cm',
    weight: '2.5kg',
    story: 'This kilim represents the traditional weaving patterns of Kairouan, a UNESCO World Heritage city known for its carpet-making tradition.'
  },
  {
    id: 'product-2',
    name: 'Nabeul Blue Pottery Vase',
    description: 'Stunning ceramic vase with traditional blue and white Nabeul patterns, perfect for home decoration.',
    price: 95,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'ceramics',
    artisanId: 'artisan-2',
    artisanName: 'Omar Hadj Ali',
    artisanLocation: 'Nabeul, Tunisia',
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
    materials: ['Clay', 'Natural Glazes'],
    dimensions: '25cm height',
    weight: '1.2kg',
    story: 'Crafted using traditional Nabeul pottery techniques, this vase showcases the iconic blue and white patterns of the region.'
  },
  {
    id: 'product-3',
    name: 'Handwoven Halfa Basket Set',
    description: 'Set of three nested baskets made from sustainable halfa grass, perfect for storage and decoration.',
    price: 65,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4464983/pexels-photo-4464983.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'baskets',
    artisanId: 'artisan-3',
    artisanName: 'Fatima Ouali',
    artisanLocation: 'Tataouine, Tunisia',
    rating: 4.7,
    reviewCount: 18,
    inStock: true,
    materials: ['Halfa Grass', 'Natural Dyes'],
    dimensions: 'Large: 35cm, Medium: 28cm, Small: 22cm',
    weight: '0.8kg total',
    story: 'These baskets are woven using traditional Berber techniques, representing the nomadic heritage of southern Tunisia.'
  },
  {
    id: 'product-4',
    name: 'Premium Fouta Beach Towel',
    description: 'Luxurious handwoven fouta towel in traditional patterns, perfect for beach, bath, or home décor.',
    price: 45,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8136071/pexels-photo-8136071.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'fouta',
    artisanId: 'artisan-1',
    artisanName: 'Amina Benali',
    artisanLocation: 'Kairouan, Tunisia',
    rating: 4.6,
    reviewCount: 42,
    inStock: true,
    materials: ['100% Cotton'],
    dimensions: '100cm x 180cm',
    weight: '0.4kg',
    story: 'The fouta is a traditional Tunisian towel that has been used for centuries in hammams and as versatile household textiles.'
  },
  {
    id: 'product-5',
    name: 'Olive Wood Serving Board',
    description: 'Beautiful handcrafted serving board made from premium Tunisian olive wood with natural grain patterns.',
    price: 35,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5738077/pexels-photo-5738077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'olive-wood',
    artisanId: 'artisan-2',
    artisanName: 'Omar Hadj Ali',
    artisanLocation: 'Nabeul, Tunisia',
    rating: 4.8,
    reviewCount: 27,
    inStock: true,
    materials: ['Olive Wood'],
    dimensions: '35cm x 25cm x 2cm',
    weight: '0.6kg',
    story: 'Crafted from olive trees that have reached the end of their fruit-bearing life, giving them a second purpose as beautiful kitchenware.'
  },
  {
    id: 'product-6',
    name: 'Traditional Silver Berber Necklace',
    description: 'Authentic handcrafted silver necklace featuring traditional Berber motifs and coral accents.',
    price: 125,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'jewelry',
    artisanId: 'artisan-3',
    artisanName: 'Fatima Ouali',
    artisanLocation: 'Tataouine, Tunisia',
    rating: 4.9,
    reviewCount: 15,
    inStock: true,
    materials: ['Sterling Silver', 'Coral', 'Traditional Stones'],
    dimensions: '45cm length',
    weight: '0.2kg',
    story: 'This necklace design has been worn by Berber women for centuries, symbolizing protection and cultural identity.'
  }
];