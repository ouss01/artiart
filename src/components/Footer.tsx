import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Cartagena</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting you with authentic Tunisian artisans and their heritage crafts. 
              Every purchase supports traditional craftsmanship and empowers local communities 
              while preserving cultural heritage for future generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Rugs & Kilim</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Ceramics</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Textiles</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Jewelry</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Home Décor</a></li>
            </ul>
          </div>

          {/* Support & Info */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/artisans" className="hover:text-amber-400 transition-colors">Meet Our Artisans</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="/become-artisan" className="hover:text-amber-400 transition-colors">Become an Artisan</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Our Artisans</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Care Instructions</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-amber-400" />
              <div>
                <p className="font-medium">Visit Our Showroom</p>
                <p className="text-gray-400 text-sm">Tunis, Tunisia</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-amber-400" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-gray-400 text-sm">+216 XX XXX XXX</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-amber-400" />
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-gray-400 text-sm">hello@cartagena.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="font-semibold mb-2">Stay Connected</h4>
                <p className="text-gray-400 text-sm">
                  Get updates on new artisan collections and exclusive offers
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1"
                />
                <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Cartagena Heritage Marketplace. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap space-x-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Accessibility</a>
          </div>
        </div>

        {/* Heritage Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-amber-400">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <span className="text-sm font-medium">Preserving Tunisian Heritage Through Authentic Craftsmanship</span>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};