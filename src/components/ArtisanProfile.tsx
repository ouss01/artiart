import React from 'react';
import { MapPin, Star, Calendar, Award, Heart, ArrowLeft } from 'lucide-react';
import { Artisan, Product } from '../types';
import { ProductCard } from './ProductCard';
import { products } from '../data/mockData';

interface ArtisanProfileProps {
  artisan: Artisan;
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export const ArtisanProfile: React.FC<ArtisanProfileProps> = ({
  artisan,
  onBack,
  onProductClick
}) => {
  const artisanProducts = products.filter(product => product.artisanId === artisan.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      {/* Artisan Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-500"></div>
        
        <div className="relative px-8 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6 -mt-16">
            <div className="relative">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            
            <div className="flex-1 mt-4 sm:mt-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{artisan.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {artisan.location}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {artisan.rating} ({artisan.reviewCount} reviews)
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Joined {new Date(artisan.joinedDate).getFullYear()}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Follow</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{artisan.totalProducts}</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{artisan.reviewCount}</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{artisan.rating}</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Artisan Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Bio */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{artisan.bio}</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Award className="w-5 h-5 mr-2 text-amber-600" />
              Artisan Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">{artisan.story}</p>
          </div>

          {/* Social Impact */}
          <div className="bg-green-50 rounded-lg border border-green-200 p-6">
            <h3 className="font-semibold text-green-900 mb-3">Social Impact</h3>
            <p className="text-green-700 leading-relaxed">{artisan.socialImpact}</p>
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Products</h2>
            <span className="text-gray-600">{artisanProducts.length} items</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisanProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
                onArtisanClick={() => {}}
              />
            ))}
          </div>

          {artisanProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No products available</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};