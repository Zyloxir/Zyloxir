import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-4 block">
              Zyloxir<span className="text-orange-500">Cart</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Smart, useful, problem-solving home gadgets designed for modern living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/#new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/#bestsellers" className="hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/#shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ZyloxirCart. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1" /> Secure Checkout</span>
            <span className="flex items-center"><Truck className="w-4 h-4 mr-1" /> Fast Shipping</span>
            <span className="flex items-center"><RotateCcw className="w-4 h-4 mr-1" /> Easy Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
