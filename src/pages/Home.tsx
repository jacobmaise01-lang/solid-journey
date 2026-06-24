import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Anchor, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600" 
            alt="Fishing on a calm lake" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master the Water with Premium Gear
            </h1>
            <p className="text-xl mb-8 text-accent-silver">
              Quality tackle, professional rods, and apparel designed for every angler. Shop Tight Lines Outfitters for gear that never lets you down.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-highlight-orange hover:bg-orange-600 text-white px-8 py-3 rounded font-bold transition flex items-center gap-2">
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded font-bold transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-accent-silver/10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-accent-silver/20 flex flex-col items-center text-center">
            <div className="bg-secondary-green/10 p-4 rounded-full mb-4 text-secondary-green">
              <Trophy size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Tournament Grade</h3>
            <p className="text-sm text-gray-600">Equipment tested and approved by professional tournament anglers.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-accent-silver/20 flex flex-col items-center text-center">
            <div className="bg-primary-navy/10 p-4 rounded-full mb-4 text-primary-navy">
              <Anchor size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Local Knowledge</h3>
            <p className="text-sm text-gray-600">Expert advice on what's biting and the best gear for our local waters.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-accent-silver/20 flex flex-col items-center text-center">
            <div className="bg-highlight-orange/10 p-4 rounded-full mb-4 text-highlight-orange">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-gray-600">We stand behind every product we sell. Satisfaction or your money back.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-navy mb-4 uppercase tracking-wider">Featured Gear</h2>
          <div className="w-24 h-1 bg-highlight-orange mx-auto"></div>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col h-full border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 left-4 bg-primary-navy text-white text-xs font-bold px-3 py-1 rounded">
                    {product.categoryLabel}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-highlight-orange transition">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-2xl font-bold text-secondary-green">${product.price}</span>
                    <span className="text-highlight-orange font-bold text-sm flex items-center gap-1">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="inline-block border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white px-10 py-3 rounded font-bold transition">
            Browse All Inventory
          </Link>
        </div>
      </section>

      {/* Brand Values / Secondary Hero */}
      <section className="bg-secondary-green py-16 text-white overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Built for the Outdoors</h2>
            <p className="text-lg mb-6 opacity-90">
              Tight Lines Outfitters was born from a passion for fishing. We know that when you're out on the water, your gear is the only thing between a story about "the one that got away" and a photo of the catch of a lifetime.
            </p>
            <p className="text-lg mb-8 opacity-90">
              That's why we only stock brands we trust and gear we use ourselves.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-highlight-orange mb-1">15+</div>
                <div className="text-sm uppercase tracking-widest font-semibold opacity-75">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight-orange mb-1">2k+</div>
                <div className="text-sm uppercase tracking-widest font-semibold opacity-75">Happy Anglers</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <img src="/assets/logo_v2.png" alt="Rugged Trout Logo" className="w-full max-w-md mx-auto opacity-20 md:opacity-100" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
