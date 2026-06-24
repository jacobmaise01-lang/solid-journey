import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-accent-silver/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-silver">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-bold text-primary-navy mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">Looks like you haven't added any gear to your cart yet. Head back to the shop to find the best tackle for your next trip.</p>
        <Link to="/shop" className="bg-highlight-orange text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition inline-block">
          Explore Gear
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary-navy mb-10">Shopping Cart ({totalItems})</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="border-b border-gray-200 pb-4 mb-4 hidden md:flex text-sm font-bold text-gray-400 uppercase tracking-wider">
              <div className="flex-grow">Product</div>
              <div className="w-32 text-center">Quantity</div>
              <div className="w-32 text-right">Price</div>
            </div>

            {cart.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row items-center py-6 border-b border-gray-100 gap-6">
                <div className="flex items-center gap-6 flex-grow w-full">
                  <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <Link to={`/product/${item.id}`} className="font-bold text-primary-navy hover:text-highlight-orange transition">{item.name}</Link>
                    <p className="text-xs text-gray-400 uppercase font-bold mt-1">{item.category}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 font-bold mt-4 transition"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  </div>
                </div>

                <div className="w-32 flex justify-center">
                  <div className="flex items-center border border-gray-200 rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >-</button>
                    <span className="px-4 py-1 font-bold text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >+</button>
                  </div>
                </div>

                <div className="w-32 text-right">
                  <span className="text-lg font-bold text-secondary-green">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-2xl p-8 sticky top-24 border border-gray-100">
              <h2 className="text-xl font-bold text-primary-navy mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-secondary-green font-bold uppercase text-xs">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between text-xl font-bold text-primary-navy">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full bg-highlight-orange text-white py-4 rounded font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </Link>
              
              <div className="mt-8">
                <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-widest mb-4">Secure Payments via Stripe</p>
                <div className="flex justify-center gap-4 opacity-30 grayscale">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
