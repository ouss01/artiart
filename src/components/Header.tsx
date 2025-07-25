import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Globe, Heart, ChevronDown, LogOut, Settings as SettingsIcon, BarChart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
  onCartClick: () => void;
  onSearchClick: () => void;
  onLogoClick: () => void;
  onAdminClick: () => void;
  onProfile: () => void;
  onSettings: () => void;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onSearchClick, onLogoClick, onAdminClick, onProfile, onSettings, onSignOut }) => {
  const { getTotalItems } = useCart();
  const { currentLanguage, changeLanguage, t, isRTL } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleLanguageChange = () => {
    const languages = ['en', 'fr', 'ar'] as const;
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeLanguage(languages[nextIndex]);
  };

  const getLanguageDisplay = () => {
    switch (currentLanguage) {
      case 'en': return 'EN';
      case 'fr': return 'FR';
      case 'ar': return 'ع';
      default: return 'EN';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={onLogoClick}
              className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              Cartagena
            </button>
            <span className="ml-2 text-sm text-gray-500 hidden sm:block">Heritage Marketplace</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                onClick={onSearchClick}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button 
              onClick={handleLanguageChange}
              className="flex items-center space-x-1 p-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{getLanguageDisplay()}</span>
            </button>

            {/* Wishlist */}
            <button className="p-2 text-gray-600 hover:text-amber-700 transition-colors">
              <Heart className="w-5 h-5" />
            </button>

            {/* Search (Mobile) */}
            <button 
              className="p-2 text-gray-600 hover:text-amber-700 transition-colors md:hidden"
              onClick={onSearchClick}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* User Account Dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                className="p-2 text-gray-600 hover:text-amber-700 transition-colors flex items-center"
                onClick={() => setMenuOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={menuOpen}
              >
                <User className="w-5 h-5" />
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                  <button
                    className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => { setMenuOpen(false); onProfile(); }}
                  >
                    <User className="w-4 h-4 mr-2" /> Profile
                  </button>
                  <button
                    className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => { setMenuOpen(false); onSettings(); }}
                  >
                    <SettingsIcon className="w-4 h-4 mr-2" /> Settings
                  </button>
                  <button
                    className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => { setMenuOpen(false); onAdminClick(); }}
                  >
                    <BarChart className="w-4 h-4 mr-2" /> Admin Dashboard
                  </button>
                  <button
                    className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    onClick={() => { setMenuOpen(false); onSignOut(); }}
                  >
                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};