import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { ArtisanProfile } from './components/ArtisanProfile';
import { Cart } from './components/Cart';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { ForgotPassword } from './components/ForgotPassword';
import { VerifyEmail } from './components/VerifyEmail';
import { UpdatePassword } from './components/UpdatePassword';
import { Product, Artisan, Category } from './types';
import { products, artisans } from './data/mockData';
import { UserProfile } from './components/UserProfile';

function AppRoutes() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [selectedArtisan, setSelectedArtisan] = React.useState<Artisan | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        onLogoClick={() => navigate('/')}
        onAdminClick={() => navigate('/admin')}
        onProfile={() => navigate('/profile')}
        onSettings={() => navigate('/update-password')}
        onSignOut={() => navigate('/signin')}
      />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Hero onExploreClick={() => navigate('/products')} />
              <FeaturedProducts
                onProductClick={product => { setSelectedProduct(product); navigate('/product-detail'); }}
                onArtisanClick={id => { setSelectedArtisan(artisans.find(a => a.id === id) || null); navigate('/artisan-profile'); }}
                onViewAllClick={() => navigate('/products')}
              />
              <CategoryGrid onCategoryClick={category => { setSelectedCategory(category); navigate('/products'); }} />
            </>
          } />
          <Route path="/products" element={
            <ProductGrid
              selectedCategory={selectedCategory ?? undefined}
              onProductClick={product => { setSelectedProduct(product); navigate('/product-detail'); }}
              onArtisanClick={id => { setSelectedArtisan(artisans.find(a => a.id === id) || null); navigate('/artisan-profile'); }}
            />
          } />
          <Route path="/product-detail" element={
            selectedProduct ? (
              <ProductDetail
                product={selectedProduct}
                onBack={() => navigate('/products')}
                onArtisanClick={id => { setSelectedArtisan(artisans.find(a => a.id === id) || null); navigate('/artisan-profile'); }}
              />
            ) : null
          } />
          <Route path="/artisan-profile" element={
            selectedArtisan ? (
              <ArtisanProfile
                artisan={selectedArtisan}
                onBack={() => navigate('/')}
                onProductClick={product => { setSelectedProduct(product); navigate('/product-detail'); }}
              />
            ) : null
          } />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard onClose={() => navigate('/')} />} />
          <Route path="/signin" element={<SignIn onSignUp={() => navigate('/signup')} onForgot={() => navigate('/forgot-password')} />} />
          <Route path="/signup" element={<SignUp onSignIn={() => navigate('/signin')} />} />
          <Route path="/forgot-password" element={<ForgotPassword onSignIn={() => navigate('/signin')} />} />
          <Route path="/verify-email" element={<VerifyEmail onSignIn={() => navigate('/signin')} />} />
          <Route path="/update-password" element={<UpdatePassword onBack={() => navigate('/')} />} />
        </Routes>
      </main>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onProductClick={product => { setSelectedProduct(product); navigate('/product-detail'); }}
        onArtisanClick={id => { setSelectedArtisan(artisans.find(a => a.id === id) || null); navigate('/artisan-profile'); }}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;