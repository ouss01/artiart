import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Product, Category } from '../types';
import { ProductCard } from './ProductCard';
import { products, categories } from '../data/mockData';
import { useLanguage } from '../hooks/useLanguage';

interface ProductGridProps {
  selectedCategory?: Category;
  onProductClick: (product: Product) => void;
  onArtisanClick: (artisanId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  selectedCategory,
  onProductClick,
  onArtisanClick
}) => {
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'rating' | 'newest'>('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const { t, isRTL } = useLanguage();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = !selectedCategory || product.category === selectedCategory.id;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {selectedCategory ? selectedCategory.name : t.products}
          </h1>
          <p className="text-gray-600 mt-1">{filteredAndSortedProducts.length} {t.productsFound}</p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="newest">{t.newest || 'Newest'}</option>
            <option value="price-low">{t.priceLowToHigh || 'Price: Low to High'}</option>
            <option value="price-high">{t.priceHighToLow || 'Price: High to Low'}</option>
            <option value="rating">{t.highestRated || 'Highest Rated'}</option>
          </select>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{t.filters || 'Filters'}</span>
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">{t.filters || 'Filters'}</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.priceRange || 'Price Range'}: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Categories */}
              {!selectedCategory && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">{t.categories || 'Categories'}</h4>
                  <div className="space-y-2">
                    {categories.slice(0, 6).map((category) => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Rating Filter */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">{t.minimumRating || 'Minimum Rating'}</h4>
                <div className="space-y-2">
                  {[4, 3, 2].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{rating}+ {t.stars || 'stars'}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
                onArtisanClick={onArtisanClick}
              />
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t.noProductsFound || 'No products found'}</h3>
              <p className="text-gray-600">{t.tryAdjustingFilters || 'Try adjusting your filters or search criteria.'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};