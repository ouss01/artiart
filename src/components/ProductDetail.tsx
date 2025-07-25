import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Minus, Plus, ArrowLeft, MapPin, Award } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../hooks/useLanguage';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onArtisanClick: (artisanId: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onArtisanClick
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { t, isRTL } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {showToast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow z-50 text-base">
          {t.addToCart} ✓
        </div>
      )}
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t.back} {t.products}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-amber-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <button
              onClick={() => onArtisanClick(product.artisanId)}
              className="flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-4"
            >
              <MapPin className="w-4 h-4 mr-1" />
              {t.by} {product.artisanName} {t.from} {product.artisanLocation}
            </button>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold ml-1">{product.rating}</span>
                <span className="text-gray-600 ml-1">({product.reviewCount} {t.reviews})</span>
              </div>
              
              {product.inStock && (
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  {t.inStock}
                </div>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="border-t border-b border-gray-200 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-500">{product.currency}</span>
              </div>
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">{t.description}</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Story */}
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Award className="w-5 h-5 mr-2 text-amber-600" />
              {t.artisanStory}
            </h3>
            <p className="text-gray-700 leading-relaxed">{product.story}</p>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{t.productDetails}</h3>
            <dl className="space-y-2">
              <div className="flex">
                <dt className="font-medium text-gray-700 w-24">{t.materials}:</dt>
                <dd className="text-gray-600">{product.materials.join(', ')}</dd>
              </div>
              {product.dimensions && (
                <div className="flex">
                  <dt className="font-medium text-gray-700 w-24">{t.dimensions}:</dt>
                  <dd className="text-gray-600">{product.dimensions}</dd>
                </div>
              )}
              {product.weight && (
                <div className="flex">
                  <dt className="font-medium text-gray-700 w-24">{t.weight}:</dt>
                  <dd className="text-gray-600">{product.weight}</dd>
                </div>
              )}
            </dl>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="font-medium text-gray-700">{t.quantity}:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{product.inStock ? t.addToCart : t.outOfStock}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};