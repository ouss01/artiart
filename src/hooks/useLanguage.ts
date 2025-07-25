import { useState, useEffect } from 'react';
import { Language, LanguageContent } from '../types';

const translations: Record<Language, LanguageContent> = {
  en: {
    // Header
    searchPlaceholder: 'Search artisan crafts...',
    cartTitle: 'Shopping Cart',
    
    // Navigation
    home: 'Home',
    products: 'Products',
    artisans: 'Artisans',
    categories: 'Categories',
    
    // Product
    addToCart: 'Add to Cart',
    outOfStock: 'Out of Stock',
    inStock: 'In Stock',
    price: 'Price',
    rating: 'Rating',
    reviews: 'reviews',
    materials: 'Materials',
    dimensions: 'Dimensions',
    weight: 'Weight',
    quantity: 'Quantity',
    
    // Categories
    exploreCategories: 'Explore Our Categories',
    productsFound: 'products found',
    
    // Hero
    heroTitle: 'Discover Authentic Tunisian Crafts',
    heroSubtitle: 'Connect directly with master artisans and discover unique handcrafted treasures that tell the story of Tunisia\'s rich cultural heritage.',
    exploreMarketplace: 'Explore Marketplace',
    meetArtisans: 'Meet Our Artisans',
    
    // Featured
    featuredProducts: 'Featured Products',
    handpickedTreasures: 'Handpicked treasures from our most talented artisans',
    viewAll: 'View All',
    
    // Artisan
    about: 'About',
    specialties: 'Specialties',
    artisanStory: 'Artisan Story',
    socialImpact: 'Social Impact',
    joinedDate: 'Joined',
    
    // Cart
    shoppingCart: 'Shopping Cart',
    cartEmpty: 'Your cart is empty',
    cartEmptyDesc: 'Add some beautiful artisan crafts to get started!',
    proceedCheckout: 'Proceed to Checkout',
    continueShopping: 'Continue Shopping',
    clearAll: 'Clear all items',
    total: 'Total',
    
    // Common
    back: 'Back',
    by: 'by',
    from: 'from',
    description: 'Description',
    productDetails: 'Product Details',
    // ProductGrid
    newest: 'Newest',
    priceLowToHigh: 'Price: Low to High',
    priceHighToLow: 'Price: High to Low',
    highestRated: 'Highest Rated',
    filters: 'Filters',
    priceRange: 'Price Range',
    minimumRating: 'Minimum Rating',
    stars: 'stars',
    noProductsFound: 'No products found',
    tryAdjustingFilters: 'Try adjusting your filters or search criteria.'
  },
  fr: {
    // Header
    searchPlaceholder: 'Rechercher des artisanats...',
    cartTitle: 'Panier',
    
    // Navigation
    home: 'Accueil',
    products: 'Produits',
    artisans: 'Artisans',
    categories: 'Catégories',
    
    // Product
    addToCart: 'Ajouter au Panier',
    outOfStock: 'Rupture de Stock',
    inStock: 'En Stock',
    price: 'Prix',
    rating: 'Note',
    reviews: 'avis',
    materials: 'Matériaux',
    dimensions: 'Dimensions',
    weight: 'Poids',
    quantity: 'Quantité',
    
    // Categories
    exploreCategories: 'Explorez Nos Catégories',
    productsFound: 'produits trouvés',
    
    // Hero
    heroTitle: 'Découvrez l\'Artisanat Tunisien Authentique',
    heroSubtitle: 'Connectez-vous directement avec des maîtres artisans et découvrez des trésors artisanaux uniques qui racontent l\'histoire du riche patrimoine culturel tunisien.',
    exploreMarketplace: 'Explorer le Marché',
    meetArtisans: 'Rencontrer Nos Artisans',
    
    // Featured
    featuredProducts: 'Produits Vedettes',
    handpickedTreasures: 'Trésors sélectionnés de nos artisans les plus talentueux',
    viewAll: 'Voir Tout',
    
    // Artisan
    about: 'À Propos',
    specialties: 'Spécialités',
    artisanStory: 'Histoire de l\'Artisan',
    socialImpact: 'Impact Social',
    joinedDate: 'Rejoint',
    
    // Cart
    shoppingCart: 'Panier',
    cartEmpty: 'Votre panier est vide',
    cartEmptyDesc: 'Ajoutez de beaux objets artisanaux pour commencer!',
    proceedCheckout: 'Procéder au Paiement',
    continueShopping: 'Continuer les Achats',
    clearAll: 'Vider le panier',
    total: 'Total',
    
    // Common
    back: 'Retour',
    by: 'par',
    from: 'de',
    description: 'Description',
    productDetails: 'Détails du Produit',
    // ProductGrid
    newest: 'Nouveautés',
    priceLowToHigh: 'Prix : du plus bas au plus élevé',
    priceHighToLow: 'Prix : du plus élevé au plus bas',
    highestRated: 'Les mieux notés',
    filters: 'Filtres',
    priceRange: 'Tranche de prix',
    minimumRating: 'Note minimale',
    stars: 'étoiles',
    noProductsFound: 'Aucun produit trouvé',
    tryAdjustingFilters: 'Essayez d’ajuster vos filtres ou critères de recherche.'
  },
  ar: {
    // Header
    searchPlaceholder: 'البحث عن الحرف اليدوية...',
    cartTitle: 'سلة التسوق',
    
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    artisans: 'الحرفيون',
    categories: 'الفئات',
    
    // Product
    addToCart: 'أضف إلى السلة',
    outOfStock: 'نفد من المخزون',
    inStock: 'متوفر',
    price: 'السعر',
    rating: 'التقييم',
    reviews: 'تقييم',
    materials: 'المواد',
    dimensions: 'الأبعاد',
    weight: 'الوزن',
    quantity: 'الكمية',
    
    // Categories
    exploreCategories: 'استكشف فئاتنا',
    productsFound: 'منتج موجود',
    
    // Hero
    heroTitle: 'اكتشف الحرف التونسية الأصيلة',
    heroSubtitle: 'تواصل مباشرة مع الحرفيين المهرة واكتشف كنوز حرفية فريدة تحكي قصة التراث الثقافي التونسي الغني.',
    exploreMarketplace: 'استكشف السوق',
    meetArtisans: 'تعرف على حرفيينا',
    
    // Featured
    featuredProducts: 'المنتجات المميزة',
    handpickedTreasures: 'كنوز مختارة من أمهر حرفيينا',
    viewAll: 'عرض الكل',
    
    // Artisan
    about: 'حول',
    specialties: 'التخصصات',
    artisanStory: 'قصة الحرفي',
    socialImpact: 'التأثير الاجتماعي',
    joinedDate: 'انضم في',
    
    // Cart
    shoppingCart: 'سلة التسوق',
    cartEmpty: 'سلتك فارغة',
    cartEmptyDesc: 'أضف بعض الحرف اليدوية الجميلة للبدء!',
    proceedCheckout: 'متابعة الدفع',
    continueShopping: 'متابعة التسوق',
    clearAll: 'مسح جميع العناصر',
    total: 'المجموع',
    
    // Common
    back: 'رجوع',
    by: 'بواسطة',
    from: 'من',
    description: 'الوصف',
    productDetails: 'تفاصيل المنتج',
    // ProductGrid
    newest: 'الأحدث',
    priceLowToHigh: 'السعر: من الأقل إلى الأعلى',
    priceHighToLow: 'السعر: من الأعلى إلى الأقل',
    highestRated: 'الأعلى تقييماً',
    filters: 'تصفية',
    priceRange: 'نطاق السعر',
    minimumRating: 'الحد الأدنى للتقييم',
    stars: 'نجوم',
    noProductsFound: 'لا توجد منتجات',
    tryAdjustingFilters: 'حاول تعديل عوامل التصفية أو معايير البحث.'
  }
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('cartagena-language') as Language;
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartagena-language', currentLanguage);
    
    // Update document direction for Arabic
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = translations[currentLanguage];

  return {
    currentLanguage,
    changeLanguage,
    t,
    isRTL: currentLanguage === 'ar'
  };
};