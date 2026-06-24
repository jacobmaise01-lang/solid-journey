import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="/assets/logo_v1.png" alt="Tight Lines Outfitters" className="h-12 w-auto invert brightness-0" />
          <p className="text-sm text-accent-silver">
            Quality gear for every angler. From tournament pros to weekend hobbyists, we've got you covered with the best tackle, rods, and apparel.
          </p>
          <div className="flex gap-4">
            <Facebook size={18} className="hover:text-highlight-orange cursor-pointer transition" />
            <Instagram size={18} className="hover:text-highlight-orange cursor-pointer transition" />
            <Twitter size={18} className="hover:text-highlight-orange cursor-pointer transition" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-accent-silver">
            <li><a href="#" className="hover:text-white transition">Shop All</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition">Sale Items</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-accent-silver">
            <li><a href="#" className="hover:text-white transition">Rods & Reels</a></li>
            <li><a href="#" className="hover:text-white transition">Baits & Lures</a></li>
            <li><a href="#" className="hover:text-white transition">Tackle Boxes</a></li>
            <li><a href="#" className="hover:text-white transition">Apparel</a></li>
            <li><a href="#" className="hover:text-white transition">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-accent-silver">
            <li className="flex gap-3"><MapPin size={18} /> 123 Angler Way, Lakeside, ST 12345</li>
            <li className="flex gap-3"><Phone size={18} /> (555) 123-FISH</li>
            <li className="flex gap-3"><Mail size={18} /> hello@tightlines.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-center text-xs text-accent-silver">
        © 2026 Tight Lines Outfitters. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
