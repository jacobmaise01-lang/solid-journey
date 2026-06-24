import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop" className="text-highlight-orange font-bold hover:underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-navy mb-8 transition">
          <ArrowLeft size={16} /> Back to Gear Catalog
        </Link>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-accent-silver/5 rounded-2xl p-8 border border-gray-100 sticky top-24">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col">
            <span className="text-highlight-orange font-bold uppercase tracking-widest text-sm mb-2">{product.category}</span>
            <h1 className="text-4xl font-bold text-primary-navy mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-sm text-gray-500 font-semibold">(24 Customer Reviews)</span>
            </div>

            <p className="text-4xl font-bold text-secondary-green mb-8">${product.price}</p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {product.specs && (
              <div className="mb-8">
                <h3 className="font-bold text-primary-navy mb-4 uppercase tracking-wider text-sm">Technical Specifications</h3>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-silver"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >-</button>
                <span className="px-6 py-2 font-bold border-x border-gray-300">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >+</button>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="flex-grow bg-primary-navy text-white px-8 py-3 rounded font-bold hover:bg-primary-navy/90 transition flex items-center justify-center gap-3"
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center gap-2">
                <Shield size={20} className="text-secondary-green" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Lifetime Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={20} className="text-secondary-green" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Free Local Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw size={20} className="text-secondary-green" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
