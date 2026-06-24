export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  categoryLabel: string;
  image: string;
  specs?: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "rod-001",
    name: "Tight Lines Pro Spin Rod",
    category: "rods-reels",
    categoryLabel: "Rods & Reels",
    price: 89.99,
    description: "A medium-action 7' spinning rod built with high-modulus graphite. Sensitive tip for feeling strikes, powerful backbone for fighting big fish. Perfect for bass, walleye, and pike.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    specs: ["7' medium action", "High-modulus graphite blank", "Stainless steel guides with zirconium inserts", "EVA foam handle", "1-piece design"],
    featured: true
  },
  {
    id: "reel-001",
    name: "Tight Lines Casting Reel",
    category: "rods-reels",
    categoryLabel: "Rods & Reels",
    price: 129.99,
    description: "Smooth 7-bearing baitcasting reel with a lightweight aluminum spool. Magnetic braking system for backlash-free casting. Ready for freshwater and light saltwater.",
    image: "/assets/mockup_detail.png",
    specs: ["6.3:1 gear ratio", "7 stainless steel bearings", "Magnetic braking system", "Aluminum spool", "Left/right hand retrieve"],
    featured: true
  },
  {
    id: "combo-001",
    name: "Tight Lines Starter Combo",
    category: "rods-reels",
    categoryLabel: "Rods & Reels",
    price: 69.99,
    description: "The perfect rod-and-reel combo for beginners. 6'6\" medium-light rod paired with a smooth spinning reel, pre-spooled with 8lb test line. Ready to fish out of the box.",
    image: "https://images.unsplash.com/photo-1615809003848-693158c546f2?auto=format&fit=crop&q=80&w=800",
    specs: ["6'6\" medium-light rod", "Size 30 spinning reel", "Pre-spooled with 8lb mono", "Comfortable cork handle", "Includes rod sleeve"],
    featured: false
  },
  {
    id: "bait-001",
    name: "Tight Lines Soft Plastics Kit",
    category: "baits",
    categoryLabel: "Artificial Baits",
    price: 14.99,
    description: "Assorted pack of 40 soft plastic baits in 5 proven colors. Includes worms, creature baits, and swimbaits. Scent-infused for extra attraction.",
    image: "https://images.unsplash.com/photo-1517520287167-4bda64282b54?auto=format&fit=crop&q=80&w=800",
    specs: ["40 baits total", "5 colors: watermelon, black/blue, green pumpkin, junebug, pearl", "Scent-infused", "Includes 10 worms, 10 creatures, 20 swimbaits", "Reusable zipper pouch"],
    featured: true
  },
  {
    id: "bait-002",
    name: "Tight Lines Crankbait Set",
    category: "baits",
    categoryLabel: "Artificial Baits",
    price: 24.99,
    description: "Set of 6 diving crankbaits with realistic fish patterns. Each dives to a different depth so you can cover the water column. Equipped with sharp VMC hooks.",
    image: "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?auto=format&fit=crop&q=80&w=800",
    specs: ["6 crankbaits", "Diving depths: 3-15 ft", "Realistic finish patterns", "VMC hooks pre-installed", "Tackle box included"],
    featured: false
  },
  {
    id: "tackle-001",
    name: "Tight Lines Terminal Tackle Kit",
    category: "tackle",
    categoryLabel: "Fishing Tackle",
    price: 19.99,
    description: "The essential terminal tackle kit. Over 200 pieces including hooks, swivels, snaps, split rings, and weights in a compact organizer box.",
    image: "https://images.unsplash.com/photo-1616198814651-e73f9603318d?auto=format&fit=crop&q=80&w=800",
    specs: ["200+ pieces", "Includes: hooks (sizes 2-10), barrel swivels, snap swivels, split rings, egg sinkers", "Tackle box organizer included", "Brass and nickel plated", "Salted freshwater use"],
    featured: true
  },
  {
    id: "tackle-002",
    name: "Premium Fluorocarbon Leader",
    category: "tackle",
    categoryLabel: "Fishing Tackle",
    price: 9.99,
    description: "High-quality fluorocarbon leader material. Nearly invisible underwater with excellent abrasion resistance. Spool contains 30 yards.",
    image: "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?auto=format&fit=crop&q=80&w=800",
    specs: ["30 yards per spool", "Available: 8lb, 12lb, 15lb, 20lb", "Near-invisible underwater", "High abrasion resistance", "Fast sinking"],
    featured: false
  },
  {
    id: "apparel-001",
    name: "Tight Lines Performance Tee",
    category: "apparel",
    categoryLabel: "Apparel",
    price: 29.99,
    description: "Moisture-wicking performance t-shirt with the Tight Lines logo. UPF 50+ sun protection, quick-dry fabric, and a comfortable athletic fit. Perfect for a day on the water.",
    image: "https://images.unsplash.com/photo-1616198814651-e73f9603318d?auto=format&fit=crop&q=80&w=800",
    specs: ["UPF 50+ sun protection", "Moisture-wicking fabric", "Quick-dry", "Screen-printed logo", "Available in Navy and Green", "Sizes S-3XL"],
    featured: true
  },
  {
    id: "apparel-002",
    name: "Tight Lines Trucker Hat",
    category: "apparel",
    categoryLabel: "Apparel",
    price: 24.99,
    description: "Classic foam-front trucker hat with mesh back. Embroidered Tight Lines logo. Adjustable snap closure fits all sizes.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    specs: ["Foam front, mesh back", "Embroidered logo", "Snap closure", "One size fits most", "Navy front, cream mesh"],
    featured: false
  }
];
