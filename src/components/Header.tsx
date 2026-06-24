import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-primary-navy text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo_v1.png" alt="Tight Lines Outfitters" className="h-10 w-auto invert brightness-0" />
          <span className="text-xl font-bold tracking-tight hidden sm:block">TIGHT LINES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
          <Link to="/" className="hover:text-accent-silver transition">Home</Link>
          <Link to="/shop" className="hover:text-accent-silver transition">Shop</Link>
          <Link to="/categories" className="hover:text-accent-silver transition">Categories</Link>
          <Link to="/about" className="hover:text-accent-silver transition">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hover:text-accent-silver p-1 transition">
            <Search size={20} />
          </button>
          <Link to="/cart" className="relative hover:text-accent-silver p-1 transition">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-highlight-orange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary-navy border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-center font-semibold uppercase tracking-wider">
          <Link to="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/5">Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/5">Shop</Link>
          <Link to="/categories" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/5">Categories</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/5">About</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
