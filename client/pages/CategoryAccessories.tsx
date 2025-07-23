import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { ShoppingCart, Star, Heart, Package, Watch, Briefcase, KeyRound, Zap } from "lucide-react";

export default function CategoryAccessories() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const products = [
    {
      id: 301,
      name: "Monaco GP Racing Watch",
      price: 189,
      originalPrice: 249,
      rating: 4.9,
      reviews: 187,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop",
      colors: ["Black", "Silver", "Gold"],
      badge: "PREMIUM",
      inventory: 23,
      category: "Watches",
      features: ["Chronograph", "Water Resistant", "Racing Inspired"]
    },
    {
      id: 302,
      name: "F1 Racing Gloves",
      price: 45,
      rating: 4.7,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "White"],
      badge: "BESTSELLER",
      inventory: 67,
      category: "Gloves",
      features: ["Grip Technology", "Breathable", "Professional Grade"]
    },
    {
      id: 303,
      name: "Speed Demon Sunglasses",
      price: 78,
      originalPrice: 98,
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop",
      colors: ["Black", "Silver", "Blue"],
      badge: "LIMITED",
      inventory: 34,
      category: "Eyewear",
      features: ["UV Protection", "Polarized", "Racing Style"]
    },
    {
      id: 304,
      name: "Pit Crew Tool Bag",
      price: 89,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "Navy"],
      badge: null,
      inventory: 45,
      category: "Bags",
      features: ["Durable Canvas", "Multiple Compartments", "Racing Patches"]
    },
    {
      id: 305,
      name: "Championship Keychain",
      price: 15,
      rating: 4.5,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=500&fit=crop",
      colors: ["Silver", "Gold", "Black"],
      badge: null,
      inventory: 156,
      category: "Keychains",
      features: ["Metal Construction", "F1 Logo", "Collectible"]
    },
    {
      id: 306,
      name: "Racing Wallet",
      price: 35,
      rating: 4.7,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop",
      colors: ["Black", "Brown", "Red"],
      badge: null,
      inventory: 78,
      category: "Wallets",
      features: ["Genuine Leather", "RFID Blocking", "Compact Design"]
    },
    {
      id: 307,
      name: "F1 Racing Lanyard",
      price: 12,
      rating: 4.4,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=500&fit=crop",
      colors: ["Red", "Black", "Blue"],
      badge: null,
      inventory: 234,
      category: "Lanyards",
      features: ["Detachable Clip", "Official Logo", "Durable Fabric"]
    },
    {
      id: 308,
      name: "Podium Victory Belt",
      price: 55,
      originalPrice: 75,
      rating: 4.8,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
      colors: ["Black", "Brown", "Navy"],
      badge: "PREMIUM",
      inventory: 29,
      category: "Belts",
      features: ["Genuine Leather", "Racing Buckle", "Adjustable"]
    },
    {
      id: 309,
      name: "Racing Phone Case",
      price: 25,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1512499617640-c4ed1c4e3d6e?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "Clear"],
      badge: null,
      inventory: 89,
      category: "Tech",
      features: ["Drop Protection", "Racing Design", "Wireless Charging"]
    },
    {
      id: 310,
      name: "Grand Prix Scarf",
      price: 32,
      rating: 4.5,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=500&fit=crop",
      colors: ["Red", "Navy", "Black"],
      badge: null,
      inventory: 67,
      category: "Scarves",
      features: ["Silk Blend", "Racing Graphics", "Luxury Feel"]
    },
    {
      id: 311,
      name: "Pit Stop Water Bottle",
      price: 18,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "Silver"],
      badge: "ECO",
      inventory: 123,
      category: "Drinkware",
      features: ["Stainless Steel", "Insulated", "Racing Logo"]
    },
    {
      id: 312,
      name: "Championship Pin Set",
      price: 22,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=500&fit=crop",
      colors: ["Multi", "Gold", "Silver"],
      badge: "COLLECTIBLE",
      inventory: 45,
      category: "Pins",
      features: ["Enamel Pins", "Collectible Set", "Official Design"]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Watches": return <Watch className="h-3 w-3" />;
      case "Bags": return <Briefcase className="h-3 w-3" />;
      case "Keychains": return <KeyRound className="h-3 w-3" />;
      default: return <Zap className="h-3 w-3" />;
    }
  };

  const categories = [
    "All", "Watches", "Gloves", "Eyewear", "Bags", "Wallets", "Tech", "Drinkware", "Collectibles"
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-racing-red">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Accessories</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-foreground mb-4">
            RACING ACCESSORIES
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Complete your racing lifestyle with our premium accessories collection. 
            From professional gear to everyday essentials - everything a true racing fan needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-racing-red hover:bg-racing-red/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="text-sm text-muted-foreground">
            Showing {products.length} accessories
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-background border border-border rounded-md px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Selling</option>
              <option>Newest</option>
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
                          product.badge === 'ECO' ? 'bg-green-600 text-white' :
                          product.badge === 'COLLECTIBLE' ? 'bg-amber-600 text-white' :
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
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-foreground group-hover:text-racing-red transition-colors text-sm">
                        {product.name}
                      </h3>
                      <span className="text-xs bg-muted px-2 py-1 rounded flex items-center">
                        {getCategoryIcon(product.category)}
                        <span className="ml-1">{product.category}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-racing-yellow text-racing-yellow" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="text-xs text-muted-foreground bg-muted/50 rounded px-2 py-1">
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-border ${
                            color === 'Black' ? 'bg-black' :
                            color === 'White' ? 'bg-white' :
                            color === 'Red' ? 'bg-racing-red' :
                            color === 'Navy' ? 'bg-blue-900' :
                            color === 'Blue' ? 'bg-blue-500' :
                            color === 'Grey' ? 'bg-gray-500' :
                            color === 'Gold' ? 'bg-yellow-500' :
                            color === 'Silver' ? 'bg-gray-400' :
                            color === 'Brown' ? 'bg-amber-800' :
                            color === 'Clear' ? 'bg-transparent border-2' :
                            color === 'Multi' ? 'bg-gradient-to-r from-red-500 to-blue-500' :
                            'bg-gray-300'
                          }`}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{product.colors.length - 3}
                        </span>
                      )}
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
                      <span className={`${product.inventory < 30 ? 'text-racing-red font-semibold' : ''}`}>
                        {product.inventory < 30 ? `Only ${product.inventory} left!` : `${product.inventory} in stock`}
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
            Load More Accessories
          </Button>
        </div>
      </div>
    </div>
  );
}
