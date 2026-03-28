import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShieldCheck, Truck, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Clock, ShoppingCart, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImage(0);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="text-orange-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
  };

  const faqs = [
    { q: "How long does shipping take?", a: "We process all orders within 24 hours. Standard shipping takes 3-5 business days depending on your location." },
    { q: "What is your return policy?", a: "We offer a 30-day no-questions-asked money-back guarantee. If you're not satisfied, simply return it for a full refund." },
    { q: "Is there a warranty?", a: "Yes! All Zyloxir products come with a standard 1-year manufacturer warranty covering any defects." }
  ];

  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/#shop" className="hover:text-slate-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Gallery */}
          <div className="lg:w-1/2">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200 relative">
              {product.originalPrice && (
                <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  Save ${Math.round(product.originalPrice - product.price)}
                </div>
              )}
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${activeImage === idx ? 'border-orange-500' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`} />
                ))}
              </div>
              <span className="text-sm text-slate-600 ml-2 font-medium">{product.rating} Rating ({product.reviews} Reviews)</span>
            </div>

            <div className="flex items-end mb-6">
              <span className="text-4xl font-black text-slate-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xl text-slate-400 line-through ml-3 mb-1">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Urgency Trigger */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center text-orange-600 font-bold">
                <Clock className="w-5 h-5 mr-2" />
                Sale ends in:
              </div>
              <div className="font-mono text-lg font-bold text-orange-600 bg-white px-3 py-1 rounded-md shadow-sm">
                {formatTime(timeLeft)}
              </div>
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Why you'll love it:</h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Section */}
            <div className="mt-auto pt-8 border-t border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium text-slate-700">In Stock - Only {product.stock} left!</span>
              </div>
              
              <div className="flex gap-4">
                <div className="flex items-center border border-slate-300 rounded-full bg-white">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-14 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-slate-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-14 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all hover:-translate-y-1"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-slate-400 mb-2" />
                <span className="text-xs text-slate-500 font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-slate-400 mb-2" />
                <span className="text-xs text-slate-500 font-medium">1-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="w-6 h-6 text-slate-400 mb-2" />
                <span className="text-xs text-slate-500 font-medium">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details & FAQ Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Features</h2>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="font-bold text-slate-900">{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 bg-white text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-40 lg:hidden flex items-center justify-between">
        <div>
          <p className="font-bold text-slate-900 truncate max-w-[150px]">{product.name}</p>
          <p className="text-orange-500 font-bold">${product.price.toFixed(2)}</p>
        </div>
        <button 
          onClick={handleAddToCart}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
