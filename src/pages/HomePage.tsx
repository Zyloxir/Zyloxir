import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw, CheckCircle2, Zap, Clock, ThumbsUp, Lock } from 'lucide-react';
import { products } from '../data/products';

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern home interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/30">
              <Star className="w-4 h-4 mr-1 fill-orange-400" /> Over 50,000 Happy Homes
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Upgrade Your Home.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Simplify Your Life.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover smart, problem-solving gadgets designed to save you time, reduce stress, and make everyday living effortlessly convenient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#shop" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1">
                Shop Best Sellers <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-400 font-medium">
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-green-400" /> Free Shipping</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-green-400" /> 30-Day Returns</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cafe2c1c7669?q=80&w=800&auto=format&fit=crop" 
                alt="Zyloxir Smart Mop" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-slate-900 flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm">Zyloxir Smart Mop</p>
                  <div className="flex text-orange-500 text-xs mt-1">
                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
                <div className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Save 40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Fast & Free Shipping</h3>
              <p className="text-xs text-slate-500 mt-1">On all orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Quality Guaranteed</h3>
              <p className="text-xs text-slate-500 mt-1">Premium materials only</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Easy 30-Day Returns</h3>
              <p className="text-xs text-slate-500 mt-1">No questions asked</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Secure Checkout</h3>
              <p className="text-xs text-slate-500 mt-1">256-bit encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem -> Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stop Wasting Time on Household Chores</h2>
            <p className="text-lg text-slate-600">We design products that tackle the most annoying parts of your day, so you can get back to what actually matters.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Problem</h3>
              <p className="text-slate-600 mb-6">Cleaning takes hours, food goes bad too quickly, and your home feels disorganized and stressful.</p>
              <div className="h-px bg-slate-200 w-full mb-6"></div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">The Zyloxir Solution</h4>
                  <p className="text-sm text-slate-600 mt-1">Smart gadgets that automate and simplify daily tasks, cutting chore time in half.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Problem</h3>
              <p className="text-slate-600 mb-6">Traditional tools are clunky, break easily, and require too much manual effort to use properly.</p>
              <div className="h-px bg-slate-200 w-full mb-6"></div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">The Zyloxir Solution</h4>
                  <p className="text-sm text-slate-600 mt-1">Ergonomic, durable designs engineered for maximum efficiency with minimal effort.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <ThumbsUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Problem</h3>
              <p className="text-slate-600 mb-6">Most "smart" home gadgets are overly complicated, expensive, and hard to set up.</p>
              <div className="h-px bg-slate-200 w-full mb-6"></div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">The Zyloxir Solution</h4>
                  <p className="text-sm text-slate-600 mt-1">Intuitive, plug-and-play products that work perfectly right out of the box.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Trending Right Now</h2>
              <p className="text-slate-600">Our most popular problem-solvers, loved by thousands.</p>
            </div>
            <a href="#shop" className="hidden md:flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  {product.isBestseller && (
                    <div className="absolute top-3 left-3 z-10 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Best Seller
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Save ${Math.round(product.originalPrice - product.price)}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 ml-2">({product.reviews})</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-orange-500 transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <a href="#shop" className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors">
              View All Products <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Just Take Our Word For It</h2>
            <div className="flex items-center justify-center space-x-2 text-orange-400 mb-2">
              <Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" />
            </div>
            <p className="text-slate-400">Based on 10,000+ 5-star reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah J.", product: "Zyloxir Smart Mop", text: "I used to dread mopping. This literally changed my life. The fact that I'm always using clean water makes my floors shine like never before. Worth every penny!" },
              { name: "Michael T.", product: "Motion Sensor Lights", text: "Bought these for my dark kitchen cabinets and hallway. Installation took 2 minutes. They are super bright and the battery lasts forever. Buying more for the closets." },
              { name: "Emily R.", product: "Filtered Shower Head", text: "My skin was so dry from hard water. After one week with this shower head, my skin and hair feel incredibly soft. Plus, the water pressure is amazing now." }
            ].map((review, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex text-orange-400 mb-4">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="font-bold text-lg mb-2">"{review.text.substring(0, 30)}..."</h4>
                <p className="text-slate-300 text-sm mb-6 italic">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 font-bold mr-3">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{review.name}</p>
                      <p className="text-xs text-green-400 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Verified Buyer</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{review.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Ready to Upgrade Your Home?</h2>
          <p className="text-xl text-orange-100 mb-10">Join 50,000+ happy customers who have simplified their daily routines with ZyloxirCart.</p>
          <a href="#shop" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-orange-600 bg-white hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
            Shop the Collection Now
          </a>
          <p className="mt-6 text-sm text-orange-200 font-medium">30-Day Money-Back Guarantee. No risk.</p>
        </div>
      </section>
    </div>
  );
}


