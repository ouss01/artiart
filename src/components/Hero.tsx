import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HeroProps {
  onExploreClick: () => void;
  onMeetArtisansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onMeetArtisansClick }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6128993/pexels-photo-6128993.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Artisan crafts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
          {t.heroTitle.split(' ').slice(0, 2).join(' ')}
          <span className="block text-amber-400">{t.heroTitle.split(' ').slice(2).join(' ')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
          {t.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onExploreClick}
            className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 flex items-center space-x-2 group"
          >
            <span>{t.exploreMarketplace}</span>
            <ChevronRight className={`w-5 h-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRTL ? 'rotate-180' : ''}`} />
          </button>
          
          <button
            onClick={onMeetArtisansClick}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            {t.meetArtisans}
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white border-opacity-20">
          <div>
            <div className="text-3xl font-bold text-amber-400">500+</div>
            <div className="text-sm text-gray-300">Unique Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400">50+</div>
            <div className="text-sm text-gray-300">Master Artisans</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400">15+</div>
            <div className="text-sm text-gray-300">Craft Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
};