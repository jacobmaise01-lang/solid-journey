import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, CreditCard, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { totalPrice, clearCart, cart } = useCart();
  const [isOrdered, setIsOrdered] = React.useState(false);

  const handlePlaceOrder = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-secondary-green/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-green">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-bold text-primary-navy mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">Thank you for shopping with Tight Lines Outfitters. Your gear will be shipped shortly. Check your email for a confirmation and tracking number.</p>
        <Link to="/" className="bg-primary-navy text-white px-8 py-3 rounded font-bold hover:bg-primary-navy/90 transition inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Nothing to checkout</h2>
        <Link to="/shop" className="text-highlight-orange font-bold hover:underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary-navy mb-10 text-center">Checkout</h1>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Shipping Form */}
          <div className="md:w-3/5 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-primary-navy mb-6">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-primary-navy" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-primary-navy" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Email Address</label>
                <input type="email" className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-primary-navy" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Shipping Address</label>
                <input type="text" className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-primary-navy" required />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">City</label>
                  <input type="text" className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-primary-navy" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Zip Code</label>
                  <input type="text" className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-primary-navy" required />
                </div>
              </div>
            </form>

            <h2 className="text-xl font-bold text-primary-navy mt-10 mb-6">Payment Method</h2>
            <div className="border border-highlight-orange bg-orange-50/50 rounded-lg p-4 flex items-center gap-4">
              <CreditCard className="text-highlight-orange" />
              <div>
                <p className="font-bold text-sm">Stripe Secure Payment</p>
                <p className="text-xs text-gray-500">You will be redirected to Stripe to complete your purchase safely.</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:w-2/5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-primary-navy mb-6">Your Order</h2>
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 truncate mr-2">{item.quantity}x {item.name}</span>
                    <span className="font-bold whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100 space-y-2 mb-6">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span className="text-secondary-green font-bold uppercase text-[10px]">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-primary-navy pt-2">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-primary-navy text-white py-4 rounded font-bold hover:bg-primary-navy/90 transition shadow-lg shadow-primary-navy/20"
              >
                Place Order
              </button>
              
              <Link to="/cart" className="flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase mt-4 hover:text-primary-navy transition">
                <ArrowLeft size={12} /> Edit Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
