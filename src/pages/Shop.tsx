import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return 'All';
    return products.find(p => p.category === cat)?.categoryLabel || cat;
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header section */}
      <div className="bg-accent-silver/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-navy mb-4">Gear Catalog</h1>
          <p className="text-gray-600">Browse our curated selection of fishing essentials.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="md:w-1/4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-primary-navy font-bold">
              <Filter size={20} />
              <h2 className="text-lg">Filters</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Category</h3>
              <div className="flex flex-col gap-2">
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left px-3 py-2 rounded transition text-sm ${
                      selectedCategory === category 
                        ? 'bg-primary-navy text-white font-bold' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {getCategoryLabel(category)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Price Range</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-highlight-orange" /> $0 - $50
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-highlight-orange" /> $50 - $150
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-highlight-orange" /> $150+
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="md:w-3/4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-500 text-sm">Showing {filteredProducts.length} results</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search gear..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-navy/20"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group hover:shadow-md transition">
                <Link to={`/product/${product.id}`} className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition"></div>
                </Link>
                
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-silver mb-1">{product.categoryLabel}</span>
                  <Link to={`/product/${product.id}`} className="font-bold text-primary-navy hover:text-highlight-orange mb-2 transition line-clamp-1">
                    {product.name}
                  </Link>
                  <p className="text-2xl font-bold text-secondary-green mb-4">${product.price}</p>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-auto w-full bg-primary-navy text-white py-2 rounded text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-navy/90 transition"
                  >
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
