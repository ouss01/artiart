import React from 'react';
import { artisans, products } from '../data/mockData';
import { ProductCard } from './ProductCard';

export const ArtisanList: React.FC<{ onProductClick: (product: any) => void; onArtisanClick: (id: string) => void }> = ({ onProductClick, onArtisanClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center text-amber-700 mb-10">Meet Our Artisans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artisans.map((artisan) => {
          const artisanProducts = products.filter(p => p.artisanId === artisan.id);
          return (
            <div key={artisan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <img src={artisan.image} alt={artisan.name} className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{artisan.name}</h3>
                  <div className="text-gray-600 text-sm">{artisan.location}</div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-2">Products</h4>
                <div className="grid grid-cols-2 gap-3">
                  {artisanProducts.length > 0 ? (
                    artisanProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onProductClick={onProductClick}
                        onArtisanClick={onArtisanClick}
                      />
                    ))
                  ) : (
                    <div className="text-gray-400 col-span-2 text-sm">No products yet.</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 