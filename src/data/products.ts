export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  features: string[];
  benefits: string[];
  stock: number;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: "zyloxir-smart-mop",
    name: "Zyloxir Self-Cleaning Smart Mop",
    description: "Cut your cleaning time in half. The Zyloxir Smart Mop separates dirty water from clean water automatically, ensuring you never mop with dirty water again.",
    price: 49.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1584820927498-cafe2c1c7669?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584820927498-cafe2c1c7669?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527515637-601e4676180a?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 1248,
    features: ["Dual-chamber bucket system", "Microfiber pads included", "360-degree rotating head", "Adjustable stainless steel handle"],
    benefits: ["Never touch dirty water again", "Safe for all hard floors", "Reaches under furniture easily", "Machine washable pads save money"],
    stock: 14,
    isBestseller: true
  },
  {
    id: "zyloxir-motion-light",
    name: "Zyloxir Ultra-Thin Motion Sensor Lights (3-Pack)",
    description: "Instantly illuminate dark cabinets, closets, and hallways without wiring. These ultra-thin, magnetic lights turn on automatically when you need them.",
    price: 34.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviews: 892,
    features: ["USB rechargeable battery", "Magnetic snap-on installation", "3 color temperatures", "120-degree motion detection"],
    benefits: ["No tools or wiring required", "Lasts up to 2 months on one charge", "Prevents stumbling in the dark", "Sleek design blends into any decor"],
    stock: 5,
    isBestseller: true
  },
  {
    id: "zyloxir-food-sealer",
    name: "Zyloxir One-Touch Vacuum Food Sealer",
    description: "Keep your food fresh up to 5x longer. This compact vacuum sealer locks in flavor and prevents freezer burn with a single press.",
    price: 65.00,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606859191214-25806e8e2423?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviews: 456,
    features: ["Dry and moist food modes", "Built-in bag cutter", "Compact footprint", "Includes starter bags"],
    benefits: ["Save money by buying in bulk", "Prevent food waste", "Perfect for meal prep", "Preserve nutrients and flavor"],
    stock: 22,
    isBestseller: false
  },
  {
    id: "zyloxir-shower-head",
    name: "Zyloxir High-Pressure Filtered Shower Head",
    description: "Transform your daily shower into a spa experience. Boosts water pressure while filtering out chlorine and impurities for healthier skin and hair.",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 2105,
    features: ["Micro-nozzle technology", "Multi-stage filtration stones", "3 spray modes", "Universal fit"],
    benefits: ["Increases water pressure up to 200%", "Saves up to 30% water", "Reduces dry skin and dandruff", "Installs in 1 minute without tools"],
    stock: 8,
    isBestseller: true
  }
];
