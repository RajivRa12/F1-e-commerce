import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { ShoppingCart, Star, Heart, Package, Sun, Settings, Crown } from "lucide-react";

export default function CategoryCaps() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const products = [
    {
      id: 201,
      name: "Monaco GP Snapback",
      price: 35,
      originalPrice: 45,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "White"],
      badge: "BESTSELLER",
      inventory: 67,
      style: "Snapback",
      features: ["Adjustable", "Embroidered Logo", "Cotton Blend"]
    },
    {
      id: 202,
      name: "F1 Championship Fitted Cap",
      price: 42,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop",
      colors: ["Navy", "Black", "Red"],
      badge: "LIMITED",
      inventory: 23,
      style: "Fitted",
      features: ["New Era 59FIFTY", "Official Licensed", "Wool Blend"]
    },
    {
      id: 203,
      name: "Silverstone Dad Hat",
      price: 28,
      rating: 4.6,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=500&fit=crop",
      colors: ["Khaki", "Black", "Navy"],
      badge: null,
      inventory: 89,
      style: "Dad Hat",
      features: ["Unstructured", "Curved Brim", "Comfortable Fit"]
    },
    {
      id: 204,
      name: "Podium Victory Trucker",
      price: 32,
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1606235165915-eb8fe9b2c7c0?w=400&h=500&fit=crop",
      colors: ["White/Black", "Red/White", "Navy/White"],
      badge: null,
      inventory: 45,
      style: "Trucker",
      features: ["Mesh Back", "Foam Front", "Snapback Closure"]
    },
    {
      id: 205,
      name: "Speed Demon Beanie",
      price: 25,
      rating: 4.5,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
      colors: ["Black", "Grey", "Red"],
      badge: null,
      inventory: 78,
      style: "Beanie",
      features: ["100% Acrylic", "Warm & Soft", "Racing Logo"]
    },
    {
      id: 206,
      name: "Pit Crew Technical Cap",
      price: 48,
      originalPrice: 60,
      rating: 4.8,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1572213426852-0e4ed8f41ff6?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "Navy"],
      badge: "TECHNICAL",
      inventory: 34,
      style: "Performance",
      features: ["Moisture Wicking", "UV Protection", "Lightweight"]
    },
    {
      id: 207,
      name: "Grand Prix Vintage Cap",
      price: 38,
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      colors: ["Vintage Black", "Faded Red", "Worn Navy"],
      badge: "VINTAGE",
      inventory: 19,
      style: "Vintage",
      features: ["Distressed Look", "Vintage Logo", "Aged Fabric"]
    },
    {
      id: 208,
      name: "Racing Legends Bucket Hat",
      price: 33,
      rating: 4.4,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1514327623185-e3b2c7c7b4d3?w=400&h=500&fit=crop",
      colors: ["Olive", "Black", "Khaki"],
      badge: null,
      inventory: 52,
      style: "Bucket",
      features: ["Wide Brim", "Packable", "All Weather"]
    },
    {
      id: 209,
      name: "Championship Flexfit Cap",
      price: 36,
      rating: 4.7,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1566327433512-0f7e2095b57f?w=400&h=500&fit=crop",
      colors: ["Black", "Navy", "Grey"],
      badge: null,
      inventory: 41,
      style: "Flexfit",
      features: ["Stretchable", "Comfort Fit", "Spandex Blend"]
    },
    {
      id: 210,
      name: "Victory Lane Premium Cap",
      price: 55,
      originalPrice: 75,
      rating: 4.9,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=500&fit=crop",
      colors: ["Gold", "Black", "Silver"],
      badge: "PREMIUM",
      inventory: 12,
      style: "Premium",
      features: ["Leather Strap", "Metal Eyelets", "Premium Materials"]
    }
  ];

  const getStyleIcon = (style: string) => {
    if (style === "Premium" || style === "Limited") return <Crown className="h-3 w-3" />;
    if (style === "Performance" || style === "Technical") return <Settings className="h-3 w-3" />;
    return <Sun className="h-3 w-3" />;
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-racing-red">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Caps</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-foreground mb-4">
            RACING CAPS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Complete your racing look with our premium cap collection. 
            From classic snapbacks to technical performance wear - find your perfect fit.
          </p>
        </div>

        {/* Style Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-sm font-semibold">Snapbacks</div>
            <div className="text-xs text-muted-foreground">Adjustable</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-sm font-semibold">Fitted</div>
            <div className="text-xs text-muted-foreground">New Era Style</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-sm font-semibold">Dad Hats</div>
            <div className="text-xs text-muted-foreground">Casual Wear</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-sm font-semibold">Performance</div>
            <div className="text-xs text-muted-foreground">Technical</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-sm font-semibold">Beanies</div>
            <div className="text-xs text-muted-foreground">Cold Weather</div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="text-sm text-muted-foreground">
            Showing {products.length} caps & headwear
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-background border border-border rounded-md px-3 py-2 text-sm">
              <option>All Styles</option>
              <option>Snapbacks</option>
              <option>Fitted Caps</option>
              <option>Dad Hats</option>
              <option>Performance</option>
              <option>Beanies</option>
            </select>
            <select className="bg-background border border-border rounded-md px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
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
                          product.badge === 'TECHNICAL' ? 'bg-blue-600 text-white' :
                          product.badge === 'VINTAGE' ? 'bg-amber-600 text-white' :
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
                      <h3 className="font-bold text-foreground group-hover:text-racing-red transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {product.style}
                      </span>
                    </div>
                    
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
                          {getStyleIcon(product.style)}
                          <span className="ml-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-border ${
                            color === 'Black' || color === 'Vintage Black' ? 'bg-black' :
                            color === 'White' || color === 'Red/White' || color === 'Navy/White' || color === 'White/Black' ? 'bg-white border-2' :
                            color === 'Red' || color === 'Faded Red' ? 'bg-racing-red' :
                            color === 'Navy' || color === 'Worn Navy' ? 'bg-blue-900' :
                            color === 'Grey' ? 'bg-gray-500' :
                            color === 'Gold' ? 'bg-yellow-500' :
                            color === 'Silver' ? 'bg-gray-400' :
                            color === 'Khaki' ? 'bg-yellow-700' :
                            color === 'Olive' ? 'bg-green-700' :
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
                      <span className={`${product.inventory < 20 ? 'text-racing-red font-semibold' : ''}`}>
                        {product.inventory < 20 ? `Only ${product.inventory} left!` : `${product.inventory} in stock`}
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
            Load More Caps
          </Button>
        </div>
      </div>
    </div>
  );
}
