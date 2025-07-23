import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { ShoppingCart, Star, Heart, Package, Wind, Shield, Thermometer } from "lucide-react";

export default function CategoryJackets() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const products = [
    {
      id: 101,
      name: "Monaco GP Racing Windbreaker",
      price: 89,
      originalPrice: 115,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "White"],
      badge: "BESTSELLER",
      inventory: 23,
      features: ["Water Resistant", "Windproof", "Lightweight"]
    },
    {
      id: 102,
      name: "F1 Championship Track Jacket",
      price: 125,
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc8b6ff1?w=400&h=500&fit=crop",
      colors: ["Navy", "Red", "Black"],
      badge: "LIMITED",
      inventory: 12,
      features: ["Premium Fabric", "Championship Design", "Limited Edition"]
    },
    {
      id: 103,
      name: "Silverstone Rain Jacket",
      price: 95,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=500&fit=crop",
      colors: ["Charcoal", "Navy", "Green"],
      badge: null,
      inventory: 31,
      features: ["Waterproof", "Breathable", "Packable"]
    },
    {
      id: 104,
      name: "Podium Victory Bomber",
      price: 149,
      originalPrice: 189,
      rating: 4.9,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
      colors: ["Gold", "Black", "Silver"],
      badge: "PREMIUM",
      inventory: 8,
      features: ["Premium Satin", "Championship Graphics", "Luxury Finish"]
    },
    {
      id: 105,
      name: "Circuit Thermal Racing Jacket",
      price: 110,
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1518450757707-d21c8c53c8df?w=400&h=500&fit=crop",
      colors: ["Black", "Grey", "Red"],
      badge: null,
      inventory: 19,
      features: ["Thermal Insulation", "Wind Resistant", "Comfort Fit"]
    },
    {
      id: 106,
      name: "Pit Crew Technical Jacket",
      price: 135,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
      colors: ["Red", "Navy", "White"],
      badge: "TECHNICAL",
      inventory: 15,
      features: ["Technical Fabric", "Professional Grade", "Pit Crew Inspired"]
    },
    {
      id: 107,
      name: "Speed Demon Leather Jacket",
      price: 245,
      originalPrice: 320,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=500&fit=crop",
      colors: ["Black", "Brown", "Red"],
      badge: "LUXURY",
      inventory: 6,
      features: ["Genuine Leather", "Racing Inspired", "Premium Quality"]
    },
    {
      id: 108,
      name: "Grand Prix Softshell",
      price: 78,
      rating: 4.5,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
      colors: ["Navy", "Black", "Grey"],
      badge: null,
      inventory: 42,
      features: ["Softshell Technology", "Flexible", "All Weather"]
    }
  ];

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Water") || feature.includes("Rain")) return <Shield className="h-3 w-3" />;
    if (feature.includes("Wind")) return <Wind className="h-3 w-3" />;
    if (feature.includes("Thermal")) return <Thermometer className="h-3 w-3" />;
    return <Star className="h-3 w-3" />;
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-racing-red">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Jackets</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-foreground mb-4">
            RACING JACKETS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Professional-grade jackets engineered for performance and style. 
            From windbreakers to luxury leather, dominate every season.
          </p>
        </div>

        {/* Category Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4 text-center">
            <Shield className="h-8 w-8 text-racing-red mx-auto mb-2" />
            <div className="text-sm font-semibold">Weather Protection</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <Wind className="h-8 w-8 text-racing-yellow mx-auto mb-2" />
            <div className="text-sm font-semibold">Wind Resistance</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <Thermometer className="h-8 w-8 text-racing-silver mx-auto mb-2" />
            <div className="text-sm font-semibold">Temperature Control</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <Star className="h-8 w-8 text-racing-red mx-auto mb-2" />
            <div className="text-sm font-semibold">Racing Performance</div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="text-sm text-muted-foreground">
            Showing {products.length} jackets
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-background border border-border rounded-md px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-racing-red/50">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${
                          product.badge === 'BESTSELLER' ? 'bg-racing-red text-white' :
                          product.badge === 'LIMITED' ? 'bg-racing-yellow text-black' :
                          product.badge === 'PREMIUM' ? 'bg-purple-600 text-white' :
                          product.badge === 'LUXURY' ? 'bg-gold-600 text-white' :
                          product.badge === 'TECHNICAL' ? 'bg-blue-600 text-white' :
                          'bg-racing-carbon text-white'
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="bg-white/90 text-racing-black hover:bg-white p-2"
                        onClick={(e) => {
                          e.preventDefault();
                          const wishlistItem = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            addedAt: new Date().toISOString()
                          };
                          if (isInWishlist(product.id)) {
                            removeFromWishlist(product.id);
                          } else {
                            addToWishlist(wishlistItem);
                          }
                        }}
                      >
                        <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-racing-red text-racing-red' : ''}`} />
                      </Button>
                      <Button size="sm" className="bg-white text-racing-black hover:bg-white/90 p-2">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-racing-red transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-racing-yellow text-racing-yellow" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-muted-foreground bg-muted/50 rounded px-2 py-1">
                          {getFeatureIcon(feature)}
                          <span className="ml-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-border ${
                            color === 'Black' ? 'bg-black' :
                            color === 'White' ? 'bg-white' :
                            color === 'Red' ? 'bg-racing-red' :
                            color === 'Navy' ? 'bg-blue-900' :
                            color === 'Grey' ? 'bg-gray-500' :
                            color === 'Gold' ? 'bg-yellow-500' :
                            color === 'Silver' ? 'bg-gray-400' :
                            color === 'Charcoal' ? 'bg-gray-700' :
                            color === 'Green' ? 'bg-green-600' :
                            color === 'Brown' ? 'bg-amber-800' :
                            'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-foreground">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Inventory Counter */}
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Package className="h-3 w-3 mr-1" />
                      <span className={`${product.inventory < 10 ? 'text-racing-red font-semibold' : ''}`}>
                        {product.inventory < 10 ? `Only ${product.inventory} left!` : `${product.inventory} in stock`}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Jackets
          </Button>
        </div>
      </div>
    </div>
  );
}
