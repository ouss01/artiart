import React from 'react';
import { categories } from '../data/mockData';
import { Category } from '../types';
import { useLanguage } from '../hooks/useLanguage';

interface CategoryGridProps {
  onCategoryClick: (category: Category) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategoryClick }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" dir={isRTL ? 'rtl' : 'ltr'}>
            {t.exploreCategories}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
            Discover authentic handcrafted treasures from skilled artisans across Tunisia, 
            each piece telling a unique story of heritage and tradition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategoryClick(category)}
              className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1" dir={isRTL ? 'rtl' : 'ltr'}>
                  {category.productCount} {t.productsFound.replace('products found', 'products')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};