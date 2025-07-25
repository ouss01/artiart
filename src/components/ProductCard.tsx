import React, { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../hooks/useLanguage';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onArtisanClick: (artisanId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onProductClick, 
  onArtisanClick 
}) => {
  const { addToCart } = useCart();
  const { t, isRTL } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  const handleArtisanClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onArtisanClick(product.artisanId);
  };

  return (
    <div
      onClick={() => onProductClick(product)}
      className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {showToast && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow z-20 text-sm">
          {t.addToCart} ✓
        </div>
      )}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>

        {/* Quick Add to Cart */}
        {product.inStock && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-amber-600 text-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-700"
            title={t.addToCart}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-2" dir={isRTL ? 'rtl' : 'ltr'}>
          {product.name}
        </h3>
        
        <button
          onClick={handleArtisanClick}
          className="text-sm text-amber-600 hover:text-amber-700 transition-colors mt-1" 
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {t.by} {product.artisanName}
        </button>

        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-400 mx-2">•</span>
          <span className="text-sm text-gray-600" dir={isRTL ? 'rtl' : 'ltr'}>
            {product.reviewCount} {t.reviews}
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">{product.currency}</span>
          </div>
          
          {!product.inStock && (
            <span className="text-sm text-red-600 font-medium" dir={isRTL ? 'rtl' : 'ltr'}>
              {t.outOfStock}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};