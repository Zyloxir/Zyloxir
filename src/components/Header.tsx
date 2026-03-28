import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export function Header() {
  const { items, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="mr-4 lg:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900">
              Zyloxir<span className="text-orange-500">Cart</span>
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/#shop" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors">Shop</Link>
            <Link to="/#about" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors">About Us</Link>
            <Link to="/#faq" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center">
            <button
              className="relative p-2 text-slate-900 hover:text-orange-500 transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-500 rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 pt-5 pb-2">
              <span className="text-2xl font-bold tracking-tighter text-slate-900">
                Zyloxir<span className="text-orange-500">Cart</span>
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50">Home</Link>
              <Link to="/#shop" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50">Shop</Link>
              <Link to="/#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50">About Us</Link>
              <Link to="/#faq" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50">FAQ</Link>
            </nav>
          </div>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
