export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  artisanId: string;
  artisanName: string;
  artisanLocation: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  materials: string[];
  dimensions?: string;
  weight?: string;
  story: string;
}

export interface Artisan {
  id: string;
  name: string;
  bio: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  totalProducts: number;
  joinedDate: string;
  specialties: string[];
  story: string;
  socialImpact: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  productCount: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export type Language = 'en' | 'fr' | 'ar';
export type Currency = 'USD' | 'EUR' | 'TND';
export interface LanguageContent {
  // Header
  searchPlaceholder: string;
  cartTitle: string;
  
  // Navigation
  home: string;
  products: string;
  artisans: string;
  categories: string;
  
  // Product
  addToCart: string;
  outOfStock: string;
  inStock: string;
  price: string;
  rating: string;
  reviews: string;
  materials: string;
  dimensions: string;
  weight: string;
  quantity: string;
  
  // Categories
  exploreCategories: string;
  productsFound: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  exploreMarketplace: string;
  meetArtisans: string;
  
  // Featured
  featuredProducts: string;
  handpickedTreasures: string;
  viewAll: string;
  
  // Artisan
  about: string;
  specialties: string;
  artisanStory: string;
  socialImpact: string;
  joinedDate: string;
  
  // Cart
  shoppingCart: string;
  cartEmpty: string;
  cartEmptyDesc: string;
  proceedCheckout: string;
  continueShopping: string;
  clearAll: string;
  total: string;
  
  // Common
  back: string;
  by: string;
  from: string;
  description: string;
  productDetails: string;
  // ProductGrid
  newest: string;
  priceLowToHigh: string;
  priceHighToLow: string;
  highestRated: string;
  filters: string;
  priceRange: string;
  minimumRating: string;
  stars: string;
  noProductsFound: string;
  tryAdjustingFilters: string;
}