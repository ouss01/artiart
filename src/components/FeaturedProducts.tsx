import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { products } from '../data/mockData';

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
  onArtisanClick: (artisanId: string) => void;
  onViewAllClick: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onProductClick,
  onArtisanClick,
  onViewAllClick
}) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Handpicked treasures from our most talented artisans
            </p>
          </div>
          
          <button
            onClick={onViewAllClick}
            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors group"
          >
            <span>View All</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onArtisanClick={onArtisanClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};